import React from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;

  h3 {
    margin: 5px 0;
    font-size: 1.8rem;
  }

  p {
    font-size: 1.4rem;
    margin: 5px 0;
    color: #818488;
    font-weight: bold;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 270px;

  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
`;

const MakerCard = ({ item }) => {
  const { image, title, desc } = item;
  return (
    <Container>
      <Image bg={image} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </Container>
  );
};

export default MakerCard;
