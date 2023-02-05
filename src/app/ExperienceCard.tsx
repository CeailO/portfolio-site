import { motion } from "framer-motion";
import {
  SiGo,
  SiJava,
  SiNextdotjs,
  SiReact,
  SiSpring,
  SiTypescript,
} from "react-icons/si";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <div className="group h-96 w-80 [perspective:1000px] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-300">
      <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 items-center">
          <img
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40 opacity-50"
            src="https://res.cloudinary.com/djdcf9qoq/image/upload/v1675634838/supertree_nsfcga.jpg"
          />
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/70 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">CeailO</h1>
            <p className="text-lg">Founder</p>
            <p className="text-base">.....</p>
          </div>
        </div>
      </div>
    </div>
  );
}
