import classes from "./CartTotal.module.css";

const CartTotal = (props) => {
  let total = 0;
  props.cart.map((prod) => (total = total + Number(prod.total)));
  total = String(total);

  return (
    <div className={classes["cart__total"]}>
      <h2>CART TOTAL</h2>
      <div className={classes["cart__total-subtotal"]}>
        <h3>SUBTOTAL</h3>
        {total.length === 7 && (
          <p>
            {total.slice(0, 1) +
              "." +
              total.slice(1, 4) +
              "." +
              total.slice(4, 7) +
              " VND"}
          </p>
        )}
        {total.length === 8 && (
          <p>
            {total.slice(0, 2) +
              "." +
              total.slice(2, 5) +
              "." +
              total.slice(5, 8) +
              " VND"}
          </p>
        )}
        {total.length === 9 && (
          <p>
            {total.slice(0, 3) +
              "." +
              total.slice(3, 6) +
              "." +
              total.slice(6, 9) +
              " VND"}
          </p>
        )}
      </div>
      <div className={classes["cart__total-total"]}>
        <h3>TOTAL</h3>
        {total.length === 7 && (
          <p>
            {total.slice(0, 1) +
              "." +
              total.slice(1, 4) +
              "." +
              total.slice(4, 7) +
              " VND"}
          </p>
        )}
        {total.length === 8 && (
          <p>
            {total.slice(0, 2) +
              "." +
              total.slice(2, 5) +
              "." +
              total.slice(5, 8) +
              " VND"}
          </p>
        )}
        {total.length === 9 && (
          <p>
            {total.slice(0, 3) +
              "." +
              total.slice(3, 6) +
              "." +
              total.slice(6, 9) +
              " VND"}
          </p>
        )}
      </div>
    </div>
  );
};

export default CartTotal;
