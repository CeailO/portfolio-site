import About from "@/app/About";
import Contact from "@/app/Contact";
import Header from "@/app/Header";
import Hero from "@/app/Hero";
import ParticleGeneration from "@/app/ParticleGeneration";
import Showcases from "@/app/Showcases";
import Skills from "@/app/Skills";
import WorkExperience from "@/app/WorkExperience";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <ParticleGeneration />
      <Head>
        <title>World is Fallacy</title>
        <meta name="description" content="" />
        <link rel="icon" href="logo.ico" />
      </Head>
      <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        {/* Header */}
        <Header />
        {/* Hero */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        {/* About */}
        <section id="about" className="snap-center">
          <About />
        </section>
        {/* Experience */}
        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>
        {/* Skills */}
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        {/* Projects */}
        <section id="showcases" className="snap-start">
          <Showcases />
        </section>
        {/* Contact */}
        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </main>
    </>
  );
}
