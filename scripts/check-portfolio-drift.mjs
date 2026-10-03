#!/usr/bin/env node

// Compares the hardcoded public portfolio in components/Portfolio.tsx against
// a company registry and reports drift in both directions. Personal/angel
// positions on the public site are expected to be absent from the fund
// registry and are skipped.
//
// Accepted registries (both share the { entities: [{ name, aliases }] } shape):
//   - the LP portal registry (anti-fund-lp-model/data/company-registry.json)
//   - the tracker's canonical export (https://tracker.antifund.com/api/registry/export,
//     authenticated via the REGISTRY_EXPORT_TOKEN environment variable)
//
// Usage: node scripts/check-portfolio-drift.mjs --registry <path-or-url> [--strict]

import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const args = process.argv.slice(2);
const strict = args.includes("--strict");
const registryArgIndex = args.indexOf("--registry");
const registrySource = registryArgIndex >= 0 ? args[registryArgIndex + 1] : null;

if (!registrySource) {
  console.error(
    "usage: node scripts/check-portfolio-drift.mjs --registry <path-or-url> [--strict]",
  );
  process.exit(1);
}

function normalize(name) {
  return String(name)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const portfolioSource = await readFile(
  resolve(process.cwd(), "components/Portfolio.tsx"),
  "utf8",
);

const companyBlocks = portfolioSource.matchAll(
  /\{\s*name:\s*"([^"]+)"[\s\S]*?\n  \}/g,
);
const publicCompanies = [];
for (const match of companyBlocks) {
  const block = match[0];
  publicCompanies.push({
    name: match[1],
    personal: /personal:\s*true/.test(block),
  });
}

if (publicCompanies.length === 0) {
  console.error(
    "[portfolio-drift] failed to parse any companies from components/Portfolio.tsx",
  );
  process.exit(1);
}

async function fetchRegistry(url) {
  const token = process.env.REGISTRY_EXPORT_TOKEN;
  const response = await fetch(url, {
    headers: token ? { authorization: `Bearer ${token}` } : {},
  });
  if (!response.ok) {
    console.error(
      `[portfolio-drift] registry fetch failed: ${response.status} ${response.statusText}`,
    );
    process.exit(1);
  }
  return response.text();
}

const registryRaw = /^https?:\/\//.test(registrySource)
  ? await fetchRegistry(registrySource)
  : await readFile(resolve(process.cwd(), registrySource), "utf8");
const registry = JSON.parse(registryRaw);

const registryNames = new Map();
for (const entity of registry.entities ?? []) {
  registryNames.set(normalize(entity.name), entity.name);
  for (const alias of entity.aliases ?? []) {
    registryNames.set(normalize(alias), entity.name);
  }
}

const publicNames = new Set(
  publicCompanies.map((company) => normalize(company.name)),
);

function fuzzyMatch(candidate, names) {
  if (names.has(candidate)) {
    return true;
  }
  for (const name of names) {
    if (name.startsWith(`${candidate}-`) || candidate.startsWith(`${name}-`)) {
      return true;
    }
  }
  return false;
}

const registryNameSet = new Set(registryNames.keys());
const fundCompaniesMissingFromRegistry = publicCompanies.filter(
  (company) =>
    !company.personal && !fuzzyMatch(normalize(company.name), registryNameSet),
);
const registryMissingFromPublicSite = [...registryNames.values()].filter(
  (name, index, all) =>
    all.indexOf(name) === index && !fuzzyMatch(normalize(name), publicNames),
);

console.log(
  `[portfolio-drift] ${publicCompanies.length} public companies, ${registryNames.size} registry names`,
);

if (fundCompaniesMissingFromRegistry.length > 0) {
  console.log("\nFund-stage companies on antifund.com missing from registry:");
  for (const company of fundCompaniesMissingFromRegistry) {
    console.log(`  - ${company.name}`);
  }
}

if (registryMissingFromPublicSite.length > 0) {
  console.log("\nRegistry companies not shown on antifund.com:");
  for (const name of registryMissingFromPublicSite) {
    console.log(`  - ${name}`);
  }
}

if (
  fundCompaniesMissingFromRegistry.length === 0 &&
  registryMissingFromPublicSite.length === 0
) {
  console.log("  no drift found");
}

process.exit(strict && fundCompaniesMissingFromRegistry.length > 0 ? 1 : 0);
