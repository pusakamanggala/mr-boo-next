"use client";
import { Link } from "react-scroll";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed z-50 w-full navbar bg-primary/90 backdrop-blur-sm">
      <div className="container flex items-center justify-between px-4 py-5 mx-auto md:px-0">
        <div className="flex items-center gap-3">
          <Image
            src="/image/logo/mr.boo-plain.png"
            alt="Mr.Boo"
            width={48}
            height={48}
          />
          <h1 className="text-3xl font-bold text-gradient">MR.BOO</h1>
        </div>
        <ul className="list-none sm:flex gap-6 hidden justify-end items-center flex-1 font-poppins font-normal text-lg xs:leading-[26px] leading-[21px] text-white [&>li]:cursor-pointer">
          <li>
            <Link
              to="home"
              smooth
              spy
              activeClass="text-gradient font-bold"
              offset={-100}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth
              spy
              activeClass="text-gradient font-bold"
              offset={-100}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="service"
              smooth
              spy
              activeClass="text-gradient font-bold"
              offset={-100}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="project"
              smooth
              spy
              activeClass="text-gradient font-bold"
              offset={-100}
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="partnership"
              smooth
              spy
              activeClass="text-gradient font-bold"
              offset={-100}
            >
              Partnership
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
