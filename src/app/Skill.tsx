import { motion } from "framer-motion";

type Props = {};

export default function Skill() {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        loading="lazy"
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://res.cloudinary.com/djdcf9qoq/image/upload/c_thumb,h_203/v1675455896/typescript_oly1t1.png"
        alt="skill-img"
        className="border border-transparent object-cover h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-4xl font-bold text-black opacity-100">70%</p>
        </div>
      </div>
    </div>
  );
}
