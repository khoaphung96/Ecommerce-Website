import Banner from "../components/Home/Banner";
import Categories from "../components/Home/Categories";
import OtherInfo from "../components/Home/OtherInfo";
import Products from "../components/Home/Products";
import cat1 from "../Image/product_1.png";
import cat2 from "../Image/product_2.png";
import cat3 from "../Image/product_3.png";
import cat4 from "../Image/product_4.png";
import cat5 from "../Image/product_5.png";
import banner from "../Image/banner1.jpg";
import ScrollToTop from "../components/Utility/ScrollToTop";
import Livechat from "../components/Livechat/Livechat";

const HomePage = () => {
  const categories = [
    { img: cat1, name: "iphone" },
    { img: cat2, name: "macbook" },
    { img: cat3, name: "ipad" },
    { img: cat4, name: "watch" },
    { img: cat5, name: "airpod" },
  ];

  const bannerImg = banner;

  return (
    <div>
      <Banner banner={bannerImg}></Banner>
      <Categories categories={categories}></Categories>
      <Products></Products>
      <OtherInfo></OtherInfo>
      <Livechat></Livechat>
      <ScrollToTop></ScrollToTop>
    </div>
  );
};

export default HomePage;
