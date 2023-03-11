import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Connect from "./components/Connect";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <div className="relative h-screen bg-gradient-primary-900-700-45deg">
    <div className="relative h-screen">
      <div className="relative z-10 h-screen snap-y scroll-smooth overflow-y-auto snap-mandatory">
        <Hero />
        <About />
        <Projects />
        <Connect />
      </div>
    </div>
  );
}

export default App;
