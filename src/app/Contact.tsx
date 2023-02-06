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
    <div className="h-screen flex flex-row flex-wrap items-center mx-auto">
      <h4 className="text-4xl lg:text-5xl font-semibold mx-auto">
        Interested to collaborate?{" "}
        <span className="decoration-[#f7ab0a]/50 underline">
          Sent me inquiry
        </span>
      </h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 mx-auto"
      >
        <div className="flex flex-col space-y-5">
          <div className="flex flex-row space-x-4">
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
        </div>
      </form>
    </div>
  );
}
