import Banner from "../components/Shop/Banner";
import CategoryNavigation from "../components/Shop/CategoryNavigation";
import Product from "../components/Shop/Product";
import classes from "./Shop.module.css";
import ScrollToTop from "../components/Utility/ScrollToTop";
import Livechat from "../components/Livechat/Livechat";

const ShopPage = () => {
  return (
    <>
      <Banner></Banner>
      <div className={classes["shop__content"]}>
        <CategoryNavigation></CategoryNavigation>
        <Product></Product>
        <ScrollToTop></ScrollToTop>
        <Livechat></Livechat>
      </div>
    </>
  );
};

export default ShopPage;
