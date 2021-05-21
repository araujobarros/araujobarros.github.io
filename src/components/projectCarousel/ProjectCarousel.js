import React from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled from "styled-components";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectCarousel.css";

function ProjectCarousel(props) {
  const width = "100%";
  const Arrow = styled.div`
    z-index: 100;
    line-height: 500px;
    text-align: center;
    position: absolute;
    top: 0;
    font-size: 3em;
    cursor: pointer;
    user-select: none;
  `;
  const Dot = styled.span`
    font-size: 1.5em;
    cursor: pointer;
    user-select: none;
  `;
  const Dots = styled.span`
    text-align: center;
    width: ${width};
    z-index: 100;
  `;
  const CarouselUI = ({ position, total, handleClick, children }) => (
    <div className="container">
      <div className="children">
        {children}
        <Arrow
          className="arrow left"
          onClick={handleClick}
          data-position={position - 1}
        >
          {"<"}
        </Arrow>
        <Arrow
          className="arrow right"
          right
          onClick={handleClick}
          data-position={position + 1}
        >
          {">"}
        </Arrow>
      </div>
      <Dots>
        {Array(...Array(total)).map((val, index) => (
          <Dot key={index} onClick={handleClick} data-position={index}>
            {index === position ? "● " : "○ "}
          </Dot>
        ))}
      </Dots>
    </div>
  );
  const Carousel = makeCarousel(CarouselUI);

  return (
    <Carousel defaultWait={60000} swipe={true}>
      {props.detailedProject.map((project) => {
        return (
          <Slide right>
            <ProjectCard repo={project} theme={props.theme} />
          </Slide>
        );
      })}
    </Carousel>
  );
}

export default ProjectCarousel;
