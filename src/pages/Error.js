import MainFooter from "../layout/MainFooter";
import MainNavigation from "../layout/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation></MainNavigation>
      <h1 style={{ textAlign: "center" }}>Could not find Resource or Page!</h1>
      <MainFooter></MainFooter>
    </>
  );
};

export default ErrorPage;
