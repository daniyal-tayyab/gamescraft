import React from "react";

import Tag from "../marketplace/Tag";
import ArticleCard from "./ArticleCard";

const tags = ["All", "Updated", "Partnerships", "Play", "Create", "Own"];
const latestArticles = [
  {
    image:
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5,w=900/https://strapi.sandbox.game/uploads/Blog_banner_1920x1080_36_1024175e56.png",
    title:
      "Clay Nation is Entering the Sandbox with Cross-Chain Interoprablity and Sonic Sands",
  },
  {
    image:
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5,w=900/https://strapi.sandbox.game/uploads/0_ilr_Psuls_Ur_Xta1of_ce5a5ca285.png",
    title:
      "Bilibili International, CryptoNatty, and The Sandbox Join Forces to Explore the Metaverse",
  },
  {
    image:
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5,w=900/https://strapi.sandbox.game/uploads/04_6_K_verse2_dalgomz_1_99d7a26e69.png",
    title: "Interview with ‘Dalgomz’ in K-verse",
  },
];

const LatestArticles = () => {
  return (
    <section className="latest-articles">
      <div className="latest-articles__header">
        <div className="latest-articles__header__title">Latest Aritcles</div>
        <div className="latest-articles__header__tags">
          <div className="latest-articles__header__tags__tag">
            {tags.map((item, index) => (
              <Tag item={item} key={index} />
            ))}
          </div>
          <div className="latest-articles__header__tags__readmore">
            Read more
          </div>
        </div>
      </div>
      <div className="latest-articles__body">
        {latestArticles.map((item, index) => (
          <ArticleCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
