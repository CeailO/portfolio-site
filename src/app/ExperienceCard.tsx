import { SiNextdotjs, SiTypescript, SiReact } from "react-icons/si";

type Props = {};

export default function ExperienceCard({}: Props) {
  const list = [1];
  return (
    <div className="group h-96 w-80 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-300">
      <div className="relative h-full w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 items-center">
          <img
            className="h-full w-full object-cover shadow-xl shadow-black/40 opacity-50"
            src="https://res.cloudinary.com/djdcf9qoq/image/upload/v1675634838/supertree_nsfcga.jpg"
            alt="experience-card"
          />
        </div>
        <div className="absolute inset-0 h-full w-full bg-black/70 px-12 text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col justify-center">
            <div className="grid grid-cols-2">
              <div className="col-span-1 pb-5">
                {" "}
                <img
                  className="relative rounded-full h-16 w-16 object-cover"
                  src="https://res.cloudinary.com/djdcf9qoq/image/upload/v1675444940/logo-bg_komdee.png"
                  alt="company-logo"
                />
                <h1 className="text-3xl font-bold">CeailO</h1>
                <p className="text-lg">2023 - Present</p>
              </div>
              <div className="col-span-1 flex flex-auto gap-3 mx-auto">
                {/* Tech Used */}
                <SiNextdotjs className="h-10 w-10" />
                {/* Tech Used */}
                <SiTypescript className="h-10 w-10" />
                {/* Tech Used */}
                <SiReact className="h-10 w-10" />
              </div>
            </div>
            <ul className="text-base text-left list-disc">
              <li>Actively learning Data Structure and Machine Learning</li>
              <li>Working on with Thesis Project and Written Dissertation</li>
              <li>Media Content Creator for Personal Project</li>
              <li>
                Experienced with Express, Springboot, and Next.js framework so
                far
              </li>
              <li>So much to unveil</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
