import React from "react";

import styled from "styled-components";

const Conatiner = styled.div`
  width: 100%;
  height: 15rem;
  background-image: url(${(props) => props.bg});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 10px;
  overflow: hidden;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Title = styled.p`
  font-size: 2rem;
  width: 90%;
  margin-bottom: -30px;
  font-weight: bold;
`;

const Desc = styled.p`
  font-size: 1.5rem;
  width: 90%;
`;

const ProductCard = ({ item }) => {
  const { image, title, desc } = item;
  return (
    <Conatiner bg={image}>
      <div>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </div>
    </Conatiner>
  );
};

export default ProductCard;
