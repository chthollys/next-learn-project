"use client";

import { ChangeEvent, useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import { ImagePickerProps } from "~/lib/definitions";

export default function ImagePicker({
  name = "image",
  label = "image",
}: ImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInput = useRef<HTMLInputElement>(null);
  const handlePickImage = (): void => {
    imageInput.current?.click();
  };

  const handleImagePreview = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (typeof fileReader.result === "string") {
        setPickedImage(fileReader.result);
      }
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image selected</p>}
          {pickedImage && <img src={pickedImage} alt="Selected image" />}
        </div>
        <input
          ref={imageInput}
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          id={name}
          name={name}
          className={classes.input}
          onChange={handleImagePreview}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickImage}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
