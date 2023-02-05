import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
      max-w-full px-10 justify-evenly mx-auto items-center pt-5"
    >
      <div className="bg-[#36393f]/50 rounded-xl w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 justify-center">
        {/* ExperienceCard */}
        <ExperienceCard />
        {/* ExperienceCard */}
        <ExperienceCard />
        {/* ExperienceCard */}
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
