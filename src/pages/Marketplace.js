import React from "react";
import CategoryCard from "../components/marketplace/CategoryCard";

import { marketplaceCategories } from "../utils/marketplaceData";
import SwiperSection from "../components/marketplace/SwiperSection";

import { swiperSectionData } from "../utils/marketplaceData";

const Marketplace = () => {
  return (
    <>
      <section className="marketplace">
        <div className="marketplace__header">
          <h1 className="marketplace__header__title">
            Welcome to the MFT MarketPlace
          </h1>
          <p className="marketplace__header__description">
            Discover Collections, get Equipment, or find Assets to build your
            own unique Experiences.
          </p>
          <div className="marketplace__header__category-container">
            {marketplaceCategories.map((item, index) => (
              <CategoryCard key={index} item={item} />
            ))}
          </div>
        </div>
        {swiperSectionData.map((item, index) => (
          <SwiperSection item={item} key={index} />
        ))}
        <div style={{ opacity: 0 }}>loli</div>
      </section>
    </>
  );
};

export default Marketplace;
