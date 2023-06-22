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

const Welcome_verified = () => {
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
    <div className="h-[1200px] w-full md:w-[400px] bg-black">
      {/* Home Screen */}

      <div className="flex flex-col">
        <div className="flex flex-col px-4 text-white">
          <div className="alert alert-success shadow-lg">
            <div className="flex items-center justify-center text-[12px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Congratulation! You have been verified!</span>
            </div>
          </div>

          <header className="mt-2 flex items-center justify-center">
            <Image src="/wulogo.svg" width="280" height="150" />
          </header>
          <div className="flex flex-col items-start justify-between">
            <h1 className="mt-8 mb-4 text-3xl font-bold">Hi, Denisa</h1>
          </div>

          {/* Account section */}
          <div className="mt-4 mb-4 flex justify-between">
            <div>
              <div>
                <p className="text-[14px] font-light">Total balance</p>
                <h1 className="text-3xl font-extrabold">
                  {hiddenBalance ? "••••••" : "1500 RON"}
                </h1>
                <div className="flex"></div>
              </div>
            </div>
            <div className="flex cursor-pointer flex-col items-end gap-2">
              <p
                className="text-[14px] text-yellow-500"
                onClick={handleHiddenBalance}
              >
                {hiddenBalance ? "Show in RON" : "Show in EUR"}
              </p>
              <HiChevronRight className="text-yellow-500" />
            </div>
          </div>
          {/* Main Account Summary */}
          <div className="flex justify-between">
            <div>
              <p className="text-[14px]">Main Account</p>
              <h1 className="text-2xl font-extrabold">700 RON</h1>
            </div>
            <HiChevronRight className="cursor-pointer text-yellow-500" />
          </div>

          {/* CTA buttons */}

          <div className="mt-8 mb-8 flex items-center justify-around">
            <button
              onClick={() => router.push("/screens/fundsinMain")}
              className="text-[18px] rounded-full bg-yellow-400 px-8 py-2 text-black hover:bg-yellow-600"
            >
              Add Money
            </button>
            <button
              onClick={() => router.push("/screens/sendmoney")}
              className="text-[18px] rounded-full bg-yellow-400 px-8 py-2 text-black hover:bg-yellow-600"
            >
              Send
            </button>
          </div>

          {/* BLIK Payment */}

          {/* <div className="mt-4 mb-4 flex flex-col items-start justify-between">
            <p className="text-[12px]">Zapłać z BLIK</p>
            <div className="flex items-center space-x-10">
              <div
                onClick={handleShowBlik}
                className="cursor-pointer  rounded-full px-4 py-2 text-black hover:bg-yellow-600"
              >
                <Image src="/app/blik_short.jpeg" width="50" height="50" />
              </div>
              <div className="flex w-[160px] flex-col rounded-md border-2 border-yellow-400 px-6 py-1 text-center text-[22px] font-bold text-white hover:bg-yellow-600">
                <p>{showBlik ? showBlik : "123456"}</p>
                <span className="animate-pulse text-[10px] text-yellow-400 ">
                  wygasa za {countdown} sek
                </span>
              </div>
            </div>
          </div> */}

          <div className="flex justify-between">
            <p className="text-[14px]">Debit card</p>
            <p className="cursor-pointer text-[14px] text-yellow-500">
              Show 
              details
            </p>
          </div>
          {/* Card picture */}
          <div className="mt-4 mb-4 flex items-center justify-center">
            <Image src="/dummycard.png" width="250" height="100" />
          </div>

          {/* Favourite receivers */}
          <div className="mt-4 mb-4 flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-[14px] font-bold">
                Favourite 
                receivers
              </p>
              <p className="cursor-pointer text-[14px] text-yellow-500">
                Show all 
                receivers
              </p>
            </div>
            <div className="mt-4 flex items-center justify-around">
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-14 w-14 rounded-full border-2 border-yellow-300">
                  <FaUserPlus className="absolute top-3 left-4 text-2xl text-yellow-400" />
                </div>
                <p className="text-[12px] font-bold">Add</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-14 w-14 rounded-full border-2 border-yellow-300">
                  <p className="absolute top-3 left-3 text-[18px] font-bold">
                    DK
                  </p>
                </div>
                <p className="text-[12px] font-bold">Darius</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-14 w-14 rounded-full border-2 border-yellow-300">
                  <p className="absolute top-3 left-3 text-[18px] font-bold">
                    BS
                  </p>
                </div>
                <p className="text-[12px] font-bold">Bart</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-14 w-14 rounded-full border-2 border-yellow-300">
                  <p className="absolute top-3 left-3 text-[18px] font-bold">
                    DM
                  </p>
                </div>
                <p className="text-[12px] font-bold">Devin</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-14 w-14 rounded-full border-2 border-yellow-300">
                  <p className="absolute top-3 left-3 text-[18px] font-bold">
                    PM
                  </p>
                </div>
                <p className="text-[12px] font-bold">Piotr</p>
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="mt-4 mb-4 flex justify-between">
            <p className="text-[14px]">Szybkie działania</p>
            <p className="cursor-pointer text-[14px] text-yellow-500">
              Dostosuj
            </p>
          </div>

          {/* Saving targets */}
          <div>
            <div className="mt-4 mb-4 flex justify-between">
              <p className="text-[14px]">Cele</p>
              <p className="cursor-pointer text-[14px] text-yellow-500">
                Pokaż wszystko
              </p>
            </div>
            <div className="text-center font-thin mt-4 mb-4 w-full px-4 py-4 text-[16px] hover:border-slate-200 hover:text-slate-200">
              Nie utworzono jeszcze żadnych celów
            </div>
            <button className="mt-4 mb-4 w-full rounded-full border-[1.5px] border-white px-4 py-4 text-[16px] font-semibold hover:border-slate-200 hover:text-slate-200">
              Utwórz cel
            </button>
          </div>

          {/* T & C */}
          <div className="mt-4 mb-4 flex justify-center">
            <button className="text-[14px] font-bold text-yellow-400 tracking-wider">
              Zastrzeżenia prawne
            </button>
          </div>
        </div>
      </div>

      {/* MOB FOOTER */}

      <MobFooter />
    </div>
  );
};

export default Welcome_verified;
