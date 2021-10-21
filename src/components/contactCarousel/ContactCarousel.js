import React from "react";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import styled, { css } from "styled-components";
import "./ContactCarousel.css";
import { contactPageData } from "../../portfolio.js";
import Flip from "react-reveal/Flip";

function ContactCarousel(props) {
  const width = "100%",
    height = "500px";
  const Container = styled.div`
    overflow: hidden;
    width: ${width};
  `;
  const Children = styled.div`
    width: ${width};
    height: ${height};
  `;
  const Arrow = styled.div`
    z-index: 100;
    line-height: 500px;
    text-align: center;
    position: absolute;
    top: 0;
    width: 10%;
    font-size: 3em;
    cursor: pointer;
    user-select: none;
    ${(props) =>
      props.right
        ? css`
            left: 94%;
          `
        : css`
            left: 0%;
          `}
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
    <Container className="container">
      <Children>
        {children}
        <Arrow onClick={handleClick} data-position={position - 1}>
          {"<"}
        </Arrow>
        <Arrow right onClick={handleClick} data-position={position + 1}>
          {">"}
        </Arrow>
      </Children>
      <Dots>
        {Array(...Array(total)).map((val, index) => (
          <Dot key={index} onClick={handleClick} data-position={index}>
            {index === position ? "● " : "○ "}
          </Dot>
        ))}
      </Dots>
    </Container>
  );
  const Carousel = makeCarousel(CarouselUI);

  return (
    <Carousel defaultWait={60000} swipe={true}>
      {contactPageData.contactSection.profile_image_path.map((image) => {
        return (
          <Flip left>
            <img
              className="image"
              src={require(`../../assests/images/${image}`)}
              alt=""
            />
          </Flip>
        );
      })}
    </Carousel>
  );
}

export default ContactCarousel;
