import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";
import ContactCarousel from "../../components/contactCarousel/ContactCarousel";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

function Contact(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div>
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <ContactCarousel />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia />
                <br />
                <br />
                <a
                  {...styles}
                  className="general-btn"
                  href={greeting.resumeLink}
                >
                  Currículo
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="footer-to-contact">
        <Footer theme={props.theme} onToggle={props.onToggle} />
      </div>
    </div>
  );
}

export default Contact;
