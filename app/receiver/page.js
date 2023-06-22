import React from "react";
import { AiOutlineSend } from "react-icons/ai";

const Receiver = () => {
  return (
    <div className="bg-gray-300 text-black">
      {/* YELLOW UPSELL BANNER */}
      <div className="bg-[#fbd721] border-0 border-red-500 h-24 flex items-center justify-center">
        <div className="flex flex-col ">
          <h1 className="text-center text-lg md:text-[18px]">
            Sending to <span className="font-bold">Romania? </span>Send directly
            to Western Union Ecosystem and reward your receiver{" "}
            <span className="font-bold">
              now with additional 100 RON bonus.
            </span>
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between p-2 md:p-10">
        {/* LEFT */}
        <div className="flex-[60%] p-2 md:p-10">
          <div>
            <h1 className="text-2xl mb-4">Receiver's Information</h1>
            <p className="text-[14px]">
              After your money has been picked up, it can't be refunded.
            </p>
            <p className="text-[14px]">
              Your receiver's identity will be verified at the WU location.
            </p>
            <ul className="indent-6">
              <li className="text-[14px]">
                (1) Enter your receiver's name exactly as it appears on their ID
              </li>
              <li className="text-[14px]">
                (2) You can only make minor changes to the receiver’s name on a
                money transfer as long as the money hasn’t yet been picked up.
              </li>
            </ul>
          </div>

          {/* ------------------> FORM <------------------ */}

          <form className="mt-8 p-2 md:p-10 bg-slate-50 md:max-w-[700px] flex flex-col justify-center">
            <div>
              <div className="flex flex-col md:flex-row justify-start space-y-4 md:space-y-0 md:space-x-4">
                <input
                  type="text"
                  className="bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 md:w-[400px]"
                  placeholder="Receiver's first name"
                />
                <input
                  type="text"
                  className="bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 w-full"
                  placeholder="Middle name (optional)"
                />
              </div>
              <div className="mt-8">
                <input
                  type="text"
                  className="bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 w-full"
                  placeholder="Receiver's last name"
                />
              </div>
              <div className="mt-8 flex justify-start space-x-4">
                <input
                  type="text"
                  className="bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 md:w-[400px]"
                  placeholder="Email address (optional)"
                />
              </div>
              <div className="mt-8 flex flex-col md:flex-row justify-start space-y-4 md:space-y-0 md:space-x-4">
                <input
                  type="text"
                  className="bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 md:w-[400px]"
                  placeholder="Country Code (40 RO)"
                />
                <div className="relative">
                  <input
                    type="text"
                    className="p-1 bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 md:w-[400px]"
                    placeholder="Phone number (optional)"
                  />
                  {/* Pointer */}
                  <div className="absolute -top-1 right-1 h-5 w-5 rounded-full bg-red-600 animate-pulse" />
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-y-6">
                <input
                  type="text"
                  className="bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 md:w-[400px]"
                  placeholder="Purpose of transaction"
                />
                <input
                  type="text"
                  className="bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 md:w-[400px]"
                  placeholder="Source of funds"
                />
              </div>
            </div>

            {/* CTA */}
            <button className="mt-8 mb-8 mx-auto w-full md:w-[600px] bg-blue-500 text-white py-4 text-lg">
              Continue
            </button>
          </form>
        </div>

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
                <p>1.00 EUR = 4.6285 RON</p>
              </div>
            </div>
            <hr className="mt-8 h-[2px] bg-gray-500" />
            <div className="flex items-center justify-between">
              <h1 className="text-[12px]">Transfer Amount</h1>
              <p>210 EUR</p>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-[12px]">Transfer fee</h1>
              <p> +2.90 EUR</p>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-[12px]">Transfer total</h1>
              <p> 212.90 EUR</p>
            </div>

            <div className="flex items-center justify-between">
              <h1 className="text-[12px]">Total Receiver gets:</h1>
              <p>971.98 RON</p>
            </div>

            <hr className="mt-10 h-[2px] bg-gray-500" />
            <div className="flex items-center justify-between">
              <h1 className="text-[12px]">Delivery time:</h1>
              <p>In Minutes</p>
            </div>
          </div>

          {/* SPACE FOR UPSELLLLLLLLLL ???  */}
          <div className="relative hidden md:flex w-fit">
            <label htmlFor="my-modal-6" className="">
              {/* Pointer */}
              <div className="absolute top-8 -right-1 h-5 w-5 rounded-full bg-red-600 animate-pulse cursor-pointer" />
            </label>
            {/* UPSELLLLLLLLLL ???  */}
            <div className="mt-8 p-4 max-w-[400px]">
              <img src="/thankyou.png" width="400px" height="400px" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden bg-black h-[1500px] md:flex justify-center">
        <div className="p-10">
          <div>
            <h1 className="text-white text-center mt-2 mb-4">
              Option A (PREVIOUS)
            </h1>
            <div className="mockup-phone border-primary">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-3">
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img src="favicon.png" />
                      </div>
                    </div>
                    <div className="chat-bubble text-xl">
                      Money transfer MTCN 1234567890 is ready for pickup. You
                      can redirect
                      <br /> money to you Western Union Digital Bank Account.{" "}
                      <br />
                      <span className="font-bold text-white">
                        https://go.wu.com/WUPlus_en
                      </span>
                    </div>
                  </div>
                  {/* <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src="favicon.png" />
                </div>
              </div>
              <div className="chat-bubble">
                .......
              </div>
            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-10">
          <div>
            <h1 className="text-white text-center mt-2 mb-4">
              Option B (below 1000 RON)
            </h1>
            <div className="mockup-phone border-primary">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-3">
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img src="favicon.png" />
                      </div>
                    </div>
                    <div className="chat-bubble text-xl">
                      Your money transfer MTCN 1234567890 is ready for pickup.
                      <br /> Redirect it to the Western Union Digital Bank
                      account
                      <br />
                      <span className="font-bold text-white">
                        https://go.wu.com/WUPlus_en
                      </span>
                      <br />
                      to enjoy benefits of our digital banking.
                    </div>
                  </div>
                  {/* <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src="favicon.png" />
                </div>
              </div>
              <div className="chat-bubble">
                .......
              </div>
            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-10">
          <div>
            <h1 className="text-white text-center mt-2 mb-4">
              Option C (CURRENT)
            </h1>
            <div className="mockup-phone border-secondary">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-3">
                  <div className="chat chat-start">
                    <div className="chat-image avatar">
                      <div className="w-10 rounded-full">
                        <img src="favicon.png" />
                      </div>
                    </div>
                    <div className="chat-bubble text-xl">
                      Your money transfer MTCN 1234567890 is ready for pickup.
                      <br /> Redirect it to the Western Union Digital Bank
                      account
                      <br />
                      <span className="font-bold text-white">
                        https://go.wu.com/WUPlus_en
                      </span>
                      <br />
                      and get a 100 RON bonus.
                    </div>
                  </div>
                  {/* <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img src="favicon.png" />
                </div>
              </div>
              <div className="chat-bubble">
                .......
              </div>
            </div> */}
                </div>
              </div>
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

export default Receiver;
