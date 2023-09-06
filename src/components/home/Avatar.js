import React from "react";
import styled from "styled-components";

import Button from "../Button";

import avatarBackground from "../../images/pngs/generic-avatar-background.png";
import avatar from "../../images/pngs/generic-avatar.png";
import { Link } from "react-router-dom";

export const BackgroundImage = styled.section`
  min-height: 560px;
  width: 100%;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 600px) {
    margin-top: 80px;
  }
`;

const Avatar = () => {
  return (
    <BackgroundImage image={avatarBackground}>
      <div className="home-avatar">
        <div className="home-avatar__content">
          <h3 className="home-avatar__content__heading">
            Play with your own Avatar
          </h3>
          <p className="home-avatar__content__description">
            Take your profile pic to the next level. Now you can choose your
            favorite Avatar to explore The Sandbox Metaverse.
          </p>
          <Button buttonType="inverted" style={{ padding: "1rem 2rem" }}>
            <Link to="/avatar" style={{ color: "#fff" }}>
              Create Free Avatar
            </Link>
          </Button>
        </div>
        <img className="home-avatar__image" src={avatar} alt="avatar" />
      </div>
    </BackgroundImage>
  );
};

export default Avatar;
