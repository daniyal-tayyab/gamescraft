import React from "react";

import GridComponent from "./GridComponent";
import Button from "../Button";
import EventMapCard from "./EventMapCard";

const events = [
  {
    heading: "Join The May Festivities! (73)",
    image:
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5,w=682,h=290/https://api.sandbox.game/experiences/602a6bea-651f-447f-8887-70d97e3781f6/versions/ef3332c3-df09-43b9-9ad1-cb32877e5d89/banner",
    title: "Meloverse",
    desc: "[Multiplayer] Welcome to the Meloverse! Inspired by the creativity of NBA Star LaMelo Ball, experience a futuristic metropolis built inside.",
  },
  {
    heading: "Join The May Festivities! (73)",
    image:
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5,w=682,h=290/https://api.sandbox.game/experiences/602a6bea-651f-447f-8887-70d97e3781f6/versions/ef3332c3-df09-43b9-9ad1-cb32877e5d89/banner",
    title: "Meloverse",
    desc: "[Multiplayer] Welcome to the Meloverse! Inspired by the creativity of NBA Star LaMelo Ball, experience a futuristic metropolis built inside.",
  },
  {
    heading: "Join The May Festivities! (73)",
    image:
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5,w=682,h=290/https://api.sandbox.game/experiences/602a6bea-651f-447f-8887-70d97e3781f6/versions/ef3332c3-df09-43b9-9ad1-cb32877e5d89/banner",
    title: "Meloverse",
    desc: "[Multiplayer] Welcome to the Meloverse! Inspired by the creativity of NBA Star LaMelo Ball, experience a futuristic metropolis built inside.",
  },
  {
    heading: "Exclusively for Paris Hilton Avatar Owners (1)",
    image:
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5,w=682,h=290/https://api.sandbox.game/experiences/12f4f7cb-d986-482b-8162-ab38183c6967/versions/451d5da7-df8e-4413-93e4-5a4c23fbbfa9/banner",
    title: "Parisland",
    desc: "Where you can enter a reality show set on a beautiful tropical island, feed sharks, find true...",
  },
];

const TabTwo = () => {
  return (
    <div className="tab-two">
      <div className="column-1">
        <div className="column-1__model">
          <img
            src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/09_User_Profile/avatar-default.png"
            alt="model"
            className="column-1__model__avatar"
          />
        </div>
        <Button buttonType="inverted">Customize My Avatar</Button>
      </div>
      <div className="column-2">
        <GridComponent />
      </div>
      <div className="column-3">
        <div className="column-3__cards">
          {events.map((item, index) => (
            <EventMapCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabTwo;
