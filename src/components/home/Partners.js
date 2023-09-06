import React, { useEffect } from "react";

import { partners_logos } from "../../utils/dummyData";

const Partners = () => {
  useEffect(() => {
    console.log(partners_logos);
  }, []);
  return (
    <div className="home-partners">
      <h3 className="home-partners__heading">
        <span>VISIT THE EXPERIENCES OF OUR</span>PARTNERS
      </h3>
      <div className="home-partners__logo-grid">
        {partners_logos.map((item, index) => (
          <img
            src={item}
            alt="partner_logo"
            key={index}
            className="home-partners__logo-grid__logo"
          />
        ))}
      </div>
    </div>
  );
};

export default Partners;
