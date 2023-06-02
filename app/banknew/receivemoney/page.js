"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ReactFlagsSelect from "react-flags-select";

import BenefitSummary from "@/components/BenefitSummary";
import {
  BsFillPeopleFill,
  BsCashCoin,
  BsFillGiftFill,
  BsShieldFillCheck,
} from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaCcVisa } from "react-icons/fa";

import TrackTransfer from "@/components/appFlow/TrackTransfer";

export default function ReceiveMoney() {
  const [select, setSelect] = useState("PL");
  const [currency, setCurrency] = useState("PLN");
  const [rates, setRates] = useState("4.5612");

  const fetchRates = async (currPair) => {
    const res = await fetch(
      `https://v6.exchangerate-api.com/v6/5f408f6dc33a575a92904c53/pair/EUR/${currPair}`
    );
    const data = await res.json();

    const conversion_rate = data.conversion_rate;

    console.log("conversion_rate", conversion_rate);
    setRates(conversion_rate);
  };

  const onSelect = (code) => {
    setSelect(code);
    updateCodes();
    fetchRates(currency);
    console.log("SELECT", select);
    console.log("currency", currency);
  };

  const updateCodes = () => {
    if (select === "PL") {
      setCurrency("PLN");
    } else if (select === "RO") {
      setCurrency("RON");
    } else if (select === "UA") {
      setCurrency("UAH");
    } else if (select === "US") {
      setCurrency("USD");
    } else if (select === "DE") {
      setCurrency("EUR");
    } else if (select === "fi") {
      setCurrency("EUR");
    } else if (select === "GB") {
      setCurrency("GBP");
    } else if (select === "IE") {
      setCurrency("EUR");
    } else if (select === "IT") {
      setCurrency("EUR");
    } else if (select === "NL") {
      setCurrency("EUR");
    } else if (select === "SE") {
      setCurrency("SEK");
    }
  };

  return (
    <div className="w-full bg-black">
      <div className="bg-black mx-auto max-w-7xl">
        {/* HERO SECTION */}

        <div className="mt-[50px] flex h-auto min-h-[300px] flex-col items-center justify-between p-2 text-white md:mt-[100px]">
          <div className="flex flex-col items-center">
            <div className="flex flex-col">
              <h1 className="text-4xl font-extrabold italic text-white md:text-6xl xl:text-6xl">
                Your money is safe with <br /> Western Union{" "}
                <span className="text-yellow-400">Ecosystem.</span>{" "}
              </h1>

              <h1 className="mt-4 text-2xl font-extrabold italic text-white md:text-3xl xl:text-3xl">
                <span className="text-yellow-400">MTCN: 932 - 332 - 3832</span>{" "}
                available for pick up
              </h1>
              <h1 className="mt-10 text-2xl font-extrabold italic text-white md:text-2xl xl:text-2xl">
                How do you want to access your funds?
              </h1>

              <div className="mt-32 flex flex-col items-center">
                <div className="cursor-pointer">
                  <p className="p-4">
                    Access digitally and get 100 RON bonus now!
                  </p>
                  <h2 className="text-4xl text-center font-bold bg-yellow-400 py-4 px-8 text-black rounded-lg">
                    Download multicurrency wallet
                  </h2>

                  <TrackTransfer />
                </div>
                <div className="cursor-pointer">
                  <p className="p-4">Cash out at Western Union agent</p>
                  <h2 className="text-4xl w-[560px] text-center font-bold py-4 px-14 border-2 border-slate-100 rounded-lg">
                    Cash
                  </h2>
                  <div className="hidden h-[300px] w-[560px] mt-10 border-2 border-white rounded-lg flex items-center justify-center">
                    Map placeholder
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INJECT HERE TRACK A TRANSFER */}
        <div className="flex items-center justify-center"></div>

        {/* FEATURES SECTION */}
        <div className="mt-[50px] flex h-auto min-h-[300px] flex-col items-center justify-center p-2 text-white md:mt-[100px]">
          {/* KEY BENEFITS BANNER */}
          <div className="mt-20 flex w-[90%] items-center justify-around gap-8 text-left">
            <div className="flex-[40%]">
              <Image src="/phone_app.webp" width={400} height={200} />
            </div>
            <div className="flex-[60%] flex flex-col gap-y-6">
              <div className="flex space-x-10 items-center">
                <div className="w-8">
                  <BsCashCoin className="text-5xl text-yellow-400" />
                </div>
                <h1 className="text-xl tracking-wide">
                  Banking in multiple currencies and earn interest rate on your
                  savings account.
                </h1>
              </div>
              <div className="flex space-x-10 items-center">
                <div className="w-8">
                  <BsFillGiftFill className="text-5xl text-yellow-400" />
                </div>

                <h1 className="text-xl tracking-wide">
                  Instant money transfers to other Western Union Digital Banking
                  account holders for 0 € transfer fee.
                </h1>
              </div>
              <div className="flex space-x-10 items-center">
                <div className="w-8">
                  <FaCcVisa className="text-5xl text-yellow-400" />
                </div>
                <h1 className="text-xl tracking-wide">
                  Free Visa Platinum debit card
                </h1>
              </div>
              <div className="flex space-x-10 items-center">
                <div className="w-8">
                  <BsShieldFillCheck className="text-5xl text-yellow-400" />
                </div>
                <h1 className="text-xl tracking-wide">
                  Up to 100 000 € deposit is secured by the Austrian Deposit
                  Protection Scheme
                </h1>
              </div>
            </div>
          </div>

          {/* BENEFIT SUMMARY SECTION */}

          <BenefitSummary />
        </div>
      </div>
    </div>
  );
}
