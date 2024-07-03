"use client";
import ArrowIcon from "@/assets/assignment-4/icon-arrow.svg";
import { SyntheticEvent, useEffect, useState } from "react";

interface DateTypes {
  day: string;
  month: string;
  year: string;
}

export default function Page() {
  const [ageDate, setAgeDate] = useState<DateTypes>({
    day: "",
    month: "",
    year: "",
  });
  const [presentDate, setPresentDate] = useState<DateTypes>({
    day: "",
    month: "",
    year: "",
  });

  useEffect(() => {
    const date: string = new Date().toLocaleDateString();
    setPresentDate((prevData) => ({
      ...prevData,
      day: date.split("/")[0],
      month: date.split("/")[1],
      year: date.split("/")[2],
    }));
  }, []);

  function handleInputChange(field: string, e: SyntheticEvent) {
    setAgeDate((prevData) => ({
      ...prevData,
      [field]: (e.target as HTMLInputElement).value,
    }));
  }

  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center p-4 sm:px-8 bg-[#f0f0f0]">
        <div className="w-full md:max-w-3xl flex flex-col gap-6 p-8 sm:p-16 border shadow-xl bg-white rounded-l-[2rem] rounded-tr-[2rem] rounded-br-[7rem] sm:rounded-br-[10rem] ">
          <div className="flex gap-4 sm:gap-8 w-full sm:w-4/5">
            <div className="flex flex-col gap-3">
              <p className="uppercase font-medium text-zinc-600">day</p>
              <input
                type="number"
                className="outline outline-1 outline-zinc-400 rounded-md p-4  font-semibold text-2xl w-full focus:outline-zinc-800 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                autoFocus
                onChange={(e) => handleInputChange("day", e)}
                value={ageDate.day}
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="uppercase font-medium text-zinc-600">month</p>
              <input
                type="number"
                className="outline outline-1 outline-zinc-400 rounded-md p-4  font-semibold text-2xl w-full focus:outline-zinc-800 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                onChange={(e) => handleInputChange("month", e)}
                value={ageDate.month}
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="uppercase font-medium text-zinc-600">year</p>
              <input
                type="number"
                className="outline outline-1 outline-zinc-400 rounded-md p-4  font-semibold text-2xl w-full focus:outline-zinc-800 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                onChange={(e) => handleInputChange("year", e)}
                value={ageDate.year}
              />
            </div>
          </div>

          <div className="relative flex items-center justify-center h-24">
            <p className="h-[2px] w-full bg-zinc-300"></p>
            <button className="w-16 h-16 md:w-24 md:h-24 bg-[#864CFF] absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 md:right-0 md:-translate-x-0 rounded-full flex items-center justify-center hover:bg-slate-800">
              <img src={ArrowIcon?.src} alt="arrow-icon" />
            </button>
          </div>

          <div className="text-zinc-800">
            <h1 className="text-[3rem] sm:text-[5rem] md:text-[6rem] font-bold italic leading-none">
              <span className="text-[#864CFF]">
                {ageDate.year == ""
                  ? "-- "
                  : Number(presentDate.year) - Number(ageDate.year) + " "}
              </span>
              years
            </h1>
            <h1 className="text-[3rem] sm:text-[5rem] md:text-[6rem] font-bold italic leading-tight">
              <span className="text-[#864CFF]">
                {ageDate.month == ""
                  ? "-- "
                  : Number(presentDate.month) - Number(ageDate.month) + " "}
              </span>{" "}
              months
            </h1>
            <h1 className="text-[3rem] sm:text-[5rem] md:text-[6rem] font-bold italic leading-tight">
              <span className="text-[#864CFF]">
                {ageDate.day == ""
                  ? "-- "
                  : Number(presentDate.day) - Number(ageDate.day) + " "}
              </span>
              days
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
