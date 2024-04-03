import { useLoaderData, Link, useSearchParams } from "react-router-dom";
import classes from "./Product.module.css";

const Product = () => {
  const products = useLoaderData();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  let productGetByCategory = products;

  if (category !== null && category !== "all") {
    productGetByCategory = products.filter(
      (product) => product.category === category
    );
  }

  return (
    <div className={classes["shop__product"]}>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Enter Search Here"
      ></input>
      <div className={classes["product__description"]}>
        {productGetByCategory.map((product) => (
          <div className={classes["product__group"]} key={product._id.$oid}>
            <div className={classes["product__group-image"]}>
              <Link to={`/detail/${product._id.$oid}`}>
                <img src={product.img1} alt={product.name}></img>
              </Link>
            </div>
            <div className={classes["product__group-description"]}>
              <p>{product.name}</p>
              {product.price.length === 7 && (
                <p>
                  {product.price.slice(0, 1) +
                    "." +
                    product.price.slice(1, 4) +
                    "." +
                    product.price.slice(4, 7) +
                    " VND"}
                </p>
              )}
              {product.price.length === 8 && (
                <p>
                  {product.price.slice(0, 2) +
                    "." +
                    product.price.slice(2, 5) +
                    "." +
                    product.price.slice(5, 8) +
                    " VND"}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
