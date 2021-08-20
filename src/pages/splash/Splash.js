import React, { useState } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import RandCandles from "../../containers/apresentationImages/RandCandles";

function AnimatedSplash() {
  return (
    <div className="logo_wrapper">
        <div className="candle_container">
        <RandCandles />
        </div>
    </div>
  );
}

function Splash(props) {
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 3000);

  return redirect ? (
    <Redirect to="/home" />
  ) : (
    <AnimatedSplash  />
  );
}

export default Splash;
