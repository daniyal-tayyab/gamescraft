import React from "react";

const highlights = [
  {
    image:
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/Icons/discord-logo.svg",
    title: "Community",
    desc: "Join our Discord Community.",
  },
  {
    image:
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/Icons/twitter.svg",
    title: "News",
    desc: "Be the first to discover our news.",
  },
  {
    image:
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/Icons/twitch-logo.svg",
    title: "Streams",
    desc: "Follow our live streams.",
  },
  {
    image:
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/Icons/youtube-logo.svg",
    title: "Youtube",
    desc: "Watch all our latest videos.",
  },
];

const HighLights = () => {
  return (
    <section className="highlights">
      <div className="streaming__header">
        <div className="streaming__header__title">
          <p>Highlights</p>
        </div>
      </div>
      <div className="highlights__grid">
        {highlights.map((item, index) => (
          <div className="highlight-card" key={index}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighLights;
