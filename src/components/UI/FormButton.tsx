"use client";
import { useFormStatus } from "react-dom";
import FormButtonProps from "~/lib/definitions";

export default function FormButton({
  label = "Submit",
  pendingText = "Submitting...",
}: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? pendingText : label}
    </button>
  );
}
