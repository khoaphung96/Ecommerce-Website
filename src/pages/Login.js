import Login from "../components/Login/Login";
import banner from "../Image/banner1-register.jpg";
import ScrollToTop from "../components/Utility/ScrollToTop";

const LoginPage = () => {
  const bannerImg = banner;

  return (
    <>
      <Login banner={bannerImg}></Login>
      <ScrollToTop></ScrollToTop>
    </>
  );
};

export default LoginPage;
