import React from "react";
import { SiDiscord, SiTelegram } from "react-icons/si";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute  top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Interesting to collaborate?{" "}
          <span className="decoration-[#f7ab0a]/50 underline">
            Sent me inquiry
          </span>
        </h4>
        <div>
          <div className="flex items-center space-x-5 justify-center">
            <SiTelegram className="text-[#f7ab0a] h-10 w-10 animate-pulse" />
            <p className=""></p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <SiDiscord className="text-[#f7ab0a] h-10 w-10 animate-pulse" />
            <p className=""></p>
          </div>
        </div>
      </div>
    </div>
  );
}
