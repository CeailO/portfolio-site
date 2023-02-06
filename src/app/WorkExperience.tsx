import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col justify-center mx-auto max-w-sm"
    >
      {/* <div className="bg-[#36393f]/50 rounded-xl wx-auto flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 justify-center"> */}
      <div className="items-center">
        <ul className="gap-5 flex overflow-y-hidden snap-mandatory snap-x scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
          <li className="snap-center">
            <ExperienceCard />
          </li>
          <li className="snap-center">
            <ExperienceCard />
          </li>
          <li className="snap-center">
            <ExperienceCard />
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
