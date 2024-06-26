"use client";

import {
  RiDiscordFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiTelegramFill,
  RiTwitterXFill,
} from "@remixicon/react";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

export default function Hero() {
  return (
    <section
      className="pt-24 space-y-5 md:pb-10 lg:pt-0 relative blurry-3"
      id="home"
    >
      <div className="items-center min-h-screen space-y-10 md:flex">
        <div className="space-y-10 md:w-1/2">
          <Slide delay={0} direction="left">
            <hgroup className="space-y-3 ">
              <h1 className="leading-snug">
                <span className="text-gradient">Unleash</span> potential and
                growth with us.
              </h1>
              <p className="text-slate-400">
                At Mr. Boo, our seasoned team of professionals is committed to
                revolutionizing the crypto landscape. Drawing upon our vast
                expertise and experience as a marketing incubator and verified
                listing agency
              </p>
            </hgroup>
            <div className="flex gap-3">
              <a
                className=" neon__card flex items-center px-5 py-3 h-fit font-semibold gap-2 text-xl cursor-pointer"
                href="https://t.me/MrBooMKT"
                target="_blank"
                rel="noreferrer"
              >
                <RiTelegramFill color="#ffffff" />
                Marketing
              </a>
              <a
                className=" neon__card flex items-center px-5 py-3 h-fit font-semibold gap-2 text-xl cursor-pointer"
                href="https://t.me/MrBooService"
                target="_blank"
                rel="noreferrer"
              >
                <RiTelegramFill color="#ffffff" />
                Channel
              </a>
            </div>
          </Slide>
        </div>
        <div className="relative overflow-x-hidden md:w-1/2">
          <Slide delay={0} direction="right">
            <div className="w-[400px] md:w-full mx-auto">
              <Image
                src="/image/decoration/robot-hand.webp"
                alt="robot hand"
                className="w-full mx-auto"
                width={400}
                height={400}
              />
              <Image
                src="/image/logo/ethereum-logo.webp"
                alt="ethereum logo"
                className="w-[150px] xl:w-[250px] xl:top-36 lg:top-28 mx-auto absolute top-0 left-1/3"
                width={250}
                height={150}
              />
            </div>
          </Slide>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        <Fade delay={100} cascade>
          <hgroup className="flex items-center gap-3 w-fit text-nowrap">
            <h2 className="font-semibold">10+</h2>
            <p className="text-2xl text-gradient">SUCCESSFUL PROJECT(S)</p>
          </hgroup>
          <hgroup className="flex items-center gap-3 w-fit text-nowrap">
            <h2 className="font-semibold">9</h2>
            <p className="text-2xl text-gradient">QUALITY SERVICE(S)</p>
          </hgroup>
          <hgroup className="flex items-center gap-3 w-fit text-nowrap">
            <h2 className="font-semibold">20+</h2>
            <p className="text-2xl text-gradient">TRUSTED PARTNERSHIP(S)</p>
          </hgroup>
        </Fade>
      </div>
    </section>
  );
}
