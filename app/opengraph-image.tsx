import {
  alt as socialAlt,
  contentType as socialContentType,
  createSocialImage,
  size as socialSize,
} from "./social-image";

export const alt = socialAlt;
export const contentType = socialContentType;
export const size = socialSize;

export default async function Image() {
  return createSocialImage();
}
