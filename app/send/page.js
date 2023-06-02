"use client";

import React, { useState, useEffect } from "react";
import { BsCashCoin, BsBank } from "react-icons/bs";
import Image from "next/image";
import ReactFlagsSelect from "react-flags-select";
import Link from "next/link";

const fetchRates = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};

const SendMoney = () => {
  const [select, setSelect] = useState("PL");
  const [name, setName] = useState("Poland");
  const [bannerROPL, setBannerROPL] = useState(false);
  const [currency, setCurrency] = useState("PLN");
  const [rates, setRates] = useState("4.5612");
  const [sendAmount, setSendAmount] = useState("0");

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
      setName("Poland");
      setBannerROPL(true);
    } else if (select === "RO") {
      setCurrency("RON");
      setName("Romania");
      setBannerROPL(true);
    } else if (select === "UA") {
      setCurrency("UAH");
      setName("Ukraine");
      setBannerROPL(false);
    } else if (select === "US") {
      setCurrency("USD");
      setName("United States");
      setBannerROPL(false);
    } else if (select === "DE") {
      setCurrency("EUR");
      setName("Germany");
      setBannerROPL(false);
    } else if (select === "fi") {
      setCurrency("EUR");
      setName("Finland");
      setBannerROPL(false);
    } else if (select === "GB") {
      setCurrency("GBP");
      setName("United Kingdom");
      setBannerROPL(false);
    } else if (select === "IE") {
      setCurrency("EUR");
      setName("Ireland");
      setBannerROPL(false);
    } else if (select === "IT") {
      setCurrency("EUR");
      setName("Italy");
      setBannerROPL(false);
    } else if (select === "NL") {
      setCurrency("EUR");
      setName("Netherlands");
      setBannerROPL(false);
    } else if (select === "SE") {
      setCurrency("SEK");
      setName("Sweden");
      setBannerROPL(false);
    }
  };

  return (
    <div data-theme="light" className="bg-gray-300 text-black">
      {/* YELLOW UPSELL BANNER */}
      <div
        className={`${
          !bannerROPL
            ? "hidden"
            : "bg-[#fbd721] border-0 border-red-500 h-24 flex items-center justify-center"
        }`}
      >
        <div className="flex flex-col ">
          <h1 className="text-center text-[13px] md:text-[18px]">
            Sending to <span className="font-bold">{name}? </span>Send directly
            to Western Union Ecosystem and reward your receiver{" "}
            <span className="font-bold">
              now with additional 100 {currency} bonus.
            </span>
          </h1>
        </div>
      </div>
      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between md:p-10">
        <div className="md:flex-[60%] md:p-10">
          <div className="p-4 bg-white md:max-w-[800px]">
            <h1 className="text-2xl">Send Money Online from Germany</h1>
            <h2 className="mt-4">Your receiver's country and send amount</h2>
            <div className="mt-4">
              <label className="text-[14px] text-gray-400">Send to</label>
              <ReactFlagsSelect
                className="text-center w-full rounded-xl"
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
                fullWidth={true}
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

            {/* WUDB UPSELL */}
            {/* <div
              className={`${
                !bannerROPL ? "hidden" : "mt-4 border-[4px] border-red-500 p-4"
              }`}
            >
              <p className="text-[12px]">
                Up to 100 {currency} in bonuses for your receiver! Send more
                than 1000 {currency} to Western Union Digital Banking (WU+)
                accounts in Romania. Send money directly or for cash pickup for
                your receiver to redirect money to their Digital Banking account
                to earn the bonus*.{" "}
              </p>
              
            </div> */}

            {/* AMOUNT AND RECEIVER GETS */}
            <div>
              <div className="mt-6 flex  flex-row justify-between space-x-4">
                <div className="relative flex border-[1px] border-gray-400 p-4">
                  <p className="absolute text-[9px] top-1 left-1">
                    Send amount
                  </p>
                  <input
                    type="number"
                    className="bg-white w-[100px] md:w-[300px] outline-none placeholder:text-black"
                    placeholder="0"
                    onChange={(e) => setSendAmount(e.target.value)}
                  />
                  <p className="text-blue-500 text-[14px]">EUR</p>
                </div>
                <div className="relative flex border-[1px] border-gray-400 p-4">
                  <p className="absolute text-[9px] top-1 left-1">
                    Receiver gets
                  </p>
                  <input
                    type="text"
                    className="bg-white w-[100px] md:w-[300px] outline-none placeholder:text-black"
                    placeholder={Math.round(sendAmount * rates * 100) / 100}
                  />
                  <p className="text-blue-500 text-[14px]"> {currency}</p>
                </div>
              </div>
              <div className="mt-6 mb-6 alert alert-info shadow-lg rounded-none text-[13px] md:h-5">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-current flex-shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>Send up to 5,000.00 EUR</span>
                </div>
              </div>
              {/* CURRENCY CONVERSION  */}

              <div className="mt-6 mb-6 flex flex-col items-center justify-center">
                <p className="font-bold">
                  1.00 EUR = {rates} ({currency})
                </p>
                <p className="text-[11px]">
                  Exchange rate varies with delivery and payment method.
                  <span className="text-blue-500 font-semibold cursor-pointer">
                    {" "}
                    Details.
                  </span>
                </p>
              </div>
            </div>

            {/* INSTRUCTION */}
            <div className="px-4 py-2 bg-blue-800/80 rounded-sm text-white">
              <h1 className="text-center text-[14px]">
                Select below to see exchange rate and receive amount.
              </h1>
            </div>

            {/* HOW DOES YOUR RECEIVER WANT THE MONEY */}
            <div className="mt-10">
              <h1 className="text-xl mt-6 mb-6">
                How does your receiver want the money?
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 md:w-5/6 gap-y-4">
                <div className="border-2 border-black h-28 w-36 rounded-md flex flex-col items-center justify-center">
                  <BsCashCoin className="text-3xl" />
                  <p className="mt-2 text-[12px] font-bold">Cash</p>
                </div>
                <div className="border-2 border-black h-28 w-36 rounded-md flex flex-col items-center justify-center">
                  <BsBank className="text-3xl" />
                  <p className="mt-2 text-[12px] font-bold">Bank account</p>
                </div>
                <div className="border-2 border-black h-28 w-36 rounded-md flex flex-col items-center justify-center bg-slate-300">
                  <Image src="/wumin2.png" width="90" height="90" />
                  <p className="mt-2 text-[12px] font-bold text-center">
                    Western Union Ecosystem
                  </p>
                </div>
                <div className="border-2 border-black h-28 w-36 rounded-md flex flex-col items-center justify-center">
                  <Image src="/masterc2.png" width="90" height="90" />
                  <p className="mt-2 text-[12px] font-bold text-center">
                    Debit card
                  </p>
                </div>
              </div>
            </div>

            {/* HOW WOULD YOU LIKE TO PAY */}
            <div className="mt-10">
              <h1 className="text-xl mt-6 mb-6">How would you like to pay?</h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 md:w-5/6 gap-y-4">
                <div className="border-2 border-black h-28 w-36 rounded-md flex flex-col items-center justify-center bg-slate-300">
                  <BsCashCoin className="text-3xl" />
                  <p className="mt-2 text-[12px] font-bold">
                    Credit/Debit card
                  </p>
                </div>
                <div className="border-2 border-black h-28 w-36 rounded-md flex flex-col items-center justify-center">
                  <BsCashCoin className="text-3xl" />
                  <p className="mt-2 text-[12px] font-bold">
                    Instant bank transfer
                  </p>
                </div>
                <div className="border-2 border-black h-28 w-36 rounded-md flex flex-col items-center justify-center">
                  <BsBank className="text-3xl" />
                  <p className="mt-2 text-[12px] font-bold">Bank transfer</p>
                </div>

                <div className="bg-slate-50  h-28 w-36 rounded-md flex flex-col items-center justify-center">
                  <p className="hidden mt-2 text-[12px] font-bold text-center">
                    Debit card
                  </p>
                </div>
              </div>
            </div>
            <button className="mt-8 mb-8 w-full bg-blue-500 text-white py-4 text-lg">
              <Link href="/digitalbanksend">Continue</Link>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE --------- SUMMARY */}
        <div className="flex-[40%] p-2 md:p-10">
          {/* CURRENT SUMMARY */}
          <div className="bg-blue-100 p-4 max-w-[400px]">
            <h1 className="text-xl">Summary</h1>
            <div className="mt-4">
              <h1 className="text-[12px]">Exchange Rate</h1>
              <hr className="h-[2px] bg-gray-500" />
              <div className="flex justify-end">
                <p>
                  1.00 EUR = {rates} {currency}
                </p>
              </div>
            </div>
            <hr className="mt-8 h-[2px] bg-gray-500" />
            <div className="flex items-center justify-between">
              <h1 className="text-[12px]">Transfer Amount</h1>
              <p>{sendAmount || "0"} EUR</p>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-[12px]">Transfer fee</h1>
              <p> 0.00 EUR</p>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-[12px]">Transfer total</h1>
              <p> {sendAmount || "0"} EUR</p>
            </div>
            <hr className="mt-8 h-[2px] bg-gray-500" />
            <div className="flex items-center justify-between">
              <h1 className="text-[12px]">Receiver gets:</h1>
              <p>
                {Math.round(sendAmount * rates * 100) / 100} {currency}
              </p>
            </div>
            {bannerROPL && (
              <div className="mt-2 mb-2 bg-yellow-400 p-1 flex items-center justify-between">
                <h1 className="text-[12px] ">Ecosystem Bonus</h1>
                <p className=""> 100 {currency}</p>
              </div>
            )}

            <div className=" p-1 flex items-center justify-between">
              <h1 className="text-[12px] font-bold">Total Receiver gets:</h1>
              <p className="font-bold">
                {Math.round(sendAmount * rates * 100) / 100 + 100} {currency}
              </p>
            </div>

            <hr className="mt-10 h-[2px] bg-gray-500" />
            <div className="flex items-center justify-between">
              <h1 className="text-[12px]">Delivery time:</h1>
              <p>In Minutes</p>
            </div>
          </div>

          {/* SPACE FOR UPSELLLLLLLLLL ???  */}
          <div className="border-0 border-red-600 w-fit min-w-[400px]">
            {/* <div className="mt-4 mb-4 alert alert-warning shadow-lg max-w-[400px]">
              <div>
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
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <span>Space for upsell</span>
              </div>
            </div> */}

            {/* UPSELLLLLLLLLL ???  */}

            {/* <div
              className={`${!bannerROPL ? "hidden" : "mt-8 p-4 max-w-[400px]"}`}
            >
              <div className="">
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img src="/favicon.png" />
                    </div>
                  </div>
                  <div className="chat-bubble bg-white text-black text-xl">
                    Sending to <span className="font-bold">{name}?</span>
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img src="/favicon.png" />
                    </div>
                  </div>
                  <div className="chat-bubble bg-white text-black text-xl">
                    Reward your receiver with 100 {currency} more by sending
                    directly to{" "}
                    <span className="font-bold">
                      Western Union Digital Bank account.
                    </span>
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img src="/favicon.png" />
                    </div>
                  </div>
                  <div className="chat-bubble bg-white text-black text-xl">
                    Don't forget to provide your{" "}
                    <span className="font-bold">receiver's mobile number!</span>
                  </div>
                </div>
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img src="/favicon.png" />
                    </div>
                  </div>
                  <div className="chat-bubble bg-white text-black text-xl">
                    We will reward him <span className="font-bold">100 </span>
                    {currency} when redirecting transactions to Western Union
                    Digital Bank Account in {name}.
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      Legal Disclaimers
    </div>
  );
};

export default SendMoney;
