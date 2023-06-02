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

const RegistrationSplit = () => {
  const [hiddenBalance, setHiddenBalance] = useState(false);

  const router = useRouter();

  const handleHiddenBalance = () => {
    setHiddenBalance(!hiddenBalance);
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
            <h1 className="mt-8 mb-4 text-2xl">
              Welcome to your free multi-currency wallet!
            </h1>
          </div>

          {/* Country / Language selection */}
          <div className="mt-4 mb-4 flex justify-between">
            <div className="relative border-[2px] border-slate-200 w-full p-4">
              <p className="absolute -top-[7px] left-3 text-[10px] bg-black p-1">
                Country / Language{" "}
              </p>
              <p>Romania / Romanian</p>
            </div>
          </div>
          {/* Main Account Summary */}
          <div className="flex flex-col gap-y-3">
            <div className="flex space-x-2">
              <div className="h-[20px] w-[20px] bg-yellow-400 rounded-full" />
              <p>International money transfers to 200 countries</p>
            </div>
            <div className="flex space-x-2">
              <div className="h-[20px] w-[20px] bg-yellow-400 rounded-full" />
              <p>Free bank account</p>
            </div>
            <div className="flex space-x-2">
              <div className="h-[20px] w-[20px] bg-yellow-400 rounded-full" />
              <p>Free Visa Platinum card</p>
            </div>
            <div className="flex space-x-2">
              <div className="h-[20px] w-[20px] bg-yellow-400 rounded-full" />
              <p>Free savings account with interests rates</p>
            </div>
            <div className="flex space-x-2">
              <div className="h-[20px] w-[20px] bg-yellow-400 rounded-full" />
              <p>Multicurrency account (RON, EUR, USD, GBP)</p>
            </div>
          </div>

          {/* CTA buttons */}

          <div className="mt-8 mb-8 flex flex-col items-start gap-y-8">
            {/* <div className="w-full ">
              <p className="font-bold px-2 py-4">Expecting Money Transfer?</p>
              <button className="text-[18px] rounded-full bg-yellow-400 px-8 py-2 text-black hover:bg-yellow-600 w-full">
                Track your money
              </button>
            </div> */}
            <div className="w-full ">
              <p className="font-bold px-2 py-4">New Customers:</p>
              <button className="text-[18px] rounded-full bg-yellow-400 px-8 py-2 text-black hover:bg-yellow-600 w-full">
                Register Now
              </button>
            </div>
            <div className="w-full">
              <p className="font-bold px-2 py-4">
                westernunion.com or Western Union Digital Banking customers:
              </p>
              <button className="text-[18px] rounded-full border-2 border-white text-white px-8 py-2 hover:bg-slate-800 w-full">
                Log in
              </button>
            </div>
          </div>

          {/* T & C */}
          <div className="mt-4 mb-4 flex flex-col items-start text-[12px] gap-y-3">
            <p>Terms & Conditions apply</p>
            <p>Do you want to know more about Western Union Digital Banking?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSplit;
