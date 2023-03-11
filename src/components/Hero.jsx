import { React } from "react";
import CallToAction from "./SvgComponent";
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Octopus from "./Octopus";

import website_logo from "/src/assets/website_logo.png";

const Navbar = () => {
  return (
    <div className="h-screen snap-center">
      <div className="flex justify-between p-5 h-[10%]">
        <div>
          <img src={website_logo} width={200}></img>
        </div>
        <div>
          <ul className="flex gap-20">
            <li>Home</li>
            <li>Projects</li>
            <li>Connect</li>
          </ul>
        </div>
      </div>
      <div className="grid-cols-2 h-full flex items-center">
        <div className="w-1/2 pl-60 mb-32">
          <h1 className="whitespace-nowrap pb-5 text-5xl">
            <span className="text-indigo-500">C</span>&nbsp;reative
          </h1>
          <h1 className="whitespace-nowrap pb-5 text-5xl">
            <span className="text-indigo-500">I</span>&nbsp;nnovative
          </h1>
          <h1 className="whitespace-nowrap pb-5 text-5xl">
            <span className="text-indigo-500">A</span>&nbsp;daptable
          </h1>
          <p>Do those words sound like your kind of developer?</p>
          <p>Then scroll down to learn more about me.</p>
          <CallToAction />
        </div>

        <div className="w-1/2 h-[70%] mb-60">
          <Canvas>
            <Stage>
              <Octopus />
            </Stage>
            <OrbitControls enableZoom={false}/>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
