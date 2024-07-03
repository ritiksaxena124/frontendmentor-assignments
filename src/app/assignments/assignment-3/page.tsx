"use client";

import CheckIcon from "@/assets/assignment-3/icon-list.svg";
import IllustrationDesktop from "@/assets/assignment-3/illustration-sign-up-desktop.svg";
import IllustrationMobile from "@/assets/assignment-3/illustration-sign-up-mobile.svg";
import SuccessIcon from "@/assets/assignment-3/icon-success.svg";

import { SyntheticEvent, useState } from "react";

export default function Assignment3() {
  const [email, setEmail] = useState<string>("");
  const [focussed, setFocussed] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [tempEmail, setTempEmail] = useState<string>("");
  function handleSuccess(val: boolean) {
    setSuccess(val);
    setTempEmail(email);
    setEmail("");
    setIsValid(false);
    setFocussed(false);
  }

  return (
    <>
      <div className="min-h-screen w-full bg-[#37384E] flex items-center justify-center px-4 sm:px-8">
        {!success ? (
          <NewsletterContactForm
            email={email}
            setEmail={setEmail}
            focussed={focussed}
            setFocussed={setFocussed}
            isValid={isValid}
            setIsValid={setIsValid}
            handleSuccess={handleSuccess}
          />
        ) : (
          <Success email={tempEmail} handleSuccess={handleSuccess} />
        )}
      </div>
    </>
  );
}

const NewsletterContactForm = ({
  email,
  setEmail,
  focussed,
  setFocussed,
  isValid,
  setIsValid,
  handleSuccess,
}: {
  email: string;
  setEmail: (val: string) => void;
  focussed: boolean;
  setFocussed: (val: boolean) => void;
  isValid: boolean;
  setIsValid: (val: boolean) => void;
  handleSuccess: (val: boolean) => void;
}) => {
  function handleEmail(e: SyntheticEvent) {
    e.preventDefault();
    setEmail((e.target as HTMLInputElement).value);
    validateEmail((e.target as HTMLInputElement).value);
  }

  function validateEmail(email: string) {
    const valid = email?.match(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    );

    if (valid) {
      setIsValid(true);
      return;
    } else {
      setIsValid(false);
    }
  }
  return (
    <div className="bg-white w-full md:w-fit rounded-3xl flex flex-col-reverse md:flex-row gap-4 justify-between shadow-2xl md:p-8">
      {/* left section */}
      <div className="space-y-5 flex flex-col justify-center px-8 pt-8 pb-12 w-full md:w-1/2 md:pl-4 lg:pl-8 md:pr-0">
        <h1 className="text-[2.5rem] md:text-[3rem] font-bold text-[#222743] leading-tight">
          Stay updated!
        </h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="space-y-3">
          <li className="flex gap-2 text-base">
            <img src={CheckIcon?.src} alt="" />
            Product discovery and building what matters
          </li>
          <li className="flex gap-2 text-base">
            <img src={CheckIcon?.src} alt="" />
            Measuring to ensure updates are a success
          </li>
          <li className="flex gap-2 text-base">
            <img src={CheckIcon?.src} alt="" />
            And much more!
          </li>
        </ul>
        <div className="space-y-2 pt-4">
          <div className="flex gap-2 justify-between">
            <p className="font-medium text-[#222743]">Email address</p>
            {(email.length > 0 && !isValid) || (focussed && !isValid) ? (
              <p className="font-medium text-[#FF6264]">Valid email required</p>
            ) : (
              ""
            )}
          </div>
          <input
            type="email"
            placeholder="email@company.com"
            className="outline outline-1 outline-zinc-400 w-full p-3 indent-1 rounded-md"
            value={email}
            onChange={(e) => handleEmail(e)}
            onFocus={() => setFocussed(true)}
          />
        </div>

        <button
          className={` text-white px-6 py-3 w-full rounded-md font-medium ${
            !isValid
              ? "bg-slate-300 cursor-not-allowed"
              : "bg-[#222743] hover:bg-gradient-to-r from-[#FE577A] to-[#FF693E] hover:shadow-xl"
          }`}
          onClick={() => isValid && handleSuccess(true)}
        >
          Subscribe to monthly newsletter
        </button>
      </div>
      {/* right section */}
      <div className="hidden md:w-1/2 md:flex items-center justify-end">
        <img src={IllustrationDesktop?.src} alt="illustration" />
      </div>
      <div className="block overflow-hidden rounded-3xl w-full md:hidden">
        <img
          src={IllustrationMobile?.src}
          alt="illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const Success = ({
  email,
  handleSuccess,
}: {
  email: string;
  handleSuccess: (val: boolean) => void;
}) => {
  return (
    <>
      <div className="bg-white rounded-3xl p-8 sm:p-12 flex gap-4 justify-between shadow-2xl max-w-[500px] flex-col space-y-4">
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
    </>
  );
};
