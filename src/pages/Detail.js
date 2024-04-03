import Banner from "../components/Detail/Banner";
import ProductDesc from "../components/Detail/ProductDesc";
import ProductInfo from "../components/Detail/ProductInfo";
import RelatedProduct from "../components/Detail/RelatedProduct";
import Livechat from "../components/Livechat/Livechat";
import ScrollToTop from "../components/Utility/ScrollToTop";

const DetailPage = () => {
  return (
    <>
      <Banner></Banner>
      <ProductInfo></ProductInfo>
      <ProductDesc></ProductDesc>
      <RelatedProduct></RelatedProduct>
      <Livechat></Livechat>
      <ScrollToTop></ScrollToTop>
    </>
  );
};

export default DetailPage;
