import classes from "./Banner.module.css";
import { Link } from "react-router-dom";

const Banner = (props) => {
  return (
    <div className={classes.banner}>
      <div className={classes["banner__content"]}>
        <h3>NEW INSPIRATION 2020</h3>
        <h1>20 % OFF ON NEW SEASON</h1>
        <Link to="/shop">Browse colletions</Link>
      </div>
      <img
        src={props.banner}
        alt="banner"
        width="100%"
        className={classes["banner__image"]}
      ></img>
    </div>
  );
};

export default Banner;
