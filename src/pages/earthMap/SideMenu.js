import React from "react";

import { mapMode, markers } from "../../utils/submenuData";
import MapMainItem from "../../components/subMenu/MapMainItem";
import SwitchItem from "../../components/subMenu/SwitchItem";

const SideMenu = () => {
  return (
    <div className="sidemenu">
      <div className="sidemenu__section">
        <h4 className="sidemenu__section__title">MAP MODE</h4>
        <ul className="sidemenu__list">
          {mapMode.map((item, index) => (
            <li className="sidemenu__list__item" key={index}>
              <MapMainItem item={item} />
            </li>
          ))}
        </ul>
      </div>
      <div className="sidemenu__section">
        <h4 className="sidemenu__section__title">MARKERS</h4>
        <ul className="sidemenu__list">
          {markers.map((item, index) => (
            <li className="sidemenu__list__item" key={index}>
              <SwitchItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
