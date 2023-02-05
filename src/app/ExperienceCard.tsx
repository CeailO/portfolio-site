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
    <article className="p-25 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://res.cloudinary.com/djdcf9qoq/image/upload/v1675444940/logo-bg_komdee.png"
        alt="company-logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-semibold">CeailO</h4>
        <p className="font-light text-2xl mt-1">Founder</p>
        <div className="flex space-x-2 my-2">
          {/* Tech Used */}
          <SiNextdotjs className="h-10 w-10" />
          {/* Tech Used */}
          <SiTypescript className="h-10 w-10" />
          {/* Tech Used */}
          <SiReact className="h-10 w-10" />
        </div>
        <p className="uppercase py-5 text-gray-300">Lifetime</p>
        <ul className="list-disc space-y-4 ml-5 text-md px-10">
          <li>Actively learning Data Structure and Machine Learning</li>
          <li>Working on with Thesis Project and Written Dissertation</li>
          <li>Media Content Creator for Personal Project</li>
          <li>
            Experienced with Express, Springboot, and Next.js framework so far
          </li>
          <li>So much to unveil</li>
        </ul>
      </div>
    </article>
  );
}
