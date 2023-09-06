import React, { useEffect, useState } from "react";

import { Tab, Tabs, TabPanel, TabList } from "react-tabs";

import TabOne from "../components/events/TabOne";
import TabTwo from "../components/events/TabTwo";

const Events = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
      console.log(newWidth);
    };

    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <main className="events">
      <Tabs>
        <TabList>
          <Tab>Events</Tab>
          {width > 1260 && <Tab>Events Map</Tab>}
        </TabList>
        <TabPanel>
          <TabOne />
        </TabPanel>
        {width > 1260 && (
          <TabPanel>
            <TabTwo />
          </TabPanel>
        )}
      </Tabs>
    </main>
  );
};

export default Events;
