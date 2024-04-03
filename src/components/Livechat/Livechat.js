import React, { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./Livechat.module.css";

const LivechatOverlay = () => {
  return (
    <div className={classes.livechat__content}>
      <div className={classes["livechat__content-title"]}>
        <h3>Customer Support</h3>
        <p>Let's Chat App</p>
      </div>
      <div className={classes["livechat__content-content"]}>
        <div className={classes.customer}>
          <p>Hi!</p>
          <p>How can i view products?</p>
        </div>
        <div className={classes.admin}>
          <p>Hi! Thank you for contacting us</p>
          <p>You can go to the shop to view products</p>
        </div>
      </div>
      <div className={classes["livechat__content-action"]}>
        <input placeholder="Enter Message!"></input>
      </div>
    </div>
  );
};

const LivechatButton = (props) => {
  const [showLiveChat, setShowLiveChat] = useState(false);
  const showLiveChatHandler = (event) => {
    event.preventDefault();

    setShowLiveChat((prevShow) => !prevShow);

    props.onShowLiveChat(showLiveChat);
  };

  return (
    <div className={classes.livechat__button}>
      <div className={classes.content}>
        <button onClick={showLiveChatHandler}>Chat</button>
      </div>
    </div>
  );
};

const Livechat = () => {
  const [showLiveChat, setShowLiveChat] = useState(true);
  const portalElement = document.getElementById("livechat");
  const showLiveChatHandler = (show) => {
    setShowLiveChat(show);
  };

  return (
    <React.Fragment>
      {!showLiveChat &&
        ReactDOM.createPortal(
          <LivechatOverlay></LivechatOverlay>,
          portalElement
        )}
      {ReactDOM.createPortal(
        <LivechatButton onShowLiveChat={showLiveChatHandler}></LivechatButton>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Livechat;
