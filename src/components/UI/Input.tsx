import { InputProps } from "~/lib/definitions";

export default function Input({
  name,
  id = name,
  label,
  type = "text",
  textArea,
  errorMsg,
  children = undefined,
  ...props
}: InputProps) {
  let input = <input type={type} id={id} name={name} {...props} />;
  if (textArea) {
    input = (
      <textarea id={id} name={name} {...props}>
        {children}
      </textarea>
    );
  }
  return (
    <>
      <div className="mb-[6px] flex items-center gap-5 text-lg">
        <label htmlFor={id}>{label}</label>
        {errorMsg && (
          <p className="font-extralight text-red-500 tracking-wide">{`(${errorMsg})`}</p>
        )}
      </div>
      {input}
    </>
  );
}
