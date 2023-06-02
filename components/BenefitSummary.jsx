import React from "react";

const BenefitSummary = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-5xl font-semibold">
        Digital banking designed for your needs
      </h1>

      <div className="mt-32 flex flex-col md:flex-row justify-between gap-10 md:space-x-8 text-white">
        {/* RIGHT */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Standard</h1>
          <hr className="mt-4 h-1 w-full bg-yellow-400" />
          <div>
            {/* OFFER 1 */}
            <div className="mt-2 flex h-12 items-center bg-black p-4">
              <h1 className="text-md md:text-lg font-semibold">
                NEW! Refer a friend and you will earn 20 EUR
              </h1>
            </div>
            {/* OFFER 2 */}
            <div className="mt-2 flex h-12 items-center bg-gray-800/60 p-4">
              <h1 className="text-md md:text-lg font-semibold">
                Free current bank account
              </h1>
            </div>
            {/* OFFER 3 */}
            <div className="mt-2 flex h-12 items-center bg-black p-4">
              <h1 className="text-md md:text-lg font-semibold">
                Free &quot;My Saved Money&quot; account
              </h1>
            </div>
            {/* OFFER 4 */}
            <div className="mt-2 flex h-12 items-center bg-gray-800/60 p-4">
              <h1 className="text-md md:text-lg font-semibold">
                Send and receive money directly from your account
              </h1>
            </div>
            {/* OFFER 5 */}
            <div className="mt-2 flex h-12 items-center bg-black p-4">
              <h1 className="text-md md:text-lg font-semibold">
                Fee-free transfer to other WU Digital Bank account
              </h1>
            </div>
            {/* OFFER 5 */}
            <div className="mt-2 flex h-12 items-center bg-gray-800/60 p-4">
              <h1 className="text-md md:text-lg font-semibold">
                Instantly send money to other WU Digital Bank account
              </h1>
            </div>
            {/* OFFER 6 */}
            <div className="mt-2 flex h-12 items-center bg-black p-4">
              <h1 className="text-md md:text-lg font-semibold">
                Free VISA Platinum debit card
              </h1>
            </div>
            {/* OFFER 7 */}
            <div className="mt-2 flex h-12 items-center bg-gray-800/60 p-4">
              <h1 className="text-md md:text-lg font-semibold">
                1.5% interest on &quot;My Saved Money&quot; account
              </h1>
            </div>
            {/* OFFER 8 */}
            <div className="mt-2 flex h-12 items-center bg-black p-4">
              <h1 className="text-md md:text-lg font-semibold">
                Access to VISA Platinum services
              </h1>
            </div>
            {/* OFFER 9 */}
            <div className="mt-2 flex h-12 items-center bg-gray-800/60 p-4">
              <h1 className="text-md md:text-lg font-semibold">
                Free domestic bank transfers
              </h1>
            </div>
            {/* OFFER 10 */}
            <div className="mt-2 flex h-12 items-center bg-black p-4">
              <h1 className="text-md md:text-lg font-semibold">
                Free automatic payments (direct debit)
              </h1>
            </div>
            {/* OFFER 11 */}
            <div className="mt-2 flex h-12 items-center bg-gray-800/60 p-4">
              <h1 className="text-md md:text-lg font-semibold">
                Access to WU Shop
              </h1>
            </div>
            {/* OFFER 12 */}
            <div className="mt-2 flex h-12 items-center bg-black p-4">
              <h1 className="text-md md:text-lg font-semibold">
                Earn My WU points for every money transfer
              </h1>
            </div>
            {/* OFFER 13 */}
            <div className="mt-2 flex h-12 items-center  bg-gray-800/60 p-4">
              <h1 className="text-md md:text-lg font-semibold">
                24/7 customer support for lost/stolen card
              </h1>
            </div>
            {/* OFFER 14 */}
            <div className="mt-2 flex h-12 items-center bg-black p-4">
              <h1 className="text-md md:text-lg font-semibold">
                1 free ATM withdrawal per month
              </h1>
            </div>
          </div>
        </div>

        {/* LEFT */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            Premium (3,99 EUR a month)
          </h1>
          <hr className="mt-4 h-1 w-full bg-yellow-400" />
          <div>
            {/* OFFER 1 */}
            <div className="mt-2 flex h-12 items-center bg-black p-4">
              <h1 className="text-md md:text-lg font-semibold">
                + Up to 5 additional currency accounts
              </h1>
            </div>
            {/* OFFER 2 */}
            <div className="mt-2 flex h-12 items-center bg-gray-800/60 p-4">
              <h1 className="text-md md:text-lg font-semibold">
                + Up to 4 additional goal accounts
              </h1>
            </div>
            {/* OFFER 3 */}
            <div className="mt-2 flex h-12 items-center bg-black p-4">
              <h1 className="text-md md:text-lg font-semibold">
                +3% interest on &quot;My Saved Money&quot; account
              </h1>
            </div>
            {/* OFFER 4 */}
            <div className="mt-2 flex h-12 items-center bg-gray-800/60 p-4">
              <h1 className="text-md md:text-lg font-semibold">
                + Free VISA Platinum debit card renewal once a year
              </h1>
            </div>
            {/* OFFER 5 */}
            <div className="mt-2 flex h-12 items-center bg-black p-4">
              <h1 className="text-md md:text-lg font-semibold">
                + Preferential exchange rates on card transactions
              </h1>
            </div>
            {/* OFFER 5 */}
            <div className="mt-2 flex h-12 items-center bg-gray-800/60 p-4">
              <h1 className="text-md md:text-lg font-semibold">
                + Preferential fee for debit and credit card top-ups
              </h1>
            </div>
            {/* OFFER 6 */}
            <div className="mt-2 flex h-12 items-center bg-black p-4">
              <h1 className="text-md md:text-lg font-semibold">
                2 free ATM withdrawals per month
              </h1>
            </div>
            {/* OFFER 7 */}
            <div className="mt-2 flex h-12 items-center bg-gray-800/60 p-4">
              <h1 className="text-md md:text-lg font-semibold">
                1.5% interest on &quot;My Saved Money&quot; account
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitSummary;
