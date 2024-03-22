"use client";

import { Link } from "react-scroll";
import {
  RiCreativeCommonsNdLine,
  RiFingerprintFill,
  RiHome4Line,
  RiInstanceLine,
  RiServiceLine,
} from "@remixicon/react";

export default function BottomNavbar() {
  return (
    <nav className="sticky m-2 bg-secondary/80 backdrop-blur-md bottom-2 rounded-xl sm:hidden">
      <ul className="flex py-5 justify-evenly [&>li]:cursor-pointer text-sm">
        <li>
          <Link
            to="home"
            smooth
            spy
            activeClass="text-white font-bold"
            offset={-100}
          >
            <RiHome4Line size={23} className="mx-auto" />
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth
            spy
            activeClass="text-white font-bold"
            offset={-100}
          >
            <RiFingerprintFill size={23} className="mx-auto" />
            About
          </Link>
        </li>
        <li>
          <Link
            to="service"
            smooth
            spy
            activeClass="text-white font-bold"
            offset={-100}
          >
            <RiInstanceLine size={23} className="mx-auto" />
            Service
          </Link>
        </li>
        <li>
          <Link to="project" smooth spy activeClass="text-white font-bold">
            <RiCreativeCommonsNdLine size={23} className="mx-auto" />
            Project
          </Link>
        </li>
        <li>
          <Link
            to="partnership"
            smooth
            spy
            activeClass="text-white font-bold"
            offset={-100}
          >
            <RiServiceLine size={23} className="mx-auto" />
            Partner
          </Link>
        </li>
      </ul>
    </nav>
  );
}
