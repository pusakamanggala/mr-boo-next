"use client";
import Image from "next/image";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

export default function About() {
  return (
    <Fade duration={1000} delay={500}>
      <section
        id="about"
        className="flex flex-col items-center gap-10 space-y-10 py-10 md:py-20 md:space-y-0 md:mx-10 md:flex-row blurry-2"
      >
        <Image
          src="/image/logo/mr.boo.webp"
          className="md:h-[500px] h-[300px] aspect-square md:w-auto"
          alt="mr.boo"
          width={300}
          height={300}
        />
        <hgroup className="space-y-5 md:space-y-10">
          <Slide direction="up">
            <h1 className="pb-5 text-gradient">Empower your business growth</h1>
          </Slide>
          <Slide direction="up" delay={100}>
            <p>
              Mr.Boo is a marketing-incubator and a verified listing agency for
              crypto projects. We help projects to maximize fundraising during
              IEO/IDO with strategic advisory and also market making advisory.
              We ensure the maximum fulfillment of our obligations and the best
              quality of services
            </p>
          </Slide>
        </hgroup>
      </section>
    </Fade>
  );
}
