import React from "react";
import { SiDiscord, SiGmail, SiTelegram } from "react-icons/si";
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
    <div className="h-screen flex flex-wrap items-center py-10 px-20">
      <div className="space-y-10">
        <h4 className="text-4xl lg:text-5xl font-semibold text-center">
          Interested to collaborate?{" "}
          <span className="decoration-[#f7ab0a]/50 underline">
            Sent me inquiry
          </span>
        </h4>
        <div className="space-y-4">
          <div className="flex space-x-4 justify-center">
            <SiTelegram className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-xl">+60 11 6079 0057</p>
          </div>
          <div className="flex space-x-4 justify-center">
            <SiDiscord className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-xl">Barusu#5859</p>
          </div>
          <div className="flex space-x-4 justify-center">
            <SiGmail className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-xl">s46390@student.umt.edu.my</p>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mx-auto space-y-4"
      >
        <div className="flex flex-col lg:flex-row lg:space-x-4">
          <input
            {...register("name")}
            className="contactInput"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
          <input
            {...register("email")}
            className="contactInput"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <input
          {...register("subject")}
          className="contactInput"
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
        />
        <textarea
          {...register("message")}
          className="contactInput"
          name="message"
          id="message"
          placeholder="Message"
        />
        <button
          type="submit"
          className="bg-[#f7ab0a] py-5 text-black font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
