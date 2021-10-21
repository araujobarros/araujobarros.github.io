import React, { useState } from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";
import MoldMob from "./MoldMob";
import MoldPC from "./MoldPC";

export default function ProjectCard({ repo, theme }) {
  function openRepoinNewTab(e, url) {
    e.preventDefault();
    var win = window.open(url, "_blank");
    win.focus();
  }

  const [classPreview, setClassPreview] = useState("hide-preview");
  const [aboutOrPreview, setAboutOrPreview] = useState();

  const onClickBtnPreview = (e, assunto) => {
    e.preventDefault();
    setAboutOrPreview(assunto);
    setClassPreview("larg-preview");
  };

  const onClickX = (e) => {
    e.preventDefault();
    setClassPreview("hide-preview");
  };

  const styles = style({
    backgroundColor: `${theme.imageDark}`,
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  const btnStyles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  const renderMold = () => {
    if (repo.device === "mobile") {
      return(
        <div className="image-container">
              <MoldMob preview={repo.preview} />
        </div>
      )
    } else {
      return(
        <div className="image-container">
              <MoldPC preview={repo.preview}/>
        </div>
      )
    }
    
  }

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          className="card-container"
          {...styles}
          key={repo.id}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="information-container">
            <div className="repo-name-div">
              <p className="repo-name" style={{ color: theme.text }}>
                {repo.name}
              </p>
            </div>
            <div className="repo-details">
              <ProjectLanguages logos={repo.languages} />
            </div>
            <p className="repo-description" style={{ color: theme.text }}>
              {repo.description}
            </p>
            <div className="btn-container">
              <a
                {...btnStyles}
                className="general-btn btn-preview"
                href=""
                onClick={(e, assunto) => onClickBtnPreview(e, "about")}
              >
                Sobre
              </a>
              <a
                {...btnStyles}
                className="general-btn btn-preview"
                href=""
                onClick={(e, assunto) => onClickBtnPreview(e, "preview")}
              >
                Preview
              </a>
              <a
                {...btnStyles}
                className="general-btn"
                href=""
                onClick={(e, url) => openRepoinNewTab(e, repo.urlSite)}
              >
                Experimente
              </a>
              <a
                {...btnStyles}
                className="general-btn"
                href=""
                onClick={(e, url) => openRepoinNewTab(e, repo.urlRepo)}
              >
                Github
              </a>
            </div>
          </div>
          {renderMold()}
          <Fade bottom duration={2000} distance="40px">
            <div {...styles} className={classPreview}>
              <a href="" onClick={onClickX}>
                <h1>x</h1>
              </a>
              {aboutOrPreview === "preview" ? (
                <div className="larg-image">
                  <img
                    src={require(`../../assests/images/${repo.preview}`)}
                  ></img>
                </div>
              ) : (
                <p style={{ color: theme.text }}>{repo.description}</p>
              )}
            </div>
          </Fade>
        </div>
      </Fade>
    </div>
  );
}
