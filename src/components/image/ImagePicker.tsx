import classes from "./ImagePicker.module.css";
import { ImagePickerProps } from "~/lib/definitions";

export default function ImagePicker({ name, label }: ImagePickerProps) {
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          type="file"
          accept="image/png, image/jpeg"
          id={name}
          name={name}
        />
      </div>
    </div>
  );
}
