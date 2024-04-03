import { Link } from "react-router-dom";
import classes from "./Categories.module.css";

const Categories = (props) => {
  return (
    <div className={classes.category}>
      <div className={classes["category__content"]}>
        <h3>CAREFULLY CREATED COLLECTIONS</h3>
        <h2>BROWSE OUR CATEGORIES</h2>
      </div>
      <div className={classes["category__image"]}>
        {props.categories.map((category) => (
          <Link key={category.name} to={`/shop?category=${category.name}`}>
            <img src={category.img} alt={category.name}></img>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
