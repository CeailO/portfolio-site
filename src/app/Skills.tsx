import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3
        id="hover-content"
        className="px-10 py-10 lg:[writing-mode:vertical-lr] lg:rotate-180 top-36 break-words uppercase tracking-[3px] text-gray-500 text-sm"
      >
        Hover over a skill for currently proficiency
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-4"
      >
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </motion.div>
    </motion.div>
  );
}
