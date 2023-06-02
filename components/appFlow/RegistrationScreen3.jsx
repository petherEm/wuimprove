"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  HiChevronRight,
  HiChevronLeft,
  HiTemplate,
  HiUserCircle,
  HiOutlineFingerPrint,
} from "react-icons/hi";
import { FaUserPlus } from "react-icons/fa";
import { AiFillWallet, AiFillStar } from "react-icons/ai";
import { TbArrowsLeftRight } from "react-icons/tb";

import { FiLogOut } from "react-icons/fi";

import MobFooter from "./MobFooter";

import { useRouter } from "next/navigation";

const RegistrationScreen3 = () => {
  const [hiddenBalance, setHiddenBalance] = useState(false);
  const [showBlik, setShowBlik] = useState(false);
  const [countdown, setCountdown] = useState(60);

  const router = useRouter();

  const handleHiddenBalance = () => {
    setHiddenBalance(!hiddenBalance);
  };

  const handleCountdown = () => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : "BLIK wygasł"
      );
    }, 1000);
    return () => clearInterval(timer);
  };

  const handleShowBlik = () => {
    const generateBlikCode = () => {
      const blikCode = Math.floor(100000 + Math.random() * 900000);
      return blikCode;
    };
    handleCountdown();
    setShowBlik(generateBlikCode);
  };

  return (
    <div className="h-[820px] w-full md:w-[400px]">
      {/* Home Screen */}

      <div className="flex flex-col">
        <div className="flex flex-col px-4 text-white">
          <header className="mt-2 flex items-center justify-center">
            <Image src="/wulogo.svg" width="280" height="150" />
          </header>
          <div className="flex items-center justify-between">
            <h1 className="mt-8 mb-4 text-3xl font-bold">Hi, Denisa</h1>
          </div>

          {/* Account section */}
          <div className="mt-4 mb-4 flex justify-between">
            <div>
              <div>
                <p className="text-[14px] font-light">Pending Transfer</p>
                <h1 className="text-3xl font-extrabold">
                  {hiddenBalance ? "300 EUR" : "1400 RON"}
                </h1>
                <div className="flex"></div>
              </div>
            </div>
            <div className="flex cursor-pointer flex-col items-end gap-2">
              <p
                className="text-[14px] text-yellow-500"
                onClick={handleHiddenBalance}
              >
                {hiddenBalance ? "See in RON" : "See in EUR"}
              </p>
              <HiChevronRight className="text-yellow-500" />
            </div>
          </div>
          {/* Main Account Summary */}
          <div className="flex justify-between">
            <div>
              <p className="text-[14px]">Pending bonus</p>
              <h1 className="text-2xl font-extrabold text-yellow-400">
                100 RON
              </h1>
            </div>
            <HiChevronRight className="cursor-pointer text-yellow-500" />
          </div>

          {/* CTA buttons */}

          <div className="mt-8 mb-8 flex items-center justify-around">
            <button
              onClick={() => router.push("/screens/fundsinMain")}
              className="text-[18px] rounded-full bg-yellow-400 px-8 py-4 text-black hover:bg-yellow-600 w-full"
            >
              Continue to access funds
            </button>
          </div>

          {/* Saving targets */}
          <div>
            <div className="text-center font-thin mt-4 mb-4 w-full px-4 py-4 text-[16px] hover:border-slate-200 hover:text-slate-200">
              Do you want to pick up your transfer in cash?
            </div>
            <button className="mt-4 mb-4 w-full rounded-full border-[1.5px] border-white px-4 py-4 text-[16px] font-semibold hover:border-slate-200 hover:text-slate-200">
              Seek agent location
            </button>
          </div>

          {/* T & C */}
          <div className="mt-4 mb-4 flex justify-center">
            <button className="text-[14px] font-bold text-yellow-400 tracking-wider">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationScreen3;
