import { React, Suspense, useState } from "react";
import CallToAction from "./SvgComponent";
import { OrbitControls, Bounds, ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Octopus from "./Octopus";
import { FcMenu, FcHome, FcFolder, FcCollaboration } from "react-icons/fc";

import website_logo from "/src/assets/website_logo.png";

const Hero = () => {
  const [touchedHamburger, setHamburgerState] = useState(false);

  function changeHamburgerState() {
    setHamburgerState(!touchedHamburger);
  }

  return (
    <div className={`h-screen bg-cover snap-center ${touchedHamburger ? 'bg-black/30' : "bg-[url('/src/assets/background.jpg')]"}`}>
      {/* Hamburger NavBar */}

      <div className={`fixed ${touchedHamburger ? 'bg-rose-100 w-3/5 h-screen ease-in duration-1000' : ' left-[-100%] ease-in duration-1000'}`}>
        <div className="flex justify-center pt-5">
          <img src={website_logo} width={180}></img>
        </div>

        <div>
          <ul className={`absolute left-[10%] mt-10`}>
            <li className="pb-3 flex gap-3"><span><FcHome/></span>Home</li>
            <li className="pb-3 flex gap-3"><span><FcFolder/></span>Projects</li>
            <li className="pb-3 flex gap-3"><span><FcCollaboration/></span>Connect</li>
          </ul>
        </div>
      </div>

      {/* NavBar */}
      <div className="p-5 h-[10%]">
        <div className={`absolute left-5 top-2 ${touchedHamburger ? 'hidden' : 'block'}`}>
          <img src={website_logo} width={180}></img>
        </div>
        <div className="absolute right-5 hidden md:block text-white">
          <ul className="flex gap-20">
            <li>Home</li>
            <li>Projects</li>
            <li>Connect</li>
          </ul>
        </div>

        {/* Hamburger */}
        <div className="md:hidden absolute right-5 top-4">
          <span>
            <FcMenu size={30} onClick={changeHamburgerState} />
          </span>
        </div>
      </div>

      {/* Hero */}
      <div className={`grid-rows-2 md:grid-cols-2 flex md:flex-row flex-col justify-center items-center md:h-[90%] ${touchedHamburger ? 'hidden' : 'block'}`}>
        {/* Text Hero */}
        <div className="w-1/2 text-center">
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
          <div className="md:ml-[45%] ml-[40%]">
            <CallToAction />
          </div>
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

export default Hero;
