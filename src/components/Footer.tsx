"use client";

import { Link } from "react-scroll";
import {
  RiDiscordFill,
  RiLinkedinBoxFill,
  RiMailFill,
  RiTelegramFill,
  RiTwitterXFill,
} from "@remixicon/react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-secondary/20 to-transparent mt-20 md:mt-32">
      <div className="container flex flex-col gap-10 px-4 py-10 mx-auto md:flex-row justify-evenly md:px-0">
        <div>
          <Image
            src="/image/logo/mr.boo-plain.png"
            width={150}
            height={150}
            alt="Mr.Boo"
          />
        </div>
        <div>
          <p className="mb-5 font-semibold">SITEMAP</p>
          <ul className="space-y-2 text-white [&>li]:cursor-pointer text-lg">
            <li>
              <Link to="hero" smooth spy>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth spy>
                About
              </Link>
            </li>
            <li>
              <Link to="service" smooth spy>
                Service
              </Link>
            </li>
            <li>
              <Link to="project" smooth spy>
                Project
              </Link>
            </li>
            <li>
              <Link to="partnertship" smooth spy>
                Partnership
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-5 font-semibold">Our Service</p>
          <ul className="space-y-2 text-lg text-white">
            <li>Marketing Incubation </li>
            <li>CEX & Avedex Listing Assistance</li>
            <li>CMC & CG Services</li>
            <li>Social Media Services & Verification</li>
            <li>Trending Services (CMC, CG, DexTools)</li>
            <li>Press Release Services</li>
            <li>NFT Arts & Logo Making</li>
            <li>Blockchain Development</li>
            <li>Metaverse Development</li>
          </ul>
        </div>
        <div className="space-y-5">
          <p className="text-2xl font-semibold">
            Unleash potential and growth with us.
          </p>
          <div className="flex gap-3">
            <a className="w-16 h-16 p-3 neon__card">
              <RiTelegramFill color="#ffffff" className="w-full h-full" />
            </a>
            <a className="w-16 h-16 p-4 neon__card">
              <RiMailFill color="#ffffff" className="w-full h-full" />
            </a>
            <a className="w-16 h-16 p-4 neon__card">
              <RiTwitterXFill color="#ffffff" className="w-full h-full" />
            </a>
            <a className="w-16 h-16 p-3 neon__card">
              <RiLinkedinBoxFill color="#ffffff" className="w-full h-full" />
            </a>
            <a className="w-16 h-16 p-3 neon__card">
              <RiDiscordFill color="#ffffff" className="w-full h-full" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
