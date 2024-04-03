import { useLoaderData, Link } from "react-router-dom";
import { popupActions } from "../../store/popup";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Popup from "./Popup";
import classes from "./Products.module.css";

const Products = () => {
  const products = useLoaderData();
  const [searchParams] = useSearchParams();
  const view = searchParams.get("view");
  const dispatch = useDispatch();
  const showPopup = useSelector((state) => state.popup.showPopup);
  const navigate = useNavigate();

  let [product] = products.filter((product) => product._id.$oid === view);

  useEffect(() => {
    if (view) {
      dispatch(popupActions.showPopup());
    }
  }, [view, dispatch]);

  if (!view) {
    [product] = products;
    dispatch(popupActions.hidePopup());
  }

  const hidePopupHandler = () => {
    dispatch(popupActions.hidePopup());
    return navigate("/");
  };

  return (
    <>
      {showPopup && (
        <Popup onHidePopup={hidePopupHandler}>
          <div className={classes["content__image"]}>
            <img src={product.img1} alt={product.name}></img>
          </div>
          <div className={classes["content__description"]}>
            <h2>{product.name}</h2>
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
            <div style={{ whiteSpace: "pre-wrap" }}>{product.short_desc}</div>
            <Link to={`/detail/${product._id.$oid}`}>View Detail</Link>
          </div>
        </Popup>
      )}
      <div className={classes.product}>
        <div className={classes["product__content"]}>
          <h3>MAKE THE HARD WAY</h3>
          <h2>TOP TRENDING PRODUCTS</h2>
        </div>
        <div className={classes["product__description"]}>
          {products.map((product) => (
            <div className={classes["product__group"]} key={product._id.$oid}>
              <div className={classes["product__group-image"]}>
                <Link to={`/?view=${product._id.$oid}`}>
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
    </>
  );
};

export default Products;

export const loader = async () => {
  const response = await fetch(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
  );
  const resData = await response.json();
  return resData;
};
