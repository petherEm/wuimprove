"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsShieldFillCheck } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";
import ReactFlagsSelect from "react-flags-select";

const fetchRates = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const HeroNew = () => {
  const [select, setSelect] = useState("PL");
  const [currency, setCurrency] = useState("PLN");
  const [rates, setRates] = useState("4.5612");

  useEffect(() => {
    fetchRates(
      `https://v6.exchangerate-api.com/v6/5f408f6dc33a575a92904c53/pair/EUR/${currency}`
    ).then((data) => {
      const conversion_rate = data.conversion_rate;
      console.log("conversion_rate", conversion_rate);
      setRates(conversion_rate);
    });
  }, [currency]);

  useEffect(() => {
    updateCodes();
  }, [select]);

  const onSelect = (code) => {
    setSelect(code);
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
    <div className="bg-[#fbd721] md:min-h-[870px] h-auto text-black flex flex-col md:flex-row">
      {/* --------------RIGHT SIDE-------------- */}
      <div className="md:flex-[60%] p-4 md:p-10 lg:p-24">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold">
            International money transfer from <br />  virtually anywhere
          </h1>
          <h2 className="text-lg md:text-2xl mt-6">
            Be it a small gift, money to support your loved ones or welcome
            surprise, with Western Union you can transfer money abroad reliably
            and easily. Send joy to almost any place in the world with a few
            clicks.
          </h2>
        </div>

        {/* drop downs */}
        <div className="mt-8 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div data-theme="light" className="bg-white h-[70px] md:h-[60px] rounded-xl">
            <label className="text-[14px] p-2 text-gray-400">Send to</label>
            <ReactFlagsSelect
              className="bg-white text-center h-[40px] w-60 rounded-xl outline-none focus:outline-none"
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
              showOptionLabel={true}

              /*showSelectedLabel={showSelectedLabel}
                selectedSize={selectedSize}
                showOptionLabel={showOptionLabel}
                optionsSize={optionsSize}
                placeholder={placeholder}
                searchable={searchable}
                searchPlaceholder={searchPlaceholder}
                alignOptionsToRight={alignOptionsToRight}
                
                disabled={disabled} */
            />
          </div>
          <div
            data-theme="light"
            className="bg-white h-[70px] md:h-[60px] rounded-xl flex flex-col"
          >
            <label className="text-[14px] p-2 text-gray-400">Send amount</label>
            <input
              type="text"
              className="px-4 bg-white text-left h-[75px] md:h-[60px] w-52 rounded-xl outline-none py-1"
              placeholder="100.00 EUR"
            />
          </div>
        </div>

        {/* FX rates */}
        <div className="mt-4 md:mt-8 flex flex-col md:flex-row md:items-center md:space-x-8">
          <h1>
            <span className="font-bold">FX:</span>1.00 EUR = {rates} {currency}
          </h1>
          <h1>
            <span className="font-bold">Fee:</span> 0.00 EUR
          </h1>
          <div>
            <div
              className="tooltip md:tooltip-bottom tooltip-right text-left"
              data-tip='Exchange Rates and Fees shown are estimates, vary by a number of factors including payment and payout methods, and are subject to change. To check current rates and other options, simply click
              "Send now"'
            >
              <AiFillInfoCircle className="text-xl md:text-3xl" />
            </div>
          </div>
        </div>

        {/* New Offer */}
        {/* <div className="mt-6 rounded-lg bg-blue-800 text-white w-fit px-4 py-1">
          <h1 className="tracking-wide">New customer offer</h1>
        </div> */}

        {/* New Offer 2 */}
        {/* <div className="mt-6">
          <h1>
            <span className="font-bold">0EUR transfer fee </span>on your first
            transaction. FX gains apply.
          </h1>
        </div> */}

        {/* New Offer */}

        {/* <div className="flex flex-col space-y-4 md:flex-row md:space-x-3 md:items-center">
          <div className="mt-6 rounded-lg bg-orange-800 text-white w-fit px-4 py-1">
            <h1 className="tracking-wide">
              <span className="font-bold">Sending to Poland?</span>You can now
              send directly to Western Union Digital Bank account and reward
              your receiver with 100 PLN.
            </h1>
          </div>
        </div> */}

        {/* New Offer 2 */}
        
        {/* <div className="mt-6 rounded-lg bg-orange-800 text-white w-fit px-4 py-1">
          <h1>
            <span className="font-bold">0EUR transfer fee </span>on your XX
            transactions. FX gains apply.
          </h1>
        </div> */}

        <button className="mt-6 px-6 py-4 bg-black text-yellow-400 rounded-full font-normal text-2xl hover:text-yellow-600 tracking-wide w-full md:w-auto">
          <Link href="/send">Send fee-free</Link>
        </button>

        <div className="mt-6 flex items-center space-x-4">
          <BsShieldFillCheck className="text-5xl" />
          <h1 className="text-lg md:text-xl">
            <span className="font-bold">Be informed. Be aware. </span>
            <span className="underline">Protect yourself from fraud. </span>
          </h1>
        </div>
      </div>

      {/* --------------LEFT SIDE-------------- */}

      <div className="relative md:flex-[40%]">
        <Image src="/hero_lady.webp" fill={true} className="object-cover" />
      </div>
    </div>
  );
};

export default HeroNew;
