import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Events from "./pages/Events";
import Marketplace from "./pages/Marketplace";
import Map from "./pages/Map";
import EarthMap from "./pages/earthMap/EarthMap";
import MoonMap from "./pages/moonMap/MoonMap";
import Partnership from "./pages/Partnership";
import News from "./pages/News";
import About from "./pages/About";
import Avatar from "./pages/Avatar";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/map" element={<Map />} />
        <Route path="/map/earth" element={<EarthMap />} />
        <Route path="/map/moon" element={<MoonMap />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/avatar" element={<Avatar />} />
      </Routes>
    </>
  );
}

export default App;
