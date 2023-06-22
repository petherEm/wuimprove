"use client";

import React, { useState } from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";

const RegistrationScreen = () => {
  const [hiddenBalance, setHiddenBalance] = useState(false);
  const [openOTP, setOpenOTP] = useState(false);

  const router = useRouter();

  const handleHiddenBalance = () => {
    setHiddenBalance(!hiddenBalance);
  };

  const handleOpenOTP = () => {
    setOpenOTP(!openOTP);
  };

  return (
    <div className="max-h-[820px] w-full md:w-[400px]">
      {/* Home Screen */}

      <div className="flex flex-col">
        <div className="flex flex-col px-0 md:px-4 text-white">
          <header className="mt-2 flex items-center justify-center">
            <Image src="/wulogo.svg" width="280" height="150" />
          </header>
          <div className="flex flex-col items-start">
            <h1 className="mt-8 mb-4 text-2xl font-bold">
              Access wallet <br />
              and enjoy your money!
            </h1>
          </div>

          {/* Main Account Summary */}
          <div className="bg-slate-100 text-black flex flex-col gap-y-3 min-h-screen">
            <h1 className="font-bold text-3xl mt-6">Let's begin</h1>
            <div className="flex flex-col items-center gap-y-3">
              <input
                type="email"
                className="p-4 bg-slate-200 w-[90%] rounded-lg placeholder:text-black"
                placeholder="E-mail"
              />
              <input
                type="email"
                className="p-4 bg-slate-200 w-[90%] rounded-lg placeholder:text-black"
                placeholder="+40 "
              />
            </div>

            <div className="p-4 mt-4">
              <div className="flex space-x-3">
                <input type="checkbox" />
                <p className="text-[12px]">
                  I certify I register on my own behalf.
                </p>
              </div>
              <div className="flex space-x-3">
                <input type="checkbox" />
                <p className="text-[12px]">
                  I agree on the presented Terms and Conditions and Privacy
                  statement.
                </p>
              </div>
              <div className="flex space-x-3">
                <input type="checkbox" />
                <p className="text-[12px]">I am not US Tax person.</p>
              </div>
            </div>

            <div className="w-full p-4">
              <button
                onClick={handleOpenOTP}
                className="text-[18px] rounded-full bg-yellow-400 px-8 py-2 text-black hover:bg-yellow-600 w-full"
              >
                Confirm
              </button>
            </div>

            {/* OTP */}

            <div className={openOTP ? "w-full p-4" : "hidden"}>
              <h1 className="font-bold text-2xl mt-6">
                Confirm your phone number
              </h1>
              <h1 className="text-xl mt-6">
                Provide 6 digits one time password that we sent on
              </h1>
              <h2 className="mt-3 mb-3 font-bold text-xl text-center">
                +40 323 312 1313
              </h2>
              <div className="flex items-center justify-center space-x-2">
                <input
                  type="text"
                  className="bg-slate-200 w-[40px] h-[40px] rounded-lg outline-none"
                />
                <input
                  type="text"
                  className="bg-slate-200 w-[40px] h-[40px] rounded-lg outline-none"
                />
                <input
                  type="text"
                  className="bg-slate-200 w-[40px] h-[40px] rounded-lg outline-none"
                />
                <p>-</p>
                <input
                  type="text"
                  className="bg-slate-200 w-[40px] h-[40px] rounded-lg outline-none"
                />
                <input
                  type="text"
                  className="bg-slate-200 w-[40px] h-[40px] rounded-lg outline-none"
                />
                <input
                  type="text"
                  className="bg-slate-200 w-[40px] h-[40px] rounded-lg outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationScreen;
