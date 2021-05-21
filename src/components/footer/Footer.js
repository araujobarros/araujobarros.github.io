import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Feito com carinho e constantemente atualizado por {greeting.title2}{" "}
          com React, CSS e diversas bibliotecas.
        </p>
      </Fade>
    </div>
  );
}
