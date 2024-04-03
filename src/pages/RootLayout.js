import { Outlet } from "react-router-dom";
import MainNavigation from "../layout/MainNavigation";
import MainFooter from "../layout/MainFooter";

const RootLayout = () => {
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        <Outlet></Outlet>
      </main>
      <MainFooter></MainFooter>
    </>
  );
};

export default RootLayout;
