import React from "react";
import classes from "./Popup.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHidePopup}></div>;
};

const PopupOverlay = (props) => {
  return (
    <div className={classes.popup}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Popup = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHidePopup={props.onHidePopup}></Backdrop>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <PopupOverlay>{props.children}</PopupOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Popup;
