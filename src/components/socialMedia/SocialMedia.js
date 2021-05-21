import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-container">
      <div className="social-media-div">
        <a
          href={socialMediaLinks.github}
          className="github hex "
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <div className="top"></div>
          <div className="middle">
            <i className="fab fa-github"></i>
          </div>
          <div className="bottom"></div>
        </a>
        <a
          href={socialMediaLinks.linkedin}
          className="linkedin hex "
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="top"></div>
          <div className="middle">
            <i className="fab fa-linkedin-in"></i>
          </div>
          <div className="bottom"></div>

          <span></span>
        </a>
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="google hex "
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="top"></div>
          <div className="middle">
            <i className="fab fa-google"></i>
          </div>
          <div className="bottom"></div>
        </a>
      </div>
    </div>
  );
}
