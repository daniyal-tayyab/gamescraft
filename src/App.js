import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Avatar from "./pages/Avatar";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/carrer" element={<Avatar />} />
      </Routes>
    </>
  );
}

export default App;
