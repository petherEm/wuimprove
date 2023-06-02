import React from "react";
import Image from "next/image";
import { AiFillCheckCircle } from "react-icons/ai";

const DBupsell = () => {
  return (
    <div className="bg-white">
      <div className="bg-white flex flex-col md:flex-row justify-between p-4 md:p-14">
        {/* LEFT */}
        <div className="flex-[50%] flex items-end justify-center">
          <Image src="/WUDB_card.webp" width={450} height={400} />
        </div>

        {/* RIGHT */}
        <div className="flex-[50%] text-black">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Money transfers and digital banking in one app
          </h1>
          <p className="text-xl mt-10">
            Update your experience with the Western Union Digital Banking app
            and enjoy international money transfers and digital banking all in
            one place.
          </p>

          <div className="mt-10 flex flex-col space-y-6">
            {/* Item-1 */}
            <div className="flex items-center space-x-4">
              <div className="w-8">
                <AiFillCheckCircle className="text-3xl text-blue-600" />
              </div>

              <p className="text-md md:text-xl">
                Send money internationally to more than 200 <br />
                countries and territories.
              </p>
            </div>

            {/* Item-1 */}
            <div className="flex items-center space-x-4">
              <div className="w-8">
                <AiFillCheckCircle className="text-3xl text-blue-600" />
              </div>
              <p className="text-md md:text-xl">
                Send money instantly and fee-free* to Western Union Digital
                Banking users.
              </p>
            </div>

            {/* Item-1 */}
            <div className="flex items-center space-x-4">
              <div className="w-8">
                <AiFillCheckCircle className="text-3xl text-blue-600" />
              </div>
              <p className="text-md md:text-xl">
                Get up to 6% interest** on your savings. Limited time offer
                valid until 31.05.2023.
              </p>
            </div>

            {/* Item-1 */}
            <div className="flex items-center space-x-4">
              <div className="w-8">
                <AiFillCheckCircle className="text-3xl text-blue-600" />
              </div>
              <p className="text-md md:text-xl">
                Bank in multiple currencies**.
              </p>
            </div>

            {/* Item-1 */}
            <div className="flex items-center space-x-4">
              <div className="w-8">
                <AiFillCheckCircle className="text-3xl text-blue-600" />
              </div>
              <p className="text-md md:text-xl">
                Receive a free Visa Platinum debit card*.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BANNER */}

      <div className="flex justify-center items-center mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between bg-slate-100 w-full text-center md:w-[80%] px-4 md:px-12 py-8 mb-24 rounded-lg">
          <h1 className="text-black">
            Download the Digital Banking app and take advantage of all the
            perks!
          </h1>
          <button className="mt-4 bg-white hover:bg-slate-400 border-4 border-black px-8 py-4 text-xl rounded-full text-black">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default DBupsell;
