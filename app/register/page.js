import React from "react";

const Register = () => {
  return (
    <div className="bg-gray-300 text-black h-[1300px] ">
      {/* YELLOW UPSELL BANNER */}
      
      <div className="bg-[#fbd721] h-24 flex items-center justify-center p-2">
        <div className="flex flex-col">
          <h1 className="text-center text-lg md:text-xl">
            Don't miss out: <span className="font-bold">0€ transfer fee</span>{" "}
            on your first online transaction.
          </h1>
          <p className="text-[10px]">FX gains apply.</p>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex flex-col justify-center items-center md:p-10">
        <div className="mt-20 bg-slate-50 md:w-[700px] h-[500px]">
          <h1 className="mt-20 text-2xl font-bold tracking-wide text-center">
            Register for free
          </h1>
          <p className="text-center">
            Please enter your name exactly as it appears on your official
            identification document.
          </p>
          <form className="mt-8 p-2 md:p-10">
            <div className="flex justify-start space-x-4">
              <input
                type="text"
                className="bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 md:w-[400px]"
                placeholder="First Name"
              />
              <input
                type="text"
                className="bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 md:w-full"
                placeholder="Middle Name (optional)"
              />
            </div>
            <div className="mt-8">
              <input
                type="text"
                className="bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 w-full"
                placeholder="Last Name"
              />
            </div>
            <div className="mt-8 flex justify-start space-x-4">
              <input
                type="text"
                className="bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 md:w-[400px]"
                placeholder="Your email address"
              />
              <input
                type="text"
                className="bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 w-full"
                placeholder="Create your password"
              />
            </div>
          </form>
        </div>

        {/* ACKNOWLEDGES */}
        <div className="mt-20 mb-10 md:w-[700px] flex flex-col gap-y-4">
          <p className="text-[13px]">
            Keep me up to date with Western Union’s latest services and other
            special offers. Communications may be sent by email. I can edit
            these settings anytime in my profile.
          </p>
          <p className="text-[13px]">
            Share my information. I want to see relevant ads and the latest
            offers from Western Union. I can edit this setting anytime in my
            profile.
          </p>
          <p className="text-[13px]">
            I acknowledge I have read the Terms & Conditions and Online Privacy
            Policy.
          </p>
        </div>

        {/* CTA */}
        <button className="mt-8 mb-8 w-[300px] md:w-[700px] bg-blue-500 text-white py-4 text-lg">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Register;
