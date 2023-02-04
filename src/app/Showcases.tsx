import { motion } from "framer-motion";

type Props = {};

export default function showcases({}: Props) {
  const projects = [1];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[2em] translate-x-2.5 text-gray-500 text-2xl">
        Showcases
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {/* Project */}
        {projects.map((project, i) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
          items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src="https://res.cloudinary.com/djdcf9qoq/image/upload/c_scale,h_240/v1675491468/localhost_3000__iPhone_12_Pro_1__iphone12prosilver_portrait_n7dxmn.png"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  Project {i + 1} of {projects.length}
                </span>{" "}
                Portfolio
              </h4>
              <p className="text-lg text-center md:text-left">
                The site is to satisfy portfolio needed. This is yet my first
                journey to UI/UX design. Although my strength in backends
                development, I would like to commit more in from user
                perspective.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#36393f]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
