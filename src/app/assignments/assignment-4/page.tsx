"use client";
import ArrowIcon from "@/assets/assignment-4/icon-arrow.svg";
import { SyntheticEvent, useEffect, useState } from "react";

interface DateTypes {
  day: string;
  month: string;
  year: string;
}

export default function Page() {
  const [birthDate, setBirthDate] = useState<DateTypes>({
    day: "",
    month: "",
    year: "",
  });
  const [presentDate, setPresentDate] = useState<DateTypes>({
    day: "",
    month: "",
    year: "",
  });

  const [userAge, setUsersAge] = useState<DateTypes>({
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
    setBirthDate((prevData) => ({
      ...prevData,
      [field]: (e.target as HTMLInputElement).value,
    }));
  }

  function isLeap(year: number): boolean {
    if (year % 4 == 0) {
      // checks if the century year is a leap year or not
      if (year % 100 == 0 && year % 400 == 0) {
        return true;
      }
      return true;
    }

    return false;
  }

  function getDaysInPrevMonth(currentMonth: number, currentYear: number) {
    let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeap(currentYear)) {
      monthDays[1] = 29;
    }

    if (currentMonth - 1 == 0) return monthDays[monthDays.length - 1];
    return monthDays[currentMonth - 1];
  }

  function usersAgeCalculate() {
    let day;
    let month;
    let year;

    year = Number(presentDate.year) - Number(birthDate.year);
    if (presentDate.month > birthDate.month) {
      month = Number(presentDate.month) - Number(birthDate.month);
    } else {
      month = Number(presentDate.month) - Number(birthDate.month) + 12;
      year = year - 1;
    }

    if (presentDate.day > birthDate.day) {
      day = Number(presentDate.day) - Number(birthDate.day);
    } else {
      day =
        Number(presentDate.day) -
        Number(birthDate.day) +
        getDaysInPrevMonth(Number(presentDate.month), Number(presentDate.year));
      month = month - 1;
    }

    setUsersAge({
      day: JSON.stringify(day),
      month: JSON.stringify(month),
      year: JSON.stringify(year),
    });
  }

  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center p-4 sm:px-8 bg-[#f0f0f0]">
        <div className="w-full md:max-w-3xl flex flex-col gap-6 p-8 sm:p-16 border shadow-xl bg-white rounded-l-[2rem] rounded-tr-[2rem] rounded-br-[7rem] sm:rounded-br-[10rem] ">
          <div className="flex gap-4 sm:gap-8 w-full sm:w-4/5">
            <div className="flex flex-col gap-3 basis-1/3">
              <p className="uppercase font-medium text-zinc-600">day</p>
              <input
                type="number"
                className="outline outline-1 outline-zinc-400 rounded-md p-4  font-semibold text-2xl w-full focus:outline-zinc-800 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                autoFocus
                onChange={(e) => handleInputChange("day", e)}
                value={birthDate.day}
                placeholder="DD"
              />
            </div>
            <div className="flex flex-col gap-3 basis-1/3">
              <p className="uppercase font-medium text-zinc-600">month</p>
              <input
                type="number"
                className="outline outline-1 outline-zinc-400 rounded-md p-4  font-semibold text-2xl w-full focus:outline-zinc-800 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                onChange={(e) => handleInputChange("month", e)}
                value={birthDate.month}
                min={"1"}
                max={"12"}
                placeholder="MM"
              />
            </div>
            <div className="flex flex-col gap-3 basis-1/3">
              <p className="uppercase font-medium text-zinc-600">year</p>
              <input
                type="number"
                className="outline outline-1 outline-zinc-400 rounded-md p-4  font-semibold text-2xl w-full focus:outline-zinc-800 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                onChange={(e) => handleInputChange("year", e)}
                value={birthDate.year}
                placeholder="YYYY"
              />
            </div>
          </div>

          <div className="relative flex items-center justify-center h-24">
            <p className="h-[2px] w-full bg-zinc-300"></p>
            <button
              onClick={usersAgeCalculate}
              className="w-16 h-16 md:w-24 md:h-24 bg-[#864CFF] absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 md:right-0 md:-translate-x-0 rounded-full flex items-center justify-center hover:bg-slate-800"
            >
              <img src={ArrowIcon?.src} alt="arrow-icon" />
            </button>
          </div>

          <div className="text-zinc-800">
            <h1 className="text-[3rem] sm:text-[5rem] md:text-[6rem] font-bold italic leading-none">
              <span className="text-[#864CFF]">
                {userAge.year == "" ? "-- " : userAge.year + " "}
              </span>
              years
            </h1>
            <h1 className="text-[3rem] sm:text-[5rem] md:text-[6rem] font-bold italic leading-tight">
              <span className="text-[#864CFF]">
                {userAge.month == "" ? "-- " : userAge.month + " "}
              </span>
              months
            </h1>
            <h1 className="text-[3rem] sm:text-[5rem] md:text-[6rem] font-bold italic leading-tight">
              <span className="text-[#864CFF]">
                {userAge.day == "" ? "-- " : userAge.day + " "}
              </span>
              days
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
