import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";
import BackgroundCircles from "./BackgroundCircles";
type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "My handle name is @CeailO",
      "Why using alias @?",
      "Because it is cool",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={
          "https://res.cloudinary.com/djdcf9qoq/image/upload/v1675443838/building-01-1_hmu7dr.png"
        }
        alt={"profile-image"}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[2em] translate-x-2.5">
          Developer
        </h2>
        <h1 className="text-4xl lg:pt-3 lg:text-5xl font-semibold px-10">
          <span className="mr-3 text-clip">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="lg:pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#showcases">
            <button className="heroButton">Showcases</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
