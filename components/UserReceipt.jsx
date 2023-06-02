import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { HiMail } from "react-icons/hi";

const UserReceipt = () => {
  return (
    <div className="flex-[60%]">
      {/* LEFT */}
      <form className="mt-8 p-2 md:p-10 bg-slate-50 max-w-[700px] flex flex-col justify-center">
        {/* <h1 className="mb-3 p-3 bg-yellow-400 rounded-md">
          <span className="font-bold">Hey!</span> It seems Denisa is not yet a
          Western Union Digital Bank customer. Let's get her signed up and
          rewarded! <br />
          She can always pick up the money at a Western Union location if she
          prefers.
        </h1> */}
        <h1 className="text-xl font-bold mb-6">Receipt</h1>
        <div className="bg-white">
          {/* ROW 1 */}
          <div className="flex justify-start space-x-4">
            <div
              type="text"
              className="bg-transparent flex items-center space-x-4"
            >
              <AiOutlineCheckCircle className="text-4xl text-green-500" />
              <p className="text-xl">Your money is on its way</p>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="mt-6 flex justify-start space-x-4">
            <div type="text" className="bg-transparent flex flex-col">
              <p className="mt-4">
                This page is your transfer receipt. You can print it for your
                records. We will also email you a receipt to
                <span className="font-bold uppercase"> piotr@email.com</span>
              </p>
              <p className="mt-4 mb-4">
                You may want to print it for your records.
              </p>
              {/* WUDB UPSELL TO REDIRECT MTCN */}
              <div className="p-2 border-2 border-red-500">
                <h1 className="mt-2 mb-2 text-xl ">
                  Denisa has been notified on +40 77777777 that your 300 EUR is
                  available for pickup. She can now decide to access it in the
                  wallet or cash out at the nearest Western Union location.
                </h1>
              </div>

              {/* -----END----- WUDB UPSELL TO REDIRECT MTCN -----END----- */}
              <div className="p-2">
                <h1 className="mt-2 mb-2 text-xl ">
                  Cash pick up instructions:
                </h1>
                <p>
                  <span className="font-bold">Denisa</span> will need the
                  following at a WU agent location:
                </p>
                <ul className="mt-4 mb-4 indent-8">
                  <li>1. Government-issued photo ID</li>
                  <li>2. Tracking number (MTCN) 123 456 7890</li>
                </ul>
              </div>
              <div className="p-4 bg-yellow-500 flex items-center justify-around w-full text-center">
                <h1>
                  Tracking number (MTCN):{" "}
                  <span className="font-bold">123 456 7890</span>
                </h1>
                <HiMail className="text-4xl" />
              </div>
            </div>
          </div>

          {/* MyWU BOX */}
          <div className="mt-6 mb-6">
            {/* ROW 1 */}
            <div className="flex justify-start space-x-4">
              <div className="bg-transparent flex flex-col outline-none w-full">
                <p className="uppercase">My WU rewards</p>
                <hr className="h-[2px] bg-gray-500" />
                <div className="flex items-center space-x-3 justify-around text-[14px]">
                  <p>My WU #: 123 456 789</p>
                  <p>points earned: 5</p>
                  <p>Total points: 35</p>
                </div>
              </div>
            </div>

            {/* OTHER DETAILS */}
            <div className="mt-10 flex justify-start space-x-4">
              <div className="bg-transparent flex flex-col outline-none w-[400px]">
                <p className="uppercase">Purpose of transaction</p>
                <hr className="h-[2px] bg-gray-500" />
                <p>Gift</p>
              </div>
              <div className="bg-transparent flex flex-col outline-none w-[400px]">
                <p className="uppercase">Source of funds</p>
                <hr className="h-[2px] bg-gray-500" />
                <p>Savings</p>
              </div>
            </div>
            {/* ROW 2 */}
            <div className="mt-16 flex justify-start space-x-4">
              <div
                type="text"
                className="bg-transparent flex flex-col outline-none w-[400px]"
              >
                <p className="uppercase">Sending Details</p>
                <hr className="h-[2px] bg-gray-500" />
                <p>Piotr Maciejewski</p>
                <p className="text-[12px]">+48 8888888</p>
                <p>Credit/Debit card</p>
                <p className="text-[12px]">VISA ending in 8902</p>
              </div>
              <div
                type="text"
                className="bg-transparent flex flex-col outline-none w-[400px]"
              >
                <p className="uppercase">Receiving Details</p>
                <hr className="h-[2px] bg-gray-500" />
                <p>Denisa Mateescu</p>
                <p className="text-[12px]">+40 77777777</p>
                <p className="text-[12px]">denisa@westernunion.com</p>
                <p>Payout method</p>
                <p className="text-[12px]">pending</p>
              </div>
            </div>
          </div>

          {/* ROW 3 */}
          <div className="mt-6 flex justify-start space-x-4">
            <div
              type="text"
              className="bg-transparent flex flex-col outline-none w-[400px]"
            >
              <p className="uppercase">Payout location</p>
              <hr className="h-[2px] bg-gray-500" />
              <p>Romania</p>
            </div>
            <div
              type="text"
              className="bg-transparent flex flex-col outline-none w-[400px]"
            >
              <p className="uppercase">Summary</p>
              <hr className="h-[2px] bg-gray-500" />
              <div className="flex justify-between">
                <div>
                  <p>Transfer amount</p>

                  <p>Transfer fee</p>
                  <p className="font-bold">Total</p>
                  <p>Exchange rate:</p>
                  <p className="font-bold mt-2">Total to receiver:</p>
                </div>
                <div className="flex flex-col items-end">
                  <p>300 EUR</p>

                  <p>+0.00 EUR</p>
                  <p className="font-bold">300 EUR</p>
                  <p>1 EUR = 4.82220 RON</p>
                  <p className="font-bold mt-2">1482 RON</p>
                </div>
              </div>
            </div>
          </div>
          {/* INFO BOX */}
          <div className="text-[12px] mt-6 mb-6">
            <p>
              For all transfers, receiver may receive less due to foreign taxes.
            </p>
            <p>
              For inquiries and comments, please visit Contact us or write to:
            </p>
            <p className="font-bold mt-3">Contact Us</p>
            <p>By mail:</p>
            <p>Western Union Germany</p>
            <p>Balcikonio g.3</p>
            <p>LT-08247 Vilnius</p>
            <p>Lithuania</p>
          </div>
        </div>

        {/* CTA */}
        <button className="mt-8 mx-auto w-full md:w-[600px] bg-blue-500 text-white py-4 text-lg">
          Send money again?
        </button>
        <button className="mt-8 mb-8 mx-auto w-full md:w-[600px] bg-yellow-800 text-white py-4 text-lg">
          Transactions history
        </button>
        <button className="mb-8 mx-auto w-full md:w-[600px] bg-red-600 text-white py-4 text-lg">
          Cancel transaction
        </button>
      </form>
    </div>
  );
};

export default UserReceipt;
