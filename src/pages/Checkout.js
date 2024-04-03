import classes from "./Checkout.module.css";
import Banner from "../components/Checkout/Banner";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import CheckoutTotal from "../components/Checkout/CheckoutTotal";
import Livechat from "../components/Livechat/Livechat";
import ScrollToTop from "../components/Utility/ScrollToTop";

const CheckoutPage = () => {
  return (
    <>
      <Banner></Banner>
      <h2>BILLING DETAILS</h2>
      <div className={classes["checkout__content"]}>
        <CheckoutForm></CheckoutForm>
        <CheckoutTotal></CheckoutTotal>
      </div>
      <Livechat></Livechat>
      <ScrollToTop></ScrollToTop>
    </>
  );
};

export default CheckoutPage;
