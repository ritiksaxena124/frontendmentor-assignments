"use client";

import React, { useState } from "react";

interface inputField {
  isFocused: boolean;
  isEmpty: boolean;
  value: string;
}

interface formFields {
  firstName: inputField;
  lastName: inputField;
  email: inputField;
  message: inputField;
}

const Assignment1 = () => {
  const [formData, setFormData] = useState<formFields>({
    firstName: {
      isFocused: false,
      isEmpty: true,
      value: "",
    },
    lastName: {
      isFocused: false,
      isEmpty: true,
      value: "",
    },
    email: {
      isFocused: false,
      isEmpty: true,
      value: "",
    },
    message: {
      isFocused: false,
      isEmpty: true,
      value: "",
    },
  });

  const handleFocus = (field: keyof formFields) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: {
        ...(prevData[field as keyof formFields] as inputField),
        isFocused: true,
      },
    }));
  };

  const handleChange = (field: keyof formFields, e: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: {
        ...(prevData[field as keyof formFields] as inputField),
        value: e.target.value,
      },
    }));
  };

  return (
    <>
      <div className="h-screen w-full flex items-center justify-center text-green-950 bg-green-50">
        <div className="max-w-screen-sm mx-auto p-8 border space-y-8 rounded-lg bg-white shadow-md">
          <h1 className="text-4xl font-semibold ">Contact Us</h1>
          <form action="" className="space-y-6">
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="first_name" className="text-lg font-medium">
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="first_name"
                  type="text"
                  name="first_name"
                  className="outline outline-zinc-400 outline-1 rounded-md text-base focus:outline-zinc-700 indent-2 p-2"
                  placeholder="John"
                  onFocus={() => handleFocus("firstName")}
                  onChange={(e) => handleChange("firstName", e)}
                />
                {!formData.firstName.value && formData.firstName.isFocused ? (
                  <span className="text-sm text-red-600">
                    This field is required
                  </span>
                ) : (
                  ""
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="last_name" className="text-lg font-medium">
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="last_name"
                  type="text"
                  name="last_name"
                  className="outline outline-zinc-400 outline-1 rounded-md text-base focus:outline-zinc-700 indent-2 p-2"
                  placeholder="Doe"
                  onFocus={() => handleFocus("lastName")}
                  onChange={(e) => handleChange("lastName", e)}
                />
                {!formData.lastName.value && formData.lastName.isFocused ? (
                  <span className="text-sm text-red-600">
                    This field is required
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg font-medium">
                Email Address <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                type="text"
                className="outline outline-zinc-400 outline-1 rounded-md text-base focus:outline-zinc-700 indent-2 p-2"
                placeholder="johndoe@gmail.com"
                onFocus={() => handleFocus("email")}
                onChange={(e) => handleChange("email", e)}
              />
              {!formData.email.value && formData.email.isFocused ? (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              ) : (
                ""
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="query_type" className="text-lg font-medium">
                Query Type <span className="text-red-600">*</span>
              </label>
              <div className="flex gap-4">
                <label className="border border-zinc-400 rounded-md px-6 py-4 w-full text-lg gap-2 flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="query_type"
                    id="general"
                    className="w-4 h-4 accent-green-700"
                  />
                  General Enquiry
                </label>
                <label className="border border-zinc-400 rounded-md px-6 py-4 w-full text-lg gap-2 flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="query_type"
                    id="support"
                    className="w-4 h-4 accent-green-700"
                  />{" "}
                  Support Request
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-lg font-medium">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                className="outline outline-zinc-400 outline-1  h-36 rounded-md text-base focus:outline-zinc-700 indent-2 p-2"
                placeholder="Enter your message here..."
                onFocus={() => handleFocus("message")}
                onChange={(e) => handleChange("message", e)}
              />

              {!formData.message.value && formData.message.isFocused ? (
                <span className="text-sm text-red-600">
                  This field is required
                </span>
              ) : (
                ""
              )}
            </div>

            <label className="flex gap-2 text-lg items-center cursor-pointer w-fit">
              <input id="email" type="checkbox" className="w-5 h-5 accent-green-700" /> I consent
              to being contacted by the team
            </label>

            <button
              type="submit"
              className="bg-green-800 w-full text-white px-4 py-3 rounded-md font-medium text-lg hover:bg-green-900"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Assignment1;
