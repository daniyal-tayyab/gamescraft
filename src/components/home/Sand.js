import React from "react";
import styled from "styled-components";

import backgroundImage from "../../images/sand-chest-background.avif";
import sandChest from "../../images/chest-open.avif";
import arrow from "../../images/arrow-button.png";
import Button from "../Button";
import { Link } from "react-router-dom";

const BackGround = styled.section`
  min-height: 400px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 30px;
  margin-bottom: 100px;

  @media (max-width: 800px) {
    margin-top: 250px;
  }

  @media (max-width: 600px) {
    margin-top: 150px;
  }
`;

const Sand = () => {
  return (
    <BackGround image={backgroundImage}>
      <div className="home-sand">
        <img src={sandChest} alt="sand" className="home-sand__image" />
        <div className="home-sand__content">
          <h3 className="home-sand__content__heading">Got SAND?</h3>
          <p className="home-sand__content__description">
            <img
              src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect/img/17_Sand/sand-icon.svg"
              alt="chest"
            />
            <span>SAND</span> is The Sandbox utility token. Get sand coin icon
            <span>SAND</span> to buy LAND, ASSETS, or to invest in staking
            pools. More info
            <img src={arrow} alt="arrow" />
          </p>
          <Button buttonType="inverted">
            <Link to="/marketplace" style={{ color: "#fff" }}>
              Buy Sand
            </Link>
          </Button>
        </div>
      </div>
    </BackGround>
  );
};

export default Sand;
