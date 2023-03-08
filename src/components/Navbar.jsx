import React from "react";

const Navbar = () => {
  return (
    <div className="h-screen snap-center text-white">
      <div className="flex justify-around backdrop-filter backdrop-blur-sm backdrop-opacity-60 p-5">
        <div>Logo</div>
        <div>
          <ul className="flex gap-20">
            <li>Hero</li>
            <li>Projects</li>
            <li>Connect</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
