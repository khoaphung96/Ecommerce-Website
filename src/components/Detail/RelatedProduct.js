import { useLoaderData, useParams, Link } from "react-router-dom";
import classes from "./RelatedProduct.module.css";

const RelatedProduct = () => {
  const products = useLoaderData();
  const productId = useParams().productId;
  const [product] = products.filter(
    (product) => product._id.$oid === productId
  );

  const productGetByCategoryExceptThisId = products
    .filter((prod) => prod.category === product.category)
    .filter((prod) => prod._id.$oid !== productId);

  return (
    <div className={classes["product__related"]}>
      <h1>RELATED PRODUCTS</h1>
      <div className={classes["product__description"]}>
        {productGetByCategoryExceptThisId.length === 0 && (
          <h2 style={{ marginTop: "0px" }}>No Related Product Found!</h2>
        )}
        {productGetByCategoryExceptThisId.map((product) => (
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

export default RelatedProduct;
