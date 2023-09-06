import React from "react";

import arrow from "../../images/arrow-button.png";
import BlogCard from "../BlogCard";

import { announcements, blogCardData } from "../../utils/dummyData";
import AnnouncementCard from "../AnnouncementCard";

const Community = () => {
  return (
    <section className="community">
      <div className="community__header">
        <h2 className="community__header__title">
          <span>community</span> What's new!
        </h2>
        <div className="community__header__readmore">
          Read more <img src={arrow} alt="arrow" />
        </div>
      </div>
      <div className="community__blog-container">
        {blogCardData.map((item, index) => (
          <BlogCard key={index} item={item} />
        ))}
      </div>
      <div className="community__announcement-container">
        {announcements.map((item, index) => (
          <AnnouncementCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Community;
