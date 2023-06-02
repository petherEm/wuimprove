import React from "react";
import UserReceipt from "@/components/UserReceipt";
import { AiOutlineSend } from "react-icons/ai";

const Receipt = () => {
  return (
    <div className="bg-gray-300 text-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between p-2 md:p-10">
        {/* LEFT */}

        <UserReceipt />

        {/* RIGHT */}
        {/* RIGHT SIDE --------- SUMMARY */}
        <div className="flex-[40%] p-2 md:p-10">
          {/* CURRENT SUMMARY */}
          <div className="bg-blue-100 p-4 max-w-[400px]">
            <h1 className="text-xl">Summary</h1>
            <div className="mt-4">
              <h1 className="text-[12px]">Exchange Rate</h1>
              <hr className="h-[2px] bg-gray-500" />
              <div className="flex justify-end">
                <p>1.00 EUR = 4.9250 RON</p>
              </div>
            </div>
            <hr className="mt-8 h-[2px] bg-gray-500" />
            <div className="flex items-center justify-around">
              <h1 className="text-[12px]">Transfer Amount</h1>
              <p>300 EUR</p>
            </div>
            <div className="flex items-center justify-around">
              <h1 className="text-[12px]">Transfer fee</h1>
              <p> +0.00 EUR</p>
            </div>
            <div className="flex items-center justify-around">
              <h1 className="text-[12px]">Transfer total</h1>
              <p> 300 EUR</p>
            </div>

            <div className="flex items-center justify-between">
              <h1 className="text-[12px]">Total Receiver gets:</h1>
              <p>10000 RON</p>
            </div>

            <hr className="mt-10 h-[2px] bg-gray-500" />
            <div className="flex items-center justify-between">
              <h1 className="text-[12px]">Delivery time:</h1>
              <p>In Minutes</p>
            </div>
          </div>

          {/* SPACE FOR UPSELLLLLLLLLL ???  */}
          <div className="hidden md:flex border-4 border-red-600 w-fit">
            <label htmlFor="my-modal-6" className="btn">
              modal
            </label>
            {/* UPSELLLLLLLLLL ???  */}
            <div className="mt-8 p-4 max-w-[400px]">
              <img src="/thankyou.png" width="400px" height="400px" alt="" />
            </div>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box p-0 bg-[#F8DD2D]">
          <div className="modal-action p-0">
            <label
              htmlFor="my-modal-6"
              className="btn bg-transparent border-0 text-black"
            >
              X
            </label>
          </div>
          <img
            src="/receipt_banner_short.jpg"
            className="w-[80%] mx-auto bg-yellow-500"
            width="300px"
            height="300px"
            alt=""
          />

          <div className="px-6 py-4">
            <div className="collapse">
              <input type="checkbox" className="peer" />
              <button className="collapse-title bg-black p-4 text-[#F8DD2D] rounded-md font-bold cursor-pointer hover:bg-slate-800">
                Inform receiver
              </button>
              <div className="mt-4 collapse-content flex flex-col items-center">
                <div className="flex items-center space-x-2">
                  <input
                    className="bg-transparent border-2 border-black px-4 py-2 rounded-2xl placeholder:text-black outline-none"
                    type="text"
                    placeholder="+40 Mobile Number"
                  />
                  <AiOutlineSend className="text-3xl cursor-pointer hover:text-yellow-600" />
                </div>

                <p className="text-center">or</p>
                <div className="flex items-center space-x-2">
                  <input
                    className="bg-transparent border-2 border-black px-4 py-2 rounded-2xl placeholder:text-black outline-none"
                    type="text"
                    placeholder="Email address"
                  />
                  <AiOutlineSend className="text-3xl cursor-pointer hover:text-yellow-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
