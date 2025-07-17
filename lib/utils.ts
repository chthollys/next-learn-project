import { FormMealErrorObjTree } from "./definitions";

export const isKey = <T extends object>(
  obj: T,
  k: PropertyKey,
): k is keyof T => {
  return k in obj;
};

export const convertLineBreakToHtml = (text: string) => {
  return text.replace(/\n/g, "<br />");
};

export const getErrorMessages = ({
  // errors,
  properties,
}: FormMealErrorObjTree): string[] | null => {
  const errorArrays: string[][] = [];
  if (!properties) return null;
  Object.keys(properties).forEach((k) => {
    if (isKey(properties, k) && properties[k]) {
      errorArrays.push(properties[k].errors);
    }
  });
  return errorArrays.flat();
};

// export const sanitizeObject = <T extends { [key: string]: string | number }>(
//   obj: T,
//   keysToSkip?: string | string[],
// ): T => {
//   const sanitizedObject = {} as T;

//   const skipSet = new Set(
//     Array.isArray(keysToSkip) ? keysToSkip : keysToSkip ? [keysToSkip] : [],
//   );

//   // Iterate over each key in the input object.
//   for (const key in obj) {
//     // Ensure the key is an own property of the object, not from the prototype chain.
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//       const value = obj[key];

//       // Check if the value is a string and the key is not in our skip set.
//       if (typeof value === "string" && !skipSet.has(key)) {
//         // If it's a string and not excluded, sanitize it.
//         sanitizedObject[key] = xss(value) as any;
//       } else {
//         // Otherwise, copy the original value.
//         sanitizedObject[key] = value;
//       }
//     }
//   }

//   return sanitizedObject;
// };
