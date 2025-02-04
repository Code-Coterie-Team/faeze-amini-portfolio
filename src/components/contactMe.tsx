"use client"
import React, { ChangeEvent, useState } from "react";
import MailIcon from "./icons/MailIcom";

function ContactMe() {
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isInputChangeName, setInputChangeName] = useState(false);

  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isInputChangeEmail, setInputChangeEmail] = useState(false);

  const [isFocusedCompany, setIsFocusedCompany] = useState(false);
  const [isInputChangeCompany, setInputChangeCompany] = useState(false);

  const [isFocusedMessage, setIsFocusedMessage] = useState(false);
  const [isInputChangeMessage, setInputChangeMessage] = useState(false);

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>): void {
    if (event.target.value === "" || event.target.value === null) {
      setInputChangeName(false);
    } else if (event.target.value != null) {
      setInputChangeName(true);
    }
  }
  function handleChangeName(event: ChangeEvent<HTMLInputElement>): void {
    if (event.target.value === "" || event.target.value === null) {
      setInputChangeEmail(false);
    } else if (event.target.value != null) {
      setInputChangeEmail(true);
    }
  }
  function handleChangeCompany(event: ChangeEvent<HTMLInputElement>): void {
    if (event.target.value === "" || event.target.value === null) {
      setInputChangeCompany(false);
    } else if (event.target.value != null) {
      setInputChangeCompany(true);
    }
  }
  function handleChangeMessage(event: ChangeEvent<HTMLInputElement>): void {
    if (event.target.value === "" || event.target.value === null) {
      setInputChangeMessage(false);
    } else if (event.target.value != null) {
      setInputChangeMessage(true);
    }
  }

  return (
    <div className="contactMe">
      <div className="sectionSeparator flex gap-2">
        <div className="w-6 border-t-2 border-gray-50 "></div>
        <div className="w-full border-t-2 border-tGrayAll/30 "></div>
      </div>
      <div className="flex pt-12 items-center">
        <div className="text-gray-50">
          <MailIcon
            width="28"
            height="28"
          />
        </div>
        <p className="text-gray-50 text-2xl pl-7">Contact Me</p>
      </div>
      <div className="max-w-3xl text-5xl pt-9 mb-10">
        <span className="text-gray-50">
          Get in contact and let's work together{" "}
        </span>
      </div>
      <div className="listContact  rounded-3xl py-16">
        <div className="flex flex-col relative">
          <label
            className={`absolute text-base  pl-6 ${
              isFocusedName ? "top-3 text-colorInputB" : "top-1/3 text-gray-50 "
            }`}
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="bg-darckBg pb-4 pt-12 px-6 border border-tGrayAll/30 rounded-t-3xl 
          focus:outline-none focus:border-colorInputB focus:border-2"
            id="name"
            type="text"
            onChange={() => {
              handleChangeName;
            }}
            onFocus={() => setIsFocusedName(true)}
            onBlur={() => {
              if (isInputChangeEmail) {
                setIsFocusedName(true);
              } else {
                setIsFocusedName(false);
              }
            }}
          />
        </div>
        <div className="flex flex-col relative">
          <label
            className={`absolute text-gray-50 text-base  pl-6 ${
              isFocusedEmail
                ? "top-3 text-colorInputB"
                : "top-1/3 text-gray-50 "
            }`}
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            className="bg-darckBg pb-4 pt-12 px-6 border border-tGrayAll/30 
          focus:outline-none focus:border-colorInputB focus:border-2"
            type="text"
            onChange={() => {
              handleChangeEmail;
            }}
            onFocus={() => setIsFocusedEmail(true)}
            onBlur={() => {
              if (isInputChangeName) {
                setIsFocusedEmail(true);
              } else {
                setIsFocusedEmail(false);
              }
            }}
          />
        </div>
        <div className="flex flex-col relative">
          <label
            className={`absolute text-gray-50 text-base  pl-6 ${
              isFocusedCompany
                ? "top-3 text-colorInputB"
                : "top-1/3 text-gray-50 "
            }`}
            htmlFor="company"
          >
            Company
          </label>
          <input
            id="company"
            className="bg-darckBg pb-4 pt-12 px-6 border border-tGrayAll/30 
          focus:outline-none focus:border-colorInputB focus:border-2"
            type="text"
            onChange={() => {
              handleChangeCompany;
            }}
            onFocus={() => setIsFocusedCompany(true)}
            onBlur={() => {
              if (isInputChangeName) {
                setIsFocusedCompany(true);
              } else {
                setIsFocusedCompany(false);
              }
            }}
          />
        </div>
        <div className="flex flex-col relative">
          <label
            className={`absolute text-gray-50 text-base  pl-6 ${
              isFocusedMessage
                ? "top-3 text-colorInputB"
                : "top-1/3 text-gray-50 "
            }`}
            htmlFor="message"
          >
            Message
          </label>
          <input
            id="message"
            className="bg-darckBg pb-4 pt-12 px-6 border border-tGrayAll/30 
         focus:outline-none focus:border-colorInputB focus:border-2 rounded-b-3xl"
            type="text"
            onChange={() => {
              handleChangeMessage;
            }}
            onFocus={() => setIsFocusedMessage(true)}
            onBlur={() => {
              if (isInputChangeName) {
                setIsFocusedMessage(true);
              } else {
                setIsFocusedMessage(false);
              }
            }}
          />
        </div>
        <div className="flex justify-end">
          <button className="bg-gray-50 text-black rounded-full px-3 py-1 mt-6">
            send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
