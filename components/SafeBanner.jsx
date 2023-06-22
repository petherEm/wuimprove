import React from "react";
import { GiPadlock } from "react-icons/gi";
import { MdVerifiedUser } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

const SafeBanner = () => {
  return (
    <div className="bg-black text-white flex items-center justify-center mx-auto md:h-[90px] w-full">
      <div className="flex flex-col items-start md:flex-row md:justify-between space-x-0 md:space-x-10 space-y-6 md:space-y-0 md:items-center p-4 md:p-10">
        <div className="flex items-center space-x-3">
          <div className="w-8">
            <GiPadlock className="text-3xl text-yellow-400" />
          </div>
          <p>We encrypt <br /> your transfers</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-8">
            <MdVerifiedUser className="text-3xl text-yellow-400" />
          </div>

          <p>
            We are committed to <br /> keeping your data secure
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-8">
            <BiWorld className="text-3xl text-yellow-400" />
          </div>

          <p>
            We’ve sent money around <br /> the world for over 150 years
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafeBanner;
