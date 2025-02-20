"use client";
import React, { useEffect, useState } from "react";
import MailIcon from "./icons/MailIcon";
import SectionSeparator from "./sectionSeparator";
import { addTabStore } from "@/store";
import ModalShow from "./modal/modalShow";
import axios from "axios";

function ContactMe() {
  const {
    isShowModalSuccessful,
    setIsShowModalSuccessful,
    setIsShowModalFail,
    isShowModalFail,
  } = addTabStore();

  const [isFocusedName, setIsFocusedName] = useState(false);
  const [isInputChangeName] = useState(false);

  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isInputChangeEmail] = useState(false);

  const [isFocusedCompany, setIsFocusedCompany] = useState(false);
  const [isInputChangeCompany] = useState(false);

  const [isFocusedMessage, setIsFocusedMessage] = useState(false);
  const [isInputChangeMessage] = useState(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  //api call
  const sendFormData = async (formData: FormDatas) => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.company ||
      !formData.message
    ) {
      setIsShowModalFail(true);
      return;
    }
    try {
      const response = await axios.post(
        "https://67b704c52bddacfb270d4c25.mockapi.io/api/contactme/message",
        formData
      );
      console.log("Data sent successfully:", response.data);
      setIsShowModalSuccessful(true);
      // await sendEmail(formData);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsShowModalSuccessful(false);
      setIsShowModalFail(false);
    }, 1000);
  }, [isShowModalSuccessful, isShowModalFail]);

  useEffect(() => {
    setIsShowModalSuccessful(false);
    setIsShowModalFail(false);
  }, []);
  interface FormDatas {
    name: string;
    email: string;
    company: string;
    message: string;
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData: FormDatas = { name, email, company, message };
    sendFormData(formData);

    setName("");
    setEmail("");
    setCompany("");
    setMessage("");
  };
  return (
    <>
      <div id="contactMe" className="contactMe">
        <SectionSeparator />
        <div className="flex  items-center">
          <div className="text-gray-50">
            <MailIcon width="28" height="28" />
          </div>
          <p className="text-gray-50 text-2xl pl-7">Contact Me</p>
        </div>
        <div className="max-w-3xl text-5xl pt-9 mb-16">
          <span className="text-gray-50">
            Get in contact and let&apos;s work together{" "}
          </span>
        </div>
        <form className="py-10 mb-16" method="post" onSubmit={handleSubmit}>
          <div className="listContact  rounded-3xl">
            <div className="flex flex-col relative">
              <label
                className={`absolute text-base  pl-6 ${
                  isFocusedName
                    ? "top-3 text-colorInputB"
                    : "top-1/3 text-gray-50 "
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
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onFocus={() => setIsFocusedName(true)}
                onBlur={() => {
                  if (isInputChangeName) {
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
                value={email}
                className="bg-darckBg pb-4 pt-12 px-6 border border-tGrayAll/30 
          focus:outline-none focus:border-colorInputB focus:border-2"
                type="text"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onFocus={() => setIsFocusedEmail(true)}
                onBlur={() => {
                  if (isInputChangeEmail) {
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
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
                onFocus={() => setIsFocusedCompany(true)}
                onBlur={() => {
                  if (isInputChangeCompany) {
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
              <textarea
                id="message"
                className="bg-darckBg pb-4 pt-12 px-6 border border-tGrayAll/30 
         focus:outline-none focus:border-colorInputB focus:border-2 rounded-b-3xl"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                onFocus={() => setIsFocusedMessage(true)}
                onBlur={() => {
                  if (isInputChangeMessage) {
                    setIsFocusedMessage(true);
                  } else {
                    setIsFocusedMessage(false);
                  }
                }}
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              className="bg-gray-50 text-black rounded-full px-3 py-1 mt-6"
              type="submit"
            >
              send
            </button>
          </div>
        </form>
      </div>
      {isShowModalSuccessful ? (
        <ModalShow title={"Email successful"} status={"successful"} />
      ) : undefined}
      {isShowModalFail ? (
        <ModalShow title={"Please fill out the form"} status={"Fail"} />
      ) : undefined}
    </>
  );
}

export default ContactMe;
