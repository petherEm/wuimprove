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

export default function BankNew() {
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

        <div className="mt-[50px] flex h-auto min-h-[300px] flex-col items-center justify-between p-2 text-white md:mt-[100px] xl:flex-row">
          <div className="flex-1">
            <div>
              <h1 className="text-4xl font-extrabold italic text-white md:text-6xl xl:text-6xl">
                Western Union Digital Banking{" "}
                <span className="text-yellow-400">
                  Send money with <span className="text-white">ZERO</span> fees
                  and reduced <span className="text-white">FX rates</span>
                </span>
              </h1>
            </div>

            {/* CALCULATOR */}

            <div className="mt-2 border-2 border-red-500 p-2">
              {/* drop downs */}
              <div className="mt-8 flex space-x-4">
                <div
                  data-theme="light"
                  className="bg-white h-[60px] rounded-xl"
                >
                  <label className="text-[14px] p-2 text-black">Send to</label>
                  <ReactFlagsSelect
                    className="bg-white text-center h-[40px] w-60 rounded-xl"
                    style={{ border: "0px" }}
                    selected={select}
                    onSelect={onSelect}
                    countries={[
                      "PL",
                      "RO",
                      "UA",
                      "US",
                      "DE",
                      "fi",
                      "GB",
                      "IE",
                      "IT",
                      "NL",
                      "SE",
                    ]}
                    searchable={true}
                    optionsSize={20}
                    showSelectedLabel={true}
                    /*showSelectedLabel={showSelectedLabel}
                selectedSize={selectedSize}
                showOptionLabel={showOptionLabel}
                optionsSize={optionsSize}
                placeholder={placeholder}
                searchable={searchable}
                searchPlaceholder={searchPlaceholder}
                alignOptionsToRight={alignOptionsToRight}
                fullWidth={fullWidth}
                disabled={disabled} */
                  />
                </div>
                <div
                  data-theme="light"
                  className="bg-white h-[60px] rounded-xl flex flex-col"
                >
                  <label className="text-[14px] p-2 text-black">
                    Send amount
                  </label>
                  <input
                    type="text"
                    className="px-4 bg-white text-left h-[60px] w-52 rounded-xl outline-none py-1"
                    placeholder="100.00 EUR"
                  />
                </div>
              </div>

              {/* FX rates */}
              <div className="mt-8 flex items-center space-x-8">
                <h1>
                  <span className="font-bold">FX:</span>1.00 EUR = {rates}{" "}
                  {currency}
                </h1>
                <h1>
                  <span className="font-bold">Fee:</span> 0.00 EUR
                </h1>
                <div>
                  <div
                    className="tooltip tooltip-bottom text-left"
                    data-tip='Exchange Rates and Fees shown are estimates, vary by a number of factors including payment and payout methods, and are subject to change. To check current rates and other options, simply click
              "Send now"'
                  >
                    <AiFillInfoCircle className="text-3xl" />
                  </div>
                </div>
              </div>

              <div className="mt-8 text-xl bg-rose-500 rounded-lg p-3">
                <h2>
                  Sending to Poland? Click here to send an invite to open
                  Western Union Digital Bank in Poland and send fee-free!
                </h2>
              </div>
            </div>
            <div>
              <h2 className="mt-10 text-xl font-semibold text-white md:text-2xl xl:text-2xl tracking-wide">
                Download the{" "}
                <span className="text-yellow-400">
                  Western Union Digital Banking app
                </span>{" "}
                and enjoy fee-free money transfers between users, a free bank
                account, savings account, and other perks.
              </h2>
            </div>
            <div className="mt-8 flex justify-center space-x-8 md:justify-start">
              <button className="rounded-full bg-yellow-400 px-12 py-4 text-xl font-semibold text-black hover:bg-yellow-600 tracking-wide">
                Download now
              </button>
            </div>
          </div>
          <div className="">
            <Image src="/wubank_hero.webp" width="700" height="800" />
          </div>
        </div>

        {/* FEATURES SECTION */}
        <div className="mt-[50px] flex h-auto min-h-[300px] flex-col items-center justify-center p-2 text-white md:mt-[100px]">
          {/* CENTRAL BANNER */}
          <div className="flex w-[80%] flex-col items-center justify-center gap-8 text-center">
            <div className="bg-yellow-400 w-full flex items-center justify-between px-6 py-8 text-black">
              <div>
                <BsFillPeopleFill className="text-6xl" />
              </div>
              <div className="flex flex-col text-left">
                <h1 className="font-bold">6% interest saving account!</h1>
                <p>
                  Open a digital bank account and receive up to 6% interest on
                  your savings
                </p>
              </div>
              <button className="w-fit rounded-full bg-black px-12 py-4 text-xl font-semibold text-yellow-400 hover:text-yellow-600">
                Download now
              </button>
            </div>
          </div>
          {/* VIDEO BANNER */}
          <div className="mt-10 flex w-[70%] items-center justify-around gap-8 text-left">
            <div className="flex-[50%]">
              <Image src="/video_placeholder.jpg" width={400} height={200} />
            </div>
            <div className="flex-[50%]">
              <h1 className="text-4xl tracking-wide">
                <span className="text-yellow-400">
                  Western Union Digital Banking
                </span>{" "}
                is going to transform the way you send, save and spend money.
              </h1>
            </div>
          </div>

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
