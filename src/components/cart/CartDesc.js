import classes from "./CartDesc.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const CartDesc = (props) => {
  const dispatch = useDispatch();

  const deleteProductOnCartHandler = (event) => {
    event.preventDefault();
    const id = event.currentTarget.id;

    const isDelete = window.confirm("Are you sure?");

    if (isDelete) {
      dispatch(cartActions.deleteProductOnCart(id));
    }
  };

  const decreaseHandler = (event) => {
    event.preventDefault();
    const id = event.currentTarget.id;
    const currentProduct = props.cart.filter((prod) => prod.id === id);

    if (Number(currentProduct[0].quantity) > 1) {
      console.log("a");
      dispatch(cartActions.updateCart({ type: "decrease", id: id }));
    }

    if (Number(currentProduct[0].quantity) === 1) {
      console.log("b");
      dispatch(cartActions.deleteProductOnCart(id));
    }
  };

  const increaseHandler = (event) => {
    event.preventDefault();
    const id = event.currentTarget.id;
    dispatch(cartActions.updateCart({ type: "increase", id: id }));
  };

  return (
    <div className={classes["cart__desc"]}>
      <div className={classes["cart__desc-name"]}>
        <h3>IMAGE</h3>
        <h3>PRODUCT</h3>
        <h3>PRICE</h3>
        <h3>QUANTITY</h3>
        <h3>TOTAL</h3>
        <h3>REMOVE</h3>
      </div>
      {props.cart.map((prod) => (
        <div className={classes["cart__desc-value"]} key={prod.id}>
          <img src={prod.img} alt={prod.name}></img>
          <p>{prod.name}</p>
          {prod.price.length === 7 && (
            <p>
              {prod.price.slice(0, 1) +
                "." +
                prod.price.slice(1, 4) +
                "." +
                prod.price.slice(4, 7) +
                " VND"}
            </p>
          )}
          {prod.price.length === 8 && (
            <p>
              {prod.price.slice(0, 2) +
                "." +
                prod.price.slice(2, 5) +
                "." +
                prod.price.slice(5, 8) +
                " VND"}
            </p>
          )}
          <div className={classes["cart__desc-icrease"]}>
            <button id={prod.id} onClick={decreaseHandler}>
              <p>{`<`}</p>
            </button>
            <p>{prod.quantity}</p>
            <button id={prod.id} onClick={increaseHandler}>
              <p>{`>`}</p>
            </button>
          </div>
          {prod.total.length === 7 && (
            <p>
              {prod.total.slice(0, 1) +
                "." +
                prod.total.slice(1, 4) +
                "." +
                prod.total.slice(4, 7) +
                " VND"}
            </p>
          )}
          {prod.total.length === 8 && (
            <p>
              {prod.total.slice(0, 2) +
                "." +
                prod.total.slice(2, 5) +
                "." +
                prod.total.slice(5, 8) +
                " VND"}
            </p>
          )}
          {prod.total.length === 9 && (
            <p>
              {prod.total.slice(0, 3) +
                "." +
                prod.total.slice(3, 6) +
                "." +
                prod.total.slice(6, 9) +
                " VND"}
            </p>
          )}
          <button id={prod.id} onClick={deleteProductOnCartHandler}>
            ICON
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartDesc;
