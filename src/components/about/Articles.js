import React from "react";

import styled from "styled-components";
import ProductCard from "./ProductCard";

const articles = [
  {
    image:
      "https://www.sandbox.game/img/13_Create/GameMaker/Articles_images/foundation.png",
    title: "The Sandbox",
    desc: "From 2D to 3D",
  },
  {
    image:
      "https://www.sandbox.game/img/13_Create/GameMaker/Articles_images/academy.png",
    title: "ERC-1155",
    desc: "A new standard",
  },
  {
    image:
      "https://www.sandbox.game/img/13_Create/GameMaker/Articles_images/madewithtsb.png",
    title: "Minecraft",
    desc: "Import your work",
  },
  {
    image:
      "https://www.sandbox.game/img/13_Create/GameMaker/Articles_images/nfts.png",
    title: "NFTs",
    desc: "User-generated content",
  },
];

const Container = styled.section`
  padding: 5rem 8rem;
  display: flex;
  flex-direction: column;
  padding-bottom: 0;

  h2 {
    font-size: 3rem;
  }

  div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    gap: 2rem;
    row-gap: 3rem;
    margin-top: 1rem;
  }
`;

const Articles = () => {
  return (
    <Container>
      <h2>Articles that may interest you</h2>
      <div>
        {articles.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default Articles;
