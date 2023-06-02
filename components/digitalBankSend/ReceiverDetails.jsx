import React from "react";

const ReceiverDetails = () => {
  return (
    <div className="flex-[60%] p-2 md:p-10">
      <div>
        <h1 className="text-2xl mb-4">Provide receiver's information</h1>
        <p className="text-[14px]">
          We will notify your receiver about this transfer and help them access
          their funds in Romania.
          <br />
        </p>
      </div>

      {/* ------------------> FORM <------------------ */}

      <form className="mt-8 p-2 md:p-10 bg-slate-50 max-w-[700px] flex flex-col justify-center">
        <div>
          <div className="flex justify-start space-x-4 border-[4px] border-red-500">
            <input
              type="text"
              className="bg-transparent border-b-[1px] border-gray-500 outline-none  placeholder:text-gray-800 md:w-[400px]"
              placeholder="Receiver's first name"
            />
            <input
              type="text"
              className="bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 w-full"
              placeholder="Receiver's last name"
            />
          </div>
          {/* <div className="mt-8">
            <input
              type="text"
              className="bg-transparent outline-none border-[4px] border-red-500 placeholder:text-gray-800 w-full"
              placeholder="Receiver's last name"
            />
          </div> */}
          <div className="mt-6 font-semibold">
            <h1 className="text-xl">Preferred receiver notification:</h1>
          </div>
          <div className="mt-8 flex justify-start space-x-4">
            <input
              type="text"
              className="bg-transparent outline-none border-[4px] border-red-500 placeholder:text-gray-800 w-full md:w-[400px]"
              placeholder="Email address"
            />
          </div>
          <div className="mt-6 mb-6 text-center">
            <p>OR</p>
          </div>
          <div className="mt-8 flex justify-start space-x-4">
            <input
              type="text"
              className="bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 w-fit"
              placeholder="Code (40 RO)"
            />
            <input
              type="text"
              className="p-1 bg-transparent outline-none border-[4px] border-red-500 placeholder:text-gray-800 w-[400px]"
              placeholder="Mobile number"
            />
          </div>

          {/* <div className="mt-8 flex flex-col gap-y-6">
            <input
              type="text"
              className="bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 w-[400px]"
              placeholder="Purpose of transaction"
            />
            <input
              type="text"
              className="bg-transparent outline-none border-b-[1px] border-gray-500 placeholder:text-gray-800 w-[400px]"
              placeholder="Source of funds"
            />
          </div> */}
        </div>

        {/* CTA */}
        <button className="mt-8 mb-8 mx-auto w-full md:w-[600px] bg-blue-500 text-white py-4 text-lg">
          Continue
        </button>
      </form>
    </div>
  );
};

export default ReceiverDetails;
