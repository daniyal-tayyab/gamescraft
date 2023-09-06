import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Events from "./pages/Events";
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
        <Route path="/contact-us" element={<Events/>} />
        <Route path="/services" element={<Partnership />} />
        <Route path="/portfolio" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/carrer" element={<Avatar />} />
      </Routes>
    </>
  );
}

export default App;
