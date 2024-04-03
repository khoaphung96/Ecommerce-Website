export const loaderToken = () => {
  const token = localStorage.getItem("token");
  return token;
};
