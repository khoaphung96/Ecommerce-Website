import classes from "./CheckoutTotal.module.css";
import { useSelector } from "react-redux";

const CheckoutTotal = () => {
  const cart = useSelector((state) => state.cart.cart);

  let total = 0;
  cart.map((prod) => (total = total + Number(prod.total)));
  total = String(total);

  return (
    <div className={classes["checkout__total"]}>
      <h2>YOUR ORDER</h2>
      <div className={classes["checkout__total-products"]}>
        {cart.map((product, index) => (
          <div className={classes["checkout__total-product"]} key={product.id}>
            <p>{`${index + 1}) ${product.name}`}</p>
            {product.total.length === 7 && (
              <p>
                {product.total.slice(0, 1) +
                  "." +
                  product.total.slice(1, 4) +
                  "." +
                  product.total.slice(4, 7) +
                  " VND" +
                  " x" +
                  product.quantity}
              </p>
            )}
            {product.total.length === 8 && (
              <p>
                {product.total.slice(0, 2) +
                  "." +
                  product.total.slice(2, 5) +
                  "." +
                  product.total.slice(5, 8) +
                  " VND" +
                  " x" +
                  product.quantity}
              </p>
            )}
            {product.total.length === 9 && (
              <p>
                {product.total.slice(0, 3) +
                  "." +
                  product.total.slice(3, 6) +
                  "." +
                  product.total.slice(6, 9) +
                  " VND" +
                  " x" +
                  product.quantity}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className={classes["checkout__total-total"]}>
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

export default CheckoutTotal;
