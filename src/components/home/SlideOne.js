import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { Link } from "react-router-dom";

import video from "../../videos/hero.mp4";

export const Container = styled.div`
  width: calc(100vw - 55px);
  height: 47rem;
  /* height: 100vh; */
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  video {
   filter: brightness(40%);
  }

  @media (max-width: 900px) {
    width: 100vw;
  }

  @media (max-width: 700px) {
    height: 70rem;
  }
`;

export const Content = styled.div`
  position: absolute;
  left: 8rem;
  top: 10rem;
  width: 35%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  img {
    width: 300px;
  }

  button {
    margin-top: 2rem;
    padding: 1rem 2rem;
  }

  @media (max-width: 900px) {
    top: 5rem;
    width: 50%;
  }

  @media (max-width: 700px) {
    width: 80%;
    top: 15rem;
    left: 5rem;
  }

  @media (max-width: 400px) {
    left: 3rem;
  }
`;

const Heading = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
  margin: 0.8rem 0;
  margin-top: 2.5rem;
`;

const Description = styled.p`
  font-size: 14px;
`;

const SlideOne = () => {
  return (
    <Container>
      <video
        src={video}
        loop="loop"
        autoPlay="autoplay"
        playsInline
        muted="muted"
        preload="auto"
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      ></video>
      <Content>
        <img
          src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,w=768/https://api.sandbox.game/social-events/163/logo"
          alt="logo"
        />
        <Heading>join the metaverse</Heading>
        <Description>
          Discover, Earn, Create. Explore the Metaverse and discover hundereds
          of experiences. Join events, have fun and earn unique rewards.
        </Description>
        <Button buttonType="inverted">
          <Link to="/avatar" style={{ color: "#fff" }}>
            Create your avatar
          </Link>
        </Button>
      </Content>
    </Container>
  );
};

export default SlideOne;
