import React from "react";

const SummaryBox = () => {
  return (
    <div className="flex-[40%] p-2 md:p-10">
      {/* CURRENT SUMMARY */}
      <div className="bg-blue-100 p-4 max-w-[400px]">
        <h1 className="text-xl">Summary</h1>
        <div className="mt-4">
          <h1 className="text-[12px]">Exchange Rate</h1>
          <hr className="h-[2px] bg-gray-500" />
          <div className="flex justify-end">
            <p>1.00 EUR = 4.9479 RON</p>
          </div>
        </div>
        <hr className="mt-8 h-[2px] bg-gray-500" />
        <div className="flex items-center justify-between">
          <h1 className="text-[12px]">Transfer Amount</h1>
          <p>210 EUR</p>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-[12px]">Transfer fee</h1>
          <p> +0.00 EUR</p>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-[12px]">Transfer total</h1>
          <p> 210 EUR</p>
        </div>

        <div className="flex items-center justify-between">
          <h1 className="text-[12px]">Receiver gets:</h1>
          <p>1039.06 RON</p>
        </div>

        <div className="flex items-center justify-between bg-yellow-500 p-1">
          <h1 className="text-[12px]">Ecosystem bonus:</h1>
          <p>100 RON</p>
        </div>

        <div className="mt-4 flex items-center justify-between font-bold">
          <h1 className="text-[12px]">Total receiver gets:</h1>
          <p>1139.06 RON</p>
        </div>

        <hr className="mt-10 h-[2px] bg-gray-500" />
        <div className="flex items-center justify-between">
          <h1 className="text-[12px]">Delivery time:</h1>
          <p>In Minutes</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryBox;
