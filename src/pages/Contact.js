import React from "react";
import HeroCommon from "../components/HeroCommon";

import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";


const Contact = () => {
  return (
    <main className="contact">
      <HeroCommon page="Contact Us" />
      <div className="contact-info">
        <div className="contact-card">
          <MdLocationOn className="icon"/>
          <p className="location">Lahore Pakistan</p>
          <p className="location-desc">2nd Floor, Commercial Market,<span>134 DD, DHA Phase 4, Lahore</span></p>
        </div>
        <div className="contact-card">
          <BsFillTelephoneFill className="icon"/>
          <p className="location">Phones</p>
          <p className="location-desc">+92 300 6372110 <span>+92 301 9068155</span></p>
        </div>
        <div className="contact-card">
          <MdMail className="icon"/>
          <p className="location">Email</p>
          <p className="location-desc">info@gamescraftstudios.com</p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
