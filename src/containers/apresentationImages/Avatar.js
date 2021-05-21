import React, { useState } from "react";
import "./avatar.css";

export default function Avatar() {
  const [pisca, setPisca] = useState(false);

  const handleHover = () => {
    setPisca(!pisca);
  };

  const renderAvatar = () => {
    if (pisca) {
      return (
        <img
          className="avatar"
          src={require("../../assests/images/avataaars (4).png")}
          alt="avatar"
          onMouseLeave={handleHover}
        />
      );
    } else {
      return (
        <img
          className="avatar"
          src={require("../../assests/images/avataaars (2).png")}
          alt="avatar"
          onMouseEnter={handleHover}
        />
      );
    }
  };

  return renderAvatar();
}
