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
        <ul className="gap-5 flex overflow-y-hidden overflow-x-scroll snap-mandatory snap-x scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
          <li className="snap-center">
            <ExperienceCard />
          </li>
          <li className="snap-center">
            <ExperienceCard />
          </li>
          <li className="snap-center">
            <ExperienceCard />
          </li>
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
    </motion.div>
  );
}
