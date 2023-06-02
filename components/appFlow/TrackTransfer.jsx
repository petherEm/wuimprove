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

const TrackTransfer = () => {
  const [hiddenBalance, setHiddenBalance] = useState(false);
  const [showTrackTransfer, setShowTrackTransfer] = useState(false);

  const router = useRouter();

  const handleHiddenBalance = () => {
    setHiddenBalance(!hiddenBalance);
  };

  const handleShowTrackTransfer = () => {
    setShowTrackTransfer(!showTrackTransfer);
  };


  return (
    <div className="mt-4 h-auto w-full md:w-[400px]">
      {/* Home Screen */}

      <div className="flex flex-col">
        <div className="flex flex-col px-4 text-white">
          {/* <header className="mt-2 flex items-center justify-center">
            <Image src="/wulogo.svg" width="280" height="150" />
          </header> */}
          <div className="flex flex-col items-start">
            
            {/* <h1 className="mt-8 mb-4 text-xl">Provide MTCN</h1> */}
          </div>

          {/* Country / Language selection */}
          {/* <div className="mt-4 mb-4 flex justify-between">
            <div className="relative border-[2px] border-slate-200 w-full p-4">
              <p className="absolute -top-[7px] left-3 text-[10px] bg-black p-1">
                MTCN{" "}
              </p>
              <input
                type="text"
                placeholder="932 - 332 - 3832"
                className="outline-none w-full bg-transparent text-white placeholder:text-white"
              />
            </div>
          </div> */}
          {/* Main Account Summary */}
          {/* <div onClick={handleShowTrackTransfer} className="flex flex-col gap-y-3">
            <div className="flex space-x-2">
              <div className="h-[20px] w-[20px] bg-yellow-400 rounded-full" />
              <p>Sent</p>
            </div>
            <div className="flex space-x-2">
              <div className="h-[20px] w-[20px] bg-yellow-400 rounded-full" />
              <p>In progress</p>
            </div>
            <div className="flex space-x-2">
              <div className="h-[20px] w-[20px] bg-yellow-400 rounded-full" />
              <p>Available in Western Union ecosystem</p>
            </div>
            <div className="flex space-x-2">
              <div className="h-[20px] w-[20px] bg-black border-2 border-yellow-400 rounded-full" />
              <p>Received</p>
            </div>
          </div> */}

          {/* CTA buttons */}

          {/* <div className="mt-8 mb-8 flex flex-col items-start gap-y-8">
            <div className="w-full ">
              <p className="font-bold px-2 py-4">
                Hey! Are you{" "}
                <span className="text-yellow-400">
                  new to Western Union Digital Banking?
                </span>
              </p>
              <p className="font-bold px-2 py-4">
                Register Now{" "}
                <span className="text-yellow-400">
                  to deposit this transfer and get 100 RON immediately!
                </span>
              </p>
              <button className="text-[18px] rounded-full bg-yellow-400 px-8 py-2 text-black hover:bg-yellow-600 w-full">
                Download
              </button>
            </div>
            <div className="w-full ">
              <p className="font-bold px-2 py-4">Existing Customer?</p>
              <button className="text-[18px] rounded-full border-2 border-white text-white px-8 py-2 hover:bg-slate-800 w-full">
                Log in
              </button>
            </div>
          </div> */}

          {/* T & C */}
          {/* <div className="mt-4 mb-4 flex flex-col items-start text-[12px] gap-y-3">
            <p>Terms & Conditions apply</p>
            <p>Do you want to know more about Western Union Digital Banking?</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TrackTransfer;
