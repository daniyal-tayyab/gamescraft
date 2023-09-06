import React from "react";

import MakerCard from "./MakerCard";

const makers = [
  {
    image:
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/27_About/gm-academy0.png",
    title: "Welcome to The Sandbox GM Academy",
    desc: "Learn how to Build and Share your experiences in the Metaverse using the Sandbox Game Maker.",
  },
  {
    image:
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/27_About/gm-academy1.png",
    title: "What is the Game Maker?",
    desc: "The program you use to build and then publish experiences within The Sandbox Metaverse.",
  },
  {
    image:
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/27_About/gm-academy2.png",
    title: "What Can I Make?",
    desc: "Some examples of experiences you can create using The Sandbox GM resources and tools.",
  },
];

const Maker = () => {
  return (
    <section className="maker">
      <div className="streaming__header">
        <div className="streaming__header__title">
          <p>Streaming</p>
        </div>
        <div className="streaming__header__readmore">Read more</div>
      </div>
      <div className="maker__grid">
        {makers.map((item, index) => (
          <MakerCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Maker;
