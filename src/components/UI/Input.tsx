import { InputProps } from "~/lib/definitions";

export default function Input({
  name,
  id = name,
  label,
  type = "text",
  defaultValue,
  errorMsg,
  textArea,
  children = undefined,
  ...props
}: InputProps) {
  let input = (
    <input
      type={type}
      id={id}
      name={name}
      defaultValue={defaultValue ?? ""}
      {...props}
    />
  );
  if (textArea) {
    input = (
      <textarea
        id={id}
        name={name}
        defaultValue={defaultValue ?? ""}
        {...props}
      >
        {children}
      </textarea>
    );
  }
  return (
    <>
      <div className="mb-[6px] flex items-center gap-5 text-lg">
        <label htmlFor={id}>{label}</label>
        {errorMsg && (
          <p className="font-extralight tracking-wide text-red-500">{`(${errorMsg})`}</p>
        )}
      </div>
      {input}
    </>
  );
}
