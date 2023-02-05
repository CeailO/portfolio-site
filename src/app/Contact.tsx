import React from "react";
import { SiDiscord, SiGmail, SiProtonmail, SiTelegram } from "react-icons/si";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:s46390@student.umt.edu.my?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };
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
        <div className="space-y-4">
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="text"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
