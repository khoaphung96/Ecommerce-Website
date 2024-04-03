import { useLoaderData, useParams } from "react-router-dom";
import classes from "./ProductDesc.module.css";

const ProductDesc = () => {
  const products = useLoaderData();
  const productId = useParams().productId;
  const [product] = products.filter(
    (product) => product._id.$oid === productId
  );

  return (
    <div className={classes["product__desc"]}>
      <h1>PRODUCT DESCRIPTION</h1>
      <div style={{ whiteSpace: "pre-wrap" }}>
        <p>{product.long_desc}</p>
      </div>
    </div>
  );
};

export default ProductDesc;
