export const getPathName = () => {
  const isLocalhost = window.location.hostname === "localhost";
  const pathname = isLocalhost ? "public/images" : "images";
  return pathname;
};
