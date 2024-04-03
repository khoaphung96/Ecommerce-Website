import { Link } from "react-router-dom";
import Banner from "../components/cart/Banner";
import CartDesc from "../components/cart/CartDesc";
import CartTotal from "../components/cart/CartTotal";
import classes from "./Cart.module.css";
import { useSelector } from "react-redux";
import ScrollToTop from "../components/Utility/ScrollToTop";
import Livechat from "../components/Livechat/Livechat";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <>
      <Banner></Banner>
      <h2>Shopping Cart</h2>
      {cart.length > 0 && (
        <div className={classes["cart__content"]}>
          <CartDesc cart={cart}></CartDesc>
          <CartTotal cart={cart}></CartTotal>
        </div>
      )}
      {cart.length > 0 && (
        <div className={classes["cart__action"]}>
          <Link to="/shop">Coutinue Shopping</Link>
          <Link to="/checkout">Proceed to Checkout</Link>
        </div>
      )}
      {cart.length === 0 && (
        <div className={classes["cart__noProd"]}>
          <h3>No Products Found In Cart!</h3>
          <Link to="/shop">Back to Shop</Link>
        </div>
      )}
      <Livechat></Livechat>
      <ScrollToTop></ScrollToTop>
    </>
  );
};

export default CartPage;
