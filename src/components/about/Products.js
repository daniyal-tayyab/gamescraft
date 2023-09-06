import React from "react";

import styled from "styled-components";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "https://www.sandbox.game/img/14_Home/land-bg.webp",
    title: "LAND",
    desc: "Endless possibilities. Reserve yours today!",
  },
  {
    image: "https://www.sandbox.game/img/14_Home/gamemaker-bg.webp",
    title: "Game Maker",
    desc: "Make and Play any game that you can imagine.",
  },
  {
    image: "https://www.sandbox.game/img/14_Home/fund-bg.webp",
    title: "Game Maker Fund",
    desc: "Get paid to create and share YOUR amazing voxel creations.",
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
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
    gap: 2rem;
    row-gap: 3rem;
    margin-top: 1rem;
  }
`;

const Products = () => {
  return (
    <Container>
      <h2>Learn About Our Products</h2>
      <div>
        {products.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default Products;
