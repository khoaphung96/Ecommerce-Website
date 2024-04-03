import { Link } from "react-router-dom";
import classes from "./CategoryNavigation.module.css";

const CategoryNavigation = () => {
  return (
    <div className={classes["shop__nav"]}>
      <h1>CATEGORIES</h1>
      <nav className={classes.nav}>
        <ul>
          <li>
            <h2>APPLE</h2>
          </li>
          <li>
            <Link to="/shop?category=all">All</Link>
          </li>
          <li>
            <h3>IPHONE & MAC</h3>
          </li>
          <li>
            <Link to="/shop?category=iphone">iPhone</Link>
          </li>
          <li>
            <Link to="/shop?category=ipad">iPad</Link>
          </li>
          <li>
            <Link to="/shop?category=macbook">Macbook</Link>
          </li>
          <li>
            <h3>WIRELESS</h3>
          </li>
          <li>
            <Link to="/shop?category=airpod">Airpod</Link>
          </li>
          <li>
            <Link to="/shop?category=watch">Watch</Link>
          </li>
          <li>
            <h3>OTHER</h3>
          </li>
          <li>
            <Link to="/shop?category=mouse">Mouse</Link>
          </li>
          <li>
            <Link to="/shop?category=keyboard">Keyboard</Link>
          </li>
          <li>
            <Link to="/shop?category=other">Other</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default CategoryNavigation;
