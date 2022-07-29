// Formats path
export const formatAvailability = (path) => {
  if (path.includes("-")) {
    return path.toLowerCase().replace("-", " ");
  }
  return path.toLowerCase().replace(" ", "-");
};
