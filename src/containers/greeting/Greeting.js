/* eslint-disable react/jsx-filename-extension */
import React from "react";
import "./Greeting.css";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import { style } from "glamor";
import { greeting } from "../../portfolio";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Avatar from "../apresentationImages/Avatar";
import RandCandles from "../apresentationImages/RandCandles";

export default function Greeting(props) {
  const { theme } = props;
  const history = useHistory();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-image-div">
            <Avatar />
            <RandCandles />
          </div>
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span>Sou </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <button
                  {...styles}
                  className="button"
                  onClick={() => {
                    history.push("/contact");
                  }}
                >
                  Contato
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
