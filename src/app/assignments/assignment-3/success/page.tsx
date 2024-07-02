"use client";

import SuccessIcon from "@/assets/assignment-3/icon-success.svg";

export default function Success({
  email,
  handleSuccess,
}: {
  email: string;
  handleSuccess: (val: boolean) => void;
}) {
  return (
    <>
      <div className="h-screen w-full bg-[#37384E] flex items-center justify-center">
        <div className="bg-white rounded-3xl p-12 flex gap-4 justify-between shadow-2xl max-w-[500px] flex-col space-y-4">
          <div>
            <img src={SuccessIcon?.src} alt="" />
          </div>
          <h1 className="text-[3rem] font-bold text-[#222743] leading-tight">
            Thanks for subscribing!
          </h1>
          <p>
            A confirmation email has been sent to <strong> {email} </strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
          <button
            className=" text-white px-6 py-3 text-center w-full rounded-md font-medium bg-[#222743] hover:bg-gradient-to-r from-[#FE577A] to-[#FF693E] hover:shadow-xl"
            onClick={() => handleSuccess(false)}
          >
            Dismiss message
          </button>
        </div>
      </div>
    </>
  );
}
