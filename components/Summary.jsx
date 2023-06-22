import React from "react";

import { usePayStore } from "@/store/PayStore";

const Summary = ({ rates, bannerROPL, currency }) => {
  const [
    fundsInAmount,
    setFundsInAmount,
    fundsIn,
    fundsOut,
    setFundsIn,
    setFundsOut,
    fee,
    setFee,
  ] = usePayStore((state) => [
    state.fundsInAmount,
    state.setFundsInAmount,
    state.fundsIn,
    state.fundsOut,
    state.setFundsIn,
    state.setFundsOut,
    state.fee,
    state.setFee,
  ]);

  return (
    <div>
      {/* RIGHT SIDE --------- SUMMARY */}
      <div className="bg-blue-100 p-4 max-w-[450px]">
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
          <p>{fundsInAmount || "0"} EUR</p>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-[12px]">Transfer fee</h1>
          <p> {fundsInAmount ? fee : "0"} EUR</p>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-[12px]">Transfer total</h1>
          <p>
            {" "}
            {(fundsInAmount ? Number(fundsInAmount) + Number(fee) : 0).toFixed(
              2
            )}{" "}
            EUR
          </p>
        </div>
        <hr className="mt-8 h-[2px] bg-gray-500" />
        <div className="flex items-center justify-between">
          <h1 className="text-[12px]">Receiver gets:</h1>
          <p>
            {(Math.round(fundsInAmount * rates * 100) / 100).toFixed(2)}{" "}
            {currency}
          </p>
        </div>
        {bannerROPL && (
          <div className="relative mt-2 mb-2 bg-yellow-400 p-1 flex items-center justify-between">
            {/* Pointer */}
            <div className="absolute -top-3 -right-1 h-5 w-5 rounded-full bg-red-600 animate-pulse" />
            <h1 className="text-[12px] ">Ecosystem Bonus</h1>
            <p className=""> 100 {currency}</p>
          </div>
        )}

        <div className=" p-1 flex items-center justify-between">
          <h1 className="text-[12px] font-bold">Total Receiver gets:</h1>
          <p className="font-bold">
            {(Math.round(fundsInAmount * rates * 100) / 100 + 100).toFixed(2)}{" "}
            {currency}
          </p>
        </div>

        <hr className="mt-10 h-[2px] bg-gray-500" />
        <div className="relative flex items-center justify-between">
          {/* Pointer */}
          <div className="absolute -top-3 -right-1 h-5 w-5 rounded-full bg-red-600 animate-pulse" />
          <h1 className="text-[12px]">Delivery time:</h1>
          <p>In Minutes</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
