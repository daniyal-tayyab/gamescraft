import React from "react";
import styled from "styled-components";

import { c1, c2, c3, socialIcons } from "../utils/dummyData";

import { ReactComponent as FooterLogo } from "../images/footer/footer-logo.svg";
import animoca from "../images/footer/small-animoca.avif";

const Column = styled.div`
  margin: 0 2rem;

  h4 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  ul {
    list-style: none;

    li {
      margin: 1rem 0;
      font-size: 1.2rem;
      color: #9b9d9f;
      cursor: pointer;
      transition: all 0.15s;

      &:hover {
        color: #fff;
      }
    }
  }
`;

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <div className="footer__left__useful-links">
          <Column>
            <h4>+ INFO</h4>
            <ul>
              {c1.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Column>
          <Column>
            <h4 style={{ opacity: "0" }}>ee</h4>
            <ul>
              {c2.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Column>
          <Column>
            <h4 style={{ opacity: "0" }}>ee</h4>
            <ul>
              {c3.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Column>
        </div>
        <div className="footer__left__social-links">
          <Column>
            <h4>FOLLOW US</h4>
            <div className="social-icons">
              {socialIcons.map((Item, index) => (
                <Item key={index} className="social-icons__icon" />
              ))}
            </div>
            <div className="copyright">
              Copyright © 2012- 2023 The Sandbox. All Rights Reserved
            </div>
          </Column>
        </div>
      </div>
      <div className="footer__right">
        <FooterLogo />
        <div>
          <p>Subsidiary of</p>
          <img src={animoca} alt="animoca" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
