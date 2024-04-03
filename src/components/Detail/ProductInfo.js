import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import classes from "./ProductInfo.module.css";
import { cartActions } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";

const ProductInfo = () => {
  const products = useLoaderData();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const productId = useParams().productId;
  const [product] = products.filter(
    (product) => product._id.$oid === productId
  );
  const ref = useRef();
  const navigate = useNavigate();

  const submitCartHandler = (event) => {
    event.preventDefault();
    const quantityValue = ref.current.value ? ref.current.value : "1";

    const productToCart = {
      id: product._id.$oid,
      img: product.img1,
      name: product.name,
      price: product.price,
      quantity: quantityValue,
      total: String(Number(product.price) * Number(quantityValue)),
    };

    dispatch(cartActions.addCart(productToCart));
    navigate("/cart");
  };

  return (
    <div className={classes["product__info"]}>
      <div className={classes["product__img-info"]}>
        <img src={product.img1} alt={product.name}></img>
        <img src={product.img2} alt={product.name}></img>
        <img src={product.img3} alt={product.name}></img>
        <img src={product.img4} alt={product.name}></img>
      </div>
      <div className={classes["product__img-banner"]}>
        <img src={product.img1} alt={product.name}></img>
      </div>
      <div className={classes["product__info-desc"]}>
        <h1>{product.name}</h1>
        {product.price.length === 7 && (
          <h3>
            {product.price.slice(0, 1) +
              "." +
              product.price.slice(1, 4) +
              "." +
              product.price.slice(4, 7) +
              " VND"}
          </h3>
        )}
        {product.price.length === 8 && (
          <h3>
            {product.price.slice(0, 2) +
              "." +
              product.price.slice(2, 5) +
              "." +
              product.price.slice(5, 8) +
              " VND"}
          </h3>
        )}
        <div style={{ whiteSpace: "pre-wrap" }}>{product.short_desc}</div>
        <p>
          <b>CATEGORY</b>: {product.category}
        </p>
        <form onSubmit={submitCartHandler}>
          <input
            type="number"
            name="quantity"
            placeholder="QUANTITY"
            ref={ref}
          ></input>
          <button>Add to cart</button>
        </form>
      </div>
    </div>
  );
};

export default ProductInfo;
