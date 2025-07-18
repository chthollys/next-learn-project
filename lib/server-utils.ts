"use server";

import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import { ErrorObject, StreamImageConfigObj } from "./definitions";
import fs from "node:fs";
import path from "node:path";

export const sanitizeHtml = async (dirtyHtml: string) => {
  const { window } = new JSDOM("");
  const purify = DOMPurify(window);
  return purify.sanitize(dirtyHtml);
};

export const streamImage = async (
  image: File,
  { name, location }: StreamImageConfigObj,
): Promise<{ imgPath: string }> => {
  const extension = path.extname(image.name);
  const filename = `${name ?? image.name.replace(/\..+$/, "")}${extension}`;
  const urlPath = path.join(location, filename);
  const fullPath = path.join(process.cwd(), "public", urlPath);

  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    throw new ErrorObject(`Current working directory didnt exist: ${dir}`, 500);
  }
  const stream = fs.createWriteStream(fullPath);
  const bufferedImg = await image.arrayBuffer();
  stream.write(Buffer.from(bufferedImg), (error) => {
    if (error) {
      throw new ErrorObject("Failed to save image", 500);
    }
  });
  return { imgPath: urlPath };
};
