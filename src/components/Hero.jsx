import { React } from "react";
import CallToAction from "./SvgComponent";
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Octopus from "./Octopus";
import { Suspense } from "react";
import { Bounds, useBounds, ContactShadows, useGLTF } from "@react-three/drei";

import website_logo from "/src/assets/website_logo.png";

const Navbar = () => {

  <link href="dist/hamburgers.css" rel="stylesheet"></link>
  
  return (
    <div className="h-screen curve bg-[url('/src/assets/background.jpg')] bg-cover snap-center">
      {/* NavBar */}
      <div className="p-5 h-[10%]">
        <div className="absolute left-5 top-2">
          <img src={website_logo} width={180}></img>
        </div>
        <div className="absolute right-5 hidden md:block text-white">
          <ul className="flex gap-20">
            <li>Home</li>
            <li>Projects</li>
            <li>Connect</li>
          </ul>
        </div>
      </div>

      {/* Hero */}
      <div className="grid-rows-2 md:grid-cols-2 flex md:flex-row flex-col justify-center items-center md:h-[90%]">

        {/* Text Hero */}
        <div className="w-1/2 text-center md:mb-32">
          <h1 className="whitespace-nowrap pb-5 text-5xl text-indigo-600 font-bold">
            Creative
          </h1>
          <h1 className="whitespace-nowrap pb-5 text-5xl text-rose-500 font-bold">
            Innovative
          </h1>
          <h1 className="whitespace-nowrap pb-5 text-5xl text-indigo-600 font-bold">
            Adaptable
          </h1>
          <p>Do those words sound like your kind of developer?</p>
          <p>Then scroll down to learn more about me.</p>
          <div className="ml-[45%]"><CallToAction /></div>
        </div>

        {/* Model Hero */}
        <div className="w-1/2 h-full md:mb-32 md:order-last order-first">
          <Canvas camera={{ position: [0, -10, 80], fov: 50 }} dpr={[1, 2]}>
            <spotLight
              position={[-100, -100, -100]}
              intensity={0.2}
              angle={0.3}
              penumbra={1}
            />
            <hemisphereLight
              color="white"
              groundColor="black"
              position={[-7, 25, 13]}
              intensity={1}
            />
            <Suspense fallback={null}>
              <Bounds fit clip observe margin={1.2}>
                <Octopus />
              </Bounds>
              <ContactShadows
                rotation-x={Math.PI / 2}
                position={[0, -35, 0]}
                opacity={0.2}
                width={200}
                height={200}
                blur={1}
                far={50}
              />
            </Suspense>
            <OrbitControls
              makeDefault
              minPolarAngle={0}
              maxPolarAngle={Math.PI / 1.75}
              enableZoom={false}
            />
          </Canvas>
        </div>
      </div>
    </div>
    // <div className="grid-rows-2 md:grid-cols-2 flex md:flex-row flex-col justify-center items-center h-[90%] snap-center">
    //   <div className="bg-red-500 w-64 h-64"></div>
    //   <div className="bg-blue-500 w-64 h-64"></div>
    // </div>
  );
};

export default Navbar;
