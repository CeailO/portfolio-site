import React from "react";
import { SiDiscord, SiGmail, SiProtonmail, SiTelegram } from "react-icons/si";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Interesting to collaborate?{" "}
          <span className="decoration-[#f7ab0a]/50 underline">
            Sent me inquiry
          </span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <SiTelegram className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+60 11 6079 0057</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <SiDiscord className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Barusu#5859</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <SiGmail className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">s46390@student.umt.edu.my</p>
          </div>
        </div>
        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input className="contactInput" type="text" />
            <input className="contactInput" type="text" />
          </div>
          <input className="contactInput" type="text" />
          <textarea className="contactInput" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
