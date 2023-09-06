import React from "react";

import styled from "styled-components";

import land from "../../images/pngs/land-background.png";
import gif from "../../images/land-gif.webp";

import arrow from "../../images/arrow-button.png";
import Button from "../Button";
import { Link } from "react-router-dom";

const LandContainer = styled.section`
  min-height: 650px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 4rem;

  @media (max-width: 700px) {
    margin-top: 12rem;
    margin-bottom: 80px;
  }

  @media (max-width: 600px) {
    margin-top: 8rem;
  }

  @media (max-width: 400px) {
    margin-top: 1rem;
  }
`;

const Land = () => {
  return (
    <LandContainer image={land}>
      <div className="home-land">
        <img src={gif} alt="lands" loading="lazy" className="home-land__gif" />
        <div className="home-land__content">
          <h3 className="home-land__content__heading">Become a LAND owner</h3>
          <p className="home-land__content__description">
            Get a piece of LAND from The Sandbox metaverse to host your
            experience and events, access exclusive content and farming perks,
            and get premium defi staking and monetization options. More info
            <img src={arrow} alt="arrow" />
          </p>
          <div className="home-land__content__button-container">
            <Button buttonType="inverted">
              <Link to="/map" style={{ color: "#fff" }}>
                Buy Land
              </Link>
            </Button>
            <Button buttonType="default">
              <Link to="/map/earth" style={{ color: "#fff" }}>
                Browse Map
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </LandContainer>
  );
};

export default Land;
