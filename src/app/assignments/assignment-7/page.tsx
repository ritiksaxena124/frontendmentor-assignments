"use client";

import GradientBGDesktop from "@/assets/assignment-7/bg-main-desktop.png";
import CardFront from "@/assets/assignment-7/bg-card-front.png";
import CardBack from "@/assets/assignment-7/bg-card-back.png";
import CardLogo from "@/assets/assignment-7/card-logo.svg";
import React, { useState } from "react";
import CompleteIcon from "@/assets/assignment-7/icon-complete.svg";

export default function Page() {
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState({
    month: "",
    year: "",
  });

  const [complete, setComplete] = useState<boolean>(false);

  function handleCardNumber(e: React.ChangeEvent<HTMLInputElement>) {
    const formattedValue: string = e.target.value
      .replace(/\D+/g, "") // remove non-digit characters
      .replace(/(.{4})/g, "$1 ") // add spaces after every 4th character
      .trim();

    setCardNumber(formattedValue);
  }
  return (
    <>
      <div className="w-full min-h-screen border-2 border-red-900 flex">
        <div className="w-full relative overflow-hidden border-2 border-red-900">
          <div className="absolute h-96 w-full lg:h-full lg:w-[32vw] ">
            <div className="w-full h-full">
              <img
                src={GradientBGDesktop?.src}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full h-full py-16 px-4 sm:px-8 font-[SpaceGrotesk] flex items-center justify-center">
            <div className="flex flex-col lg:flex-row w-full max-w-5xl gap-12 lg:gap-32 justify-between items-center py-12">
              {/* left section */}
              <div className="flex flex-col w-full h-[60vh] lg:h-full  justify-center items-center lg:gap-8 relative">
                <div className="absolute z-10 w-full max-w-lg translate-y-12 sm:-translate-x-8  lg:relative lg:top-0 lg:-translate-x-[20%] lg:translate-y-0 rounded-xl overflow-hidden h-72 lg:h-64 drop-shadow-2xl">
                  <img
                    src={CardFront?.src}
                    alt="card-front"
                    className="absolute -z-10 w-full h-full object-cover"
                  />
                  <div className="z-10 h-full p-8 w-full text-white">
                    <div className="w-full h-1/2">
                      <img src={CardLogo?.src} alt="card logo" width={64} />
                    </div>
                    <div className="w-full space-y-5 h-1/2 flex flex-col justify-end">
                      <div className="flex text-3xl w-full gap-6 items-center justify-between">
                        <span className="w-full font-semibold">
                          {cardNumber.split(" ")[0] || "0000"}
                        </span>
                        <span className="w-full font-semibold">
                          {cardNumber.split(" ")[1] || "0000"}
                        </span>
                        <span className="w-full font-semibold">
                          {" "}
                          {cardNumber.split(" ")[2] || "0000"}
                        </span>
                        <span className="w-full font-semibold">
                          {" "}
                          {cardNumber.split(" ")[3] || "0000"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="uppercase tracking-widest">
                          {cardHolderName ? cardHolderName : "jane appleseed"}
                        </span>
                        <span>
                          {expiryDate.month ? expiryDate.month : "00"}/
                          {expiryDate.year ? expiryDate.year : "00"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute z-0 top-0 max-w-md -translate-y-16 sm:translate-x-8 lg:relative lg:translate-x-0 lg:-translate-y-0 w-full  lg:top-0 rounded-xl overflow-hidden h-72 lg:h-64 drop-shadow-2xl">
                  <img
                    src={CardBack?.src}
                    alt="card back"
                    className="absolute w-full h-full object-contain"
                  />
                </div>
                {/* <div className="absolute z-10 top-28 -translate-y-28 w-full  lg:relative lg:top-0 lg:-translate-x-[20%] rounded-xl overflow-hidden h-64 drop-shadow-2xl">
                  <img
                    src={CardFront?.src}
                    alt="card-front"
                    className="absolute w-full h-full object-cover"
                  />
                  <div className="z-10 absolute h-full p-8 w-full text-white">
                    <div className="w-full h-1/2">
                      <img src={CardLogo?.src} alt="card logo" width={64} />
                    </div>
                    <div className="w-full space-y-5 h-1/2 flex flex-col justify-end">
                      <div className="flex text-3xl w-full gap-6 items-center justify-between">
                        <span className="w-full font-semibold">
                          {cardNumber.split(" ")[0] || "0000"}
                        </span>
                        <span className="w-full font-semibold">
                          {cardNumber.split(" ")[1] || "0000"}
                        </span>
                        <span className="w-full font-semibold">
                          {" "}
                          {cardNumber.split(" ")[2] || "0000"}
                        </span>
                        <span className="w-full font-semibold">
                          {" "}
                          {cardNumber.split(" ")[3] || "0000"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="uppercase tracking-widest">
                          {cardHolderName ? cardHolderName : "jane appleseed"}
                        </span>
                        <span>
                          {expiryDate.month ? expiryDate.month : "00"}/
                          {expiryDate.year ? expiryDate.year : "00"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute z-0 -top-6 -translate-y-28 w-fit lg:relative lg:top-0 rounded-xl overflow-hidden h-64 drop-shadow-2xl">
                  <img
                    src={CardBack?.src}
                    alt="card back"
                    className="w-full h-full object-contain"
                  />
                </div> */}
              </div>

              {/* right section */}
              {!complete ? (
                <div className="flex flex-col space-y-12 w-full px-4 md:max-w-md">
                  <div className="space-y-8">
                    <div className="w-full space-y-2">
                      <p className="uppercase font-semibold text-zinc-800 tracking-widest text-sm">
                        cardholder name
                      </p>
                      <input
                        type="text"
                        placeholder="e.g. Jane Appleseed"
                        className="p-3 outline outline-1 outline-zinc-300 text-lg rounded-lg w-full indent-2 text-zinc-600"
                        value={cardHolderName}
                        onChange={(e) => setCardHolderName(e.target.value)}
                      />
                    </div>

                    <div className="w-full space-y-2">
                      <p className="uppercase font-semibold text-zinc-800 tracking-widest text-sm">
                        card number
                      </p>
                      <input
                        type="text"
                        placeholder="e.g. 1234 5678 9123 0000"
                        className="p-3 outline outline-1 outline-zinc-300 text-lg rounded-lg w-full indent-2 text-zinc-600"
                        maxLength={19}
                        value={cardNumber}
                        onChange={(e) => handleCardNumber(e)}
                      />
                    </div>
                    <div className="flex gap-6 w-full">
                      <div className="space-y-2 w-2/5">
                        <p className="uppercase font-semibold text-zinc-800 tracking-widest text-sm">
                          exp. date (mm/yy)
                        </p>
                        <div className="flex gap-3">
                          <input
                            type="text"
                            placeholder="MM"
                            className="p-3 outline outline-1 outline-zinc-300 text-lg rounded-lg w-full indent-2 text-zinc-600"
                            maxLength={2}
                            value={expiryDate.month}
                            onChange={(e) =>
                              setExpiryDate((prevData) => ({
                                ...prevData,
                                month: e.target.value.replace(/\D+/g, ""),
                              }))
                            }
                          />
                          <input
                            type="text"
                            placeholder="YY"
                            className="p-3 outline outline-1 outline-zinc-300 text-lg rounded-lg w-full indent-2 text-zinc-600"
                            maxLength={2}
                            value={expiryDate.year}
                            onChange={(e) =>
                              setExpiryDate((prevData) => ({
                                ...prevData,
                                year: e.target.value.replace(/\D+/g, ""),
                              }))
                            }
                          />
                        </div>
                      </div>
                      <div className="space-y-2 w-3/5">
                        <p className="uppercase font-semibold text-zinc-800 tracking-widest text-sm">
                          cvv
                        </p>
                        <input
                          type="password"
                          placeholder="e.g. 123"
                          className="p-3 outline outline-1 outline-zinc-300 text-lg rounded-lg w-full indent-2 text-zinc-600 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          maxLength={3}
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setComplete(true)}
                    className="font-semibold p-4 text-white bg-[#220930] hover:bg-[#170521] w-full rounded-lg tracking-wide"
                  >
                    Confirm
                  </button>
                </div>
              ) : (
                <div className="w-full max-w-md space-y-8 text-center flex items-center justify-center flex-col">
                  <div>
                    <img src={CompleteIcon?.src} alt="" />
                  </div>
                  <div className="space-y-4">
                    <h1 className="uppercase text-[3rem] leading-none">
                      thank you!
                    </h1>
                    <p className="text-zinc-600 text-lg">
                      we've added your card details
                    </p>
                  </div>
                  <button
                    onClick={() => setComplete(false)}
                    className="font-semibold p-4 text-white bg-[#220930] hover:bg-[#170521] w-full rounded-lg tracking-wide"
                  >
                    Continue
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
