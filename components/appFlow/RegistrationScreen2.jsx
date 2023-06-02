"use client";

import React, { useState } from "react";
import Image from "next/image";


import { useRouter } from "next/navigation";

const RegistrationScreen2 = () => {
  const [hiddenBalance, setHiddenBalance] = useState(false);

  const router = useRouter();

  const handleHiddenBalance = () => {
    setHiddenBalance(!hiddenBalance);
  };

  return (
    <div className="h-[820px] w-full md:w-[400px]">
      {/* Home Screen */}

      <div className="flex flex-col">
        <div className="flex flex-col md:px-4 text-white">
          <header className="mt-2 flex items-center justify-center">
            <Image src="/wulogo.svg" width="280" height="150" />
          </header>
          <div className="flex flex-col items-start">
            <h1 className="mt-8 mb-4 text-2xl font-bold">
              Personal Details <br />
              
            </h1>
          </div>

          {/* Main Account Summary */}
          <div className="bg-slate-100 text-black flex flex-col gap-y-3 h-screen">
            <h1 className="font-bold text-3xl mt-6"></h1>
            <div className="flex flex-col items-center gap-y-3">
              <input
                type="email"
                className="p-4 bg-slate-200 w-[90%] rounded-lg placeholder:text-black"
                placeholder="First Name"
              />
              <input
                type="email"
                className="p-4 bg-slate-200 w-[90%] rounded-lg placeholder:text-black"
                placeholder="Last Name"
              />
              <input
                type="email"
                className="p-4 bg-slate-200 w-[90%] rounded-lg placeholder:text-black"
                placeholder="Password"
              />
              <input
                type="email"
                className="p-4 bg-slate-200 w-[90%] rounded-lg placeholder:text-black"
                placeholder="Repeat Password"
              />
            </div>

            <div className="w-full p-4">
              <button className="text-[18px] rounded-full bg-yellow-400 px-8 py-2 text-black hover:bg-yellow-600 w-full">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationScreen2;
