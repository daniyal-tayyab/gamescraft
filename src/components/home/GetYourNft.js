import React from "react";

import { BackgroundImage } from "./Avatar";

import backgroundImgae from "../../images/section-NFT-background.avif";

import sectionNft from "../../images/section-NFT.avif";
import Button from "../Button";
import { Link } from "react-router-dom";

const GetYourNft = () => {
  return (
    <BackgroundImage image={backgroundImgae}>
      <div className="home-avatar">
        <div className="home-avatar__content">
          <h3 className="home-avatar__content__heading">Get your NFTs</h3>
          <p className="home-avatar__content__description">
            Discover the power of true ownership with NFTs (Non-Fungible
            Tokens). Gear up, unlock exclusive rewards, and build immersive
            experiences.
          </p>
          <Button buttonType="inverted" style={{ padding: "1rem 2rem" }}>
            <Link to="/marketplace" style={{ color: "#fff" }}>
              Visit Marketplace
            </Link>
          </Button>
        </div>
        <img className="home-avatar__image" src={sectionNft} alt="avatar" />
      </div>
    </BackgroundImage>
  );
};

export default GetYourNft;
