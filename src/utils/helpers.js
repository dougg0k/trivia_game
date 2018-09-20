export const capitalize = text =>
  text && typeof text === "string"
    ? text.charAt(0).toUpperCase() + text.slice(1)
    : text;
