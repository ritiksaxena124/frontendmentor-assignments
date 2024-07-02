"use client";

import Graphic from "@/assets/assignment-2/illustration-empty.svg";
import calculatorIcon from "@/assets/assignment-2/icon-calculator.svg";
import { useState } from "react";

export default function () {
  const [type, setType] = useState<string>("");
  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-[#E3F4FC] p-4 sm:p-8 md:p-16">
        {/* Card container */}
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden max-w-screen-xl bg-white">
          {/* left section */}
          <div className="lg:w-1/2 p-12 space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-semibold text-[#133040]">
                Mortgage Calculator
              </h1>
              <button className="underline text-lg text-[#627D90]">
                Clear All
              </button>
            </div>
            <div className="w-full space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium text-[#627D90]">
                  Mortgage Amount
                </label>
                <div className="flex items-center outline outline-1 outline-zinc-400 focus:outline-zinc-600 rounded-md w-full">
                  <span className="bg-[#E4F3FE] px-4 py-4 text-slate-600 leading-none font-medium">
                    $
                  </span>
                  <input
                    type="number"
                    name="amount"
                    className="focus:outline-none px-4 py-3 text-base w-full"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-lg font-medium text-[#627D90]">
                    Mortgage Term
                  </label>
                  <div className="flex items-center outline outline-1 outline-zinc-400 focus:outline-zinc-600 rounded-md w-full">
                    <input
                      type="number"
                      name="amount"
                      className="focus:outline-none px-4 py-3 text-base w-full"
                    />
                    <span className="bg-[#E4F3FE] px-4 py-4 text-slate-600 leading-none font-medium">
                      years
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-lg font-medium text-[#627D90]">
                    Interest Rate
                  </label>
                  <div className="flex items-center outline outline-1 outline-zinc-400 focus:outline-zinc-600 rounded-md w-full">
                    <input
                      type="number"
                      name="amount"
                      className="focus:outline-none px-4 py-3 text-base w-full"
                    />
                    <span className="bg-[#E4F3FE] px-4 py-4 text-slate-600 leading-none font-medium">
                      %
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-lg font-medium text-[#627D90]">
                  Mortgage Type
                </label>
                <div className="flex flex-col gap-4">
                  <label
                    className={`outline outline-1 ${
                      type === "repayment"
                        ? "outline-yellow-600 bg-yellow-50"
                        : "outline-zinc-400"
                    } px-4 py-3  rounded-md text-base w-full space-x-2 flex items-center cursor-pointer`}
                    onClick={() => setType("repayment")}
                  >
                    <input type="radio" name="type" className="w-4 h-4 accent-yellow-700" />
                    <span className="text-[#133040]"> Repayment </span>
                  </label>
                  <label
                    className={`outline outline-1 ${
                      type === "interest"
                        ? "outline-yellow-600 bg-yellow-50"
                        : "outline-zinc-400"
                    } px-4 py-3 rounded-md text-base w-full space-x-2 flex items-center cursor-pointer`}
                    onClick={() => setType("interest")}
                  >
                    <input type="radio" name="type" className="w-4 h-4 accent-yellow-700" />
                    <span className="text-[#133040]"> Interest Only</span>
                  </label>
                </div>
              </div>
            </div>
            <button className="bg-[#D8DB2F] px-8 py-3 rounded-full font-medium text-[#16303E] flex items-center gap-3 mt-4">
              <img src={calculatorIcon?.src} alt="" />
              Calculate Repayments
            </button>
          </div>
          {/* right section */}
          <div className="bg-[#133040] lg:w-1/2 p-12 lg:rounded-bl-[7rem]">
            {/* <div className="flex flex-col items-center justify-center w-full h-full text-white px-4 space-y-4">
              <div>
                <img src={Graphic?.src} alt="graphic" width={200} />
              </div>
              <p className="text-3xl">Results shown here</p>
              <p className="text-center text-slate-400">
                Complete the form and click "calculate repayments" to see what
                your monthly repayment would be.
              </p>
            </div> */}
            <div className="text-white flex flex-col gap-8 overflow-hidden">
              <h1 className="text-3xl font-semibold">Your results</h1>
              <p className="text-slate-400">
                Your results are shown below based on the information you
                provided. To adjust the results, edit the form and click
                &quot;calculate repayments&quot; again.
              </p>
              <div className="w-full p-8 border-t-4 border-[#D8DB2F] bg-[#0E2431] rounded-lg flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <p className="text-slate-400">Your monthly repayments</p>
                  <p className="text-[3rem] font-semibold text-[#D8DB2F] leading-none">
                    $1, 797.74
                  </p>
                </div>
                <div className="w-full h-[1px] bg-slate-700"></div>
                <div className="flex flex-col gap-2">
                  <p className="text-slate-400">
                    Total you&apos;ll repay over the term
                  </p>
                  <p className="text-3xl font-semibold leading-none">$123456</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
