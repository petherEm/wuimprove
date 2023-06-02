import React from "react";
import ReceiverDetails from "@/components/digitalBankSend/ReceiverDetails";
import SummaryBox from "@/components/digitalBankSend/SummaryBox";
import AlreadyBankUser from "@/components/digitalBankSend/AlreadyBankUser";
import NoBankUser from "@/components/digitalBankSend/NoBankUser";
import NoBankUserReceipt from "@/components/digitalBankSend/NoBankUserReceipt";
import AlreadyBankUserReceipt from "@/components/digitalBankSend/AlreadyBankUserReceipt";

import Welcome from "@/components/appFlow/Welcome";
import Welcome_verified from "@/components/appFlow/Welcome_verified";
import RegistrationSplit from "@/components/appFlow/RegistrationSplit";
import TrackTransfer_old from "@/components/appFlow/TrackTransfer_old";
import RegistrationScreen from "@/components/appFlow/RegistrationScreen";
import RegistrationScreen2 from "@/components/appFlow/RegistrationScreen2";
import RegistrationScreen3 from "@/components/appFlow/RegistrationScreen3";

const AppFlow = () => {
  return (
    <div className="bg-gray-300 text-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between p-2 md:p-10">
        {/* LEFT */}
        <ReceiverDetails />

        {/* RIGHT */}
        {/* RIGHT SIDE --------- SUMMARY */}
        <SummaryBox />
      </div>

      <div className="bg-black h-[8500px]">
        <div className="md:p-10">
          <h1 className="text-white text-4xl">
            1. App downloaded - new customer registration
          </h1>
          {/* SCREEN 1 */}
          <div className="mt-20 flex flex-col items-center">
            <div className="mockup-phone border-primary bg-black">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-5">
                  <div className="artboard__content bg-black overflow-scroll">
                    <div className="flex h-auto min-h-[300px] flex-col items-center justify-between p-2 text-white md:mt-[50px]">
                      <RegistrationSplit />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SCREEN 2 - Track a transfer */}
          <div className="mt-20 flex flex-col items-center ">
            <div className="mockup-phone border-primary bg-black">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-5 bg-black">
                  <div className="artboard__content bg-black overflow-scroll">
                    <div className="flex h-auto min-h-[300px] flex-col items-center justify-between p-2 text-white md:mt-[50px]">
                      {/* <TrackTransfer_old /> */}
                      <p>To decide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SCREEN 3 - Registration Screen */}
          <div className="mt-20 flex flex-col items-center ">
            <div className="mockup-phone border-primary bg-black">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-5 bg-black">
                  <div className="artboard__content bg-black overflow-scroll">
                    <div className="flex h-auto min-h-[300px] flex-col items-center justify-between p-2 text-white md:mt-[50px]">
                      <RegistrationScreen />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SCREEN 4 - Registration Screen */}
          <div className="mt-20 flex flex-col items-center ">
            <div className="mockup-phone border-primary bg-black">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard p-0 phone-5 bg-black">
                  <div className="artboard__content bg-black overflow-scroll">
                    <div className="flex h-auto min-h-[300px] max-h-[800px] flex-col items-center justify-between p-2 text-white md:mt-[50px]">
                      <RegistrationScreen2 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SCREEN 5 - Registration Screen */}
          <div className="mt-20 flex flex-col items-center ">
            <div className="mockup-phone border-primary bg-black">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-5 bg-black">
                  <div className="artboard__content bg-black overflow-scroll">
                    <div className="flex h-auto min-h-[300px] flex-col items-center justify-between p-2 text-white md:mt-[50px]">
                      <RegistrationScreen3 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SCREEN 6 - Welcome */}
          <div className="mt-20 flex flex-col items-center">
            <div className="mockup-phone border-primary bg-black">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo bg-black phone-5">
                  <div className="artboard__content bg-black overflow-scroll">
                    <div className="flex bg-black h-[1200px] min-h-[300px] flex-col items-center justify-between p-2 text-white md:mt-[50px]">
                      <Welcome_verified />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFlow;
