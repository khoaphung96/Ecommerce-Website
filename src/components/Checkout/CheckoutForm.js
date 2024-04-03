import classes from "./CheckoutForm.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitOrderHandler = (event) => {
    event.preventDefault();
    dispatch(cartActions.deleteCart());
    window.alert("Order Success!");
    navigate("/");
  };
  return (
    <>
      <form className={classes["checkout__form"]}>
        <div className={classes["checkout__form-control"]}>
          <label htmlFor="name">
            <h3>FULL NAME</h3>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Full Name Here!"
          ></input>
        </div>
        <div className={classes["checkout__form-control"]}>
          <label htmlFor="email">
            <h3>EMAIL</h3>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email Here!"
          ></input>
        </div>
        <div className={classes["checkout__form-control"]}>
          <label htmlFor="phone">
            <h3>PHONE NUMBER</h3>
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Enter Your Phone Number Here!"
          ></input>
        </div>
        <div className={classes["checkout__form-control"]}>
          <label htmlFor="address">
            <h3>ADDRESS</h3>
          </label>
          <input
            type="text"
            name="address"
            placeholder="Enter Your Address Here!"
          ></input>
        </div>
        <div className={classes["checkout__form-action"]}>
          <button onClick={submitOrderHandler}>PLACE ORDER</button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
