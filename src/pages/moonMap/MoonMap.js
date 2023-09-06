import React, { useState, useEffect } from "react";

import {
  CanvasInner,
  CanvasWrapper,
  TileCanvas,
  Box,
  Filter,
} from "../earthMap/EarthMap.styles";
import Tile from "../../components/Tile";

import SideMenu from "../earthMap/SideMenu";

import { tileData } from "../../utils/tileData";
import MapModal from "../../components/modals/MapModal";

const MoonMap = () => {
  const [scale, setScale] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalOpen = (type) => {
    setIsModalOpen(!isModalOpen);
  };

  const handleScroll = (event) => {
    const zoomFactor = event.deltaY > 0 ? 0.9 : 1.1; // Adjust zoom speed as per your preference
    setScale((prevScale) => prevScale * zoomFactor);
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    const initialX = event.clientX - offsetX;
    const initialY = event.clientY - offsetY;

    const handleMouseMove = (event) => {
      event.preventDefault();
      const newOffsetX = event.clientX - initialX;
      const newOffsetY = event.clientY - initialY;

      setOffsetX(newOffsetX);
      setOffsetY(newOffsetY);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    console.log(tileData.length);
    const handleKeyPress = (event) => {
      if (event.key === "+" || event.key === "=") {
        setScale((prevScale) => prevScale * 1.1);
      } else if (event.key === "-" || event.key === "_") {
        setScale((prevScale) => prevScale * 0.9);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <Box>
      <SideMenu />
      <CanvasWrapper>
        <CanvasInner
          style={{
            border: "1px solid #064c80",
            overflow: "auto",
          }}
        >
          <TileCanvas
            onWheel={handleScroll}
            onMouseDown={handleMouseDown}
            style={{
              transform: `scale(${scale})`,
              left: `${offsetX}px`,
              top: `${offsetY}px`,
            }}
          >
            {tileData.map((obj, index) => (
              <Tile
                key={`item${index}`}
                type={obj.type}
                coordinates={obj.coordinates}
                occupied={obj.occupied}
                url={obj.url}
                index={index}
                toggleModalOpen={toggleModalOpen}
              />
            ))}
          </TileCanvas>
          <Filter>
            <img
              src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/28_Map/icon-sidebar.svg"
              alt="filter"
            />
            <div>Showing 40 of 2091 results</div>
          </Filter>
        </CanvasInner>
      </CanvasWrapper>
      {isModalOpen && <MapModal setOpen={toggleModalOpen} />}
    </Box>
  );
};

export default MoonMap;
