import React from "react";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  padding: 2.5rem;
  padding-bottom: 0;
  background-color: #1b2026;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  h2 {
    font-size: 2.3rem;
    align-self: flex-start;
  }

  p {
    font-size: 1.4rem;
    margin: 1rem 0;
  }

  img {
    margin-bottom: -35px;
    max-width: 100%;
    margin-top: 1rem;
  }
`;

const CategoryCard = ({ item }) => {
  return (
    <Container>
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <img src={item.image} alt="art" />
    </Container>
  );
};

export default CategoryCard;
