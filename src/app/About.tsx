import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
        src="https://res.cloudinary.com/djdcf9qoq/image/upload/c_thumb,h_1173,w_1400,y_0/v1675413809/profile-placeholder_sfyvei.jpg"
        alt="profile-placeholder"
      />
      <div className="space-y-3 px-0 md:px-10 z-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm font-semibold">
          I am CeailO. My history start from 1998 where I was born in Johor
          Bahru in the state of Johor, Malaysia. I was raised and living within
          frugal environment during my childhood. At the time, my family cannot
          afford to provide me any technical education. I do appreciate the
          effort from my mother to provide us siblings gospel education. All of
          those never in naught for shaping us to become useful person in
          society. Until I reach sophomore years in highschool, I found my
          passion mostly in Computer Science field, thus I pursue the study.
          Most of success I had today came from the failure I paved. My mission
          is to help people that have been stumbled, foraging their own lives
          and harness the fruit of success from their effort. Aside from that, I
          want to learn about new and foreign things for self-sustaining in this
          competitive world and stand together along with great people who has
          done so much in their life.
        </p>
      </div>
    </motion.div>
  );
}
