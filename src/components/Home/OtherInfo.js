import classes from "./OtherInfo.module.css";

const OtherInfo = () => {
  return (
    <div className={classes.otherInfo}>
      <div className={classes["otherInfo__other"]}>
        <div>
          <h2>FREE SHIPPING</h2>
          <h3>Free shipping worlwide</h3>
        </div>
        <div>
          <h2>24 x 7 SERVICE</h2>
          <h3>Free shipping worlwide</h3>
        </div>
        <div>
          <h2>FESTIVAL OFFER</h2>
          <h3>Free shipping worlwide</h3>
        </div>
      </div>
      <div className={classes["otherInfo__subcribe"]}>
        <div className={classes["otherInfo__subcribe-content"]}>
          <h2>LET'S BE FRIENDS!</h2>
          <h3>Nisi nisi tempor consequat laboris nisi.</h3>
        </div>
        <form className={classes["otherInfo__subcribe-form"]}>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
          ></input>
          <button>Subcribe</button>
        </form>
      </div>
    </div>
  );
};

export default OtherInfo;
