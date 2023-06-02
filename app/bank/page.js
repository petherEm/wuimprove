import Image from "next/image";

import BenefitSummary from "@/components/BenefitSummary";
import {
  BsFillPeopleFill,
  BsCashCoin,
  BsFillGiftFill,
  BsShieldFillCheck,
} from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa";

export default function Bank() {
  return (
    <div className="w-full bg-black">
      <div className="bg-black mx-auto max-w-7xl">
        {/* HERO SECTION */}

        <div className="mt-[50px] flex h-auto min-h-[300px] flex-col items-center justify-between p-2 text-white md:mt-[100px] xl:flex-row">
          <div className="flex-1">
            <div>
              <h1 className="text-4xl font-extrabold italic text-white md:text-6xl xl:text-6xl">
                Western Union Digital Banking{" "}
                <span className="text-yellow-400">
                  Send money to more than 200 countries and territories
                </span>
              </h1>
            </div>
            <div>
              <h2 className="mt-10 text-xl font-semibold text-white md:text-2xl xl:text-2xl tracking-wide">
                Download the{" "}
                <span className="text-yellow-400">
                  Western Union Digital Banking app
                </span>{" "}
                and enjoy fee-free money transfers between users, a free bank
                account, savings account, and other perks.
              </h2>
            </div>
            <div className="mt-8 flex justify-center space-x-8 md:justify-start">
              <button className="rounded-full bg-yellow-400 px-12 py-4 text-xl font-semibold text-black hover:bg-yellow-600 tracking-wide">
                Download now
              </button>
            </div>
          </div>
          <div className="">
            <Image src="/wubank_hero.webp" width="700" height="800" />
          </div>
        </div>

        {/* FEATURES SECTION */}
        <div className="mt-[50px] flex h-auto min-h-[300px] flex-col items-center justify-center p-2 text-white md:mt-[100px]">
          {/* CENTRAL BANNER */}
          <div className="flex w-[80%] flex-col items-center justify-center gap-8 text-center">
            <div className="bg-yellow-400 w-full flex items-center justify-between px-6 py-8 text-black">
              <div>
                <BsFillPeopleFill className="text-6xl" />
              </div>
              <div className="flex flex-col text-left">
                <h1 className="font-bold">6% interest saving account!</h1>
                <p>
                  Open a digital bank account and receive up to 6% interest on
                  your savings
                </p>
              </div>
              <button className="w-fit rounded-full bg-black px-12 py-4 text-xl font-semibold text-yellow-400 hover:text-yellow-600">
                Download now
              </button>
            </div>
          </div>
          {/* VIDEO BANNER */}
          <div className="mt-10 flex w-[70%] items-center justify-around gap-8 text-left">
            <div className="flex-[50%]">
              <Image src="/video_placeholder.jpg" width={400} height={200} />
            </div>
            <div className="flex-[50%]">
              <h1 className="text-4xl tracking-wide">
                <span className="text-yellow-400">
                  Western Union Digital Banking
                </span>{" "}
                is going to transform the way you send, save and spend money.
              </h1>
            </div>
          </div>

          {/* KEY BENEFITS BANNER */}
          <div className="mt-20 flex w-[90%] items-center justify-around gap-8 text-left">
            <div className="flex-[40%]">
              <Image src="/phone_app.webp" width={400} height={200} />
            </div>
            <div className="flex-[60%] flex flex-col gap-y-6">
              <div className="flex space-x-10 items-center">
                <div className="w-8">
                  <BsCashCoin className="text-5xl text-yellow-400" />
                </div>
                <h1 className="text-xl tracking-wide">
                  Banking in multiple currencies and earn interest rate on your
                  savings account.
                </h1>
              </div>
              <div className="flex space-x-10 items-center">
                <div className="w-8">
                  <BsFillGiftFill className="text-5xl text-yellow-400" />
                </div>

                <h1 className="text-xl tracking-wide">
                  Instant money transfers to other Western Union Digital Banking
                  account holders for 0 € transfer fee.
                </h1>
              </div>
              <div className="flex space-x-10 items-center">
                <div className="w-8">
                  <FaCcVisa className="text-5xl text-yellow-400" />
                </div>
                <h1 className="text-xl tracking-wide">
                  Free Visa Platinum debit card
                </h1>
              </div>
              <div className="flex space-x-10 items-center">
                <div className="w-8">
                  <BsShieldFillCheck className="text-5xl text-yellow-400" />
                </div>
                <h1 className="text-xl tracking-wide">
                  Up to 100 000 € deposit is secured by the Austrian Deposit
                  Protection Scheme
                </h1>
              </div>
            </div>
          </div>

          {/* BENEFIT SUMMARY SECTION */}

          <BenefitSummary />
        </div>
      </div>
    </div>
  );
}
