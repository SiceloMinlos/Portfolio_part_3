import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Navbar from "./components/Navbar";

import daytimevideoBackground from "/assets/daytime_background.mp4";
import nighttimevideoBackground from "/assets/nightrain_background.mp4";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src={nighttimevideoBackground}
      />
      <div className="relative z-10 h-screen snap-y scroll-smooth overflow-y-auto snap-mandatory">
        <Navbar/>
        <Hero />
        <About />
        <Projects />
        <Connect />
      </div>
    </div>
  );
}

export default App;
