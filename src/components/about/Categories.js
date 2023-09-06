import React from "react";

import styled from "styled-components";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    image:
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/Start_Row2_VoxEdit2.png",
    title: "VoxEdit",
    desc: "Create and animate voxel art. Export anywhere.",
  },
  {
    image:
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/Start_Row2_Marketplace.png",
    title: "Marketplace",
    desc: "One place to sell and collect the best assets.",
  },
  {
    image:
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/14_Home/Start_Row2_GameMaker.png",
    title: "Game Maker",
    desc: "Make and play any game that you can imagine.",
  },
];

const Container = styled.section`
  padding: 5rem 8rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
  row-gap: 4rem;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item, index) => (
        <CategoryCard key={index} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
