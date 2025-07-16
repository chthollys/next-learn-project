import DOMPurify from "dompurify";
import { JSDOM } from "jsdom";

export const sanitizeHtml = (dirtyHtml: string) => {
  const { window } = new JSDOM("");
  const purify = DOMPurify(window);
  return purify.sanitize(dirtyHtml);
};

export const convertLineBreakToHtml = (text: string) => {
  return text.replace(/\n/g, "<br />");
};
