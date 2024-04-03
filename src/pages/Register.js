import Register from "../components/Register/Register";
import banner from "../Image/banner1-register.jpg";
import ScrollToTop from "../components/Utility/ScrollToTop";

const RegisterPage = () => {
  const bannerImg = banner;

  return (
    <>
      <Register banner={bannerImg}></Register>
      <ScrollToTop></ScrollToTop>
    </>
  );
};

export default RegisterPage;
