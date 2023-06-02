import React from "react";
import ReceiverDetails from "@/components/digitalBankSend/ReceiverDetails";
import SummaryBox from "@/components/digitalBankSend/SummaryBox";
import AlreadyBankUser from "@/components/digitalBankSend/AlreadyBankUser";
import NoBankUser from "@/components/digitalBankSend/NoBankUser";
import NoBankUserReceipt from "@/components/digitalBankSend/NoBankUserReceipt";
import AlreadyBankUserReceipt from "@/components/digitalBankSend/AlreadyBankUserReceipt";

const DigitalBankFlow = () => {
  return (
    <div className="bg-gray-300 text-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between p-2 md:p-10">
        {/* LEFT */}
        <ReceiverDetails />

        {/* RIGHT */}
        {/* RIGHT SIDE --------- SUMMARY */}
        <SummaryBox />
      </div>

      <div className="bg-black h-[5500px]">
        <div className="p-2 md:p-10">
          <h1 className="text-white text-2xl md:text-4xl">
            Happy Path (Review - already WU Digital Bank user)
          </h1>
          <AlreadyBankUser />
        </div>
        <div className="p-2 md:p-10">
          <h1 className="text-white text-2xl md:text-4xl">
            Happy Path (Review - no Bank account yet)
          </h1>
          <NoBankUser />
        </div>
        <div className="p-2 md:p-10">
          <h1 className="text-white text-2xl md:text-4xl">
            Happy Path (Receipt - already WU Digital Bank user)
          </h1>
          <AlreadyBankUserReceipt />
        </div>
        <div className="p-2 md:p-10">
          <h1 className="text-white text-2xl md:text-4xl">
            Happy Path (Receipt - no Bank account yet)
          </h1>
          <NoBankUserReceipt />
        </div>
      </div>
    </div>
  );
};

export default DigitalBankFlow;
