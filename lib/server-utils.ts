"use server";

import {
  S3Client,
  PutObjectCommand,
  PutObjectCommandInput,
} from "@aws-sdk/client-s3";
import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import { ErrorObject, StreamImageConfigObj } from "./definitions";
import fs from "node:fs";
import path from "node:path";
import { randomUUID } from "node:crypto";

const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

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

export const uploadImageToS3 = async (
  image: File,
): Promise<{ success: boolean; error?: string | null; imgUrl?: string }> => {
  try {
    const buffer = Buffer.from(await image.arrayBuffer());
    const filename = `${randomUUID()}-${image.name.replace(/\..+$/, "")}`;
    const key = `images/${filename}`;

    const params: PutObjectCommandInput = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: key,
      Body: buffer,
      ContentType: image.type,
    };
    const command = new PutObjectCommand(params);
    await s3Client.send(command);
    return {
      success: true,
      imgUrl: `https://${process.env.AWS_S3_BUCKET_NAME}.${process.env.AWS_S3_REGION}.s3.amazonaws.com/${key}`,
    };
  } catch (error) {
    let errorMsg = "Error occurred in uploading image.";
    if (error instanceof Error) {
      errorMsg = error.message;
    }
    return {
      success: false,
      error: errorMsg,
    };
  }
};
