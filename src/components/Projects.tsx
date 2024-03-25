"use client";

import { Fade, Slide, Zoom } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function Project() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      // disable dots in mobile
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const projects = [
    {
      name: "LESLARVERSE",
      year: "2022",
      img: "leslarverse.webp",
    },
    {
      name: "MATSUSWAP",
      year: "2022",
      img: "matsuswap.webp",
    },
    {
      name: "MAMA",
      year: "2022",
      img: "mama.webp",
    },
    {
      name: "CORDIUM",
      year: "2022",
      img: "cordium.webp",
    },
    {
      name: "KUNCI",
      year: "2022",
      img: "kunci.webp",
    },
    {
      name: "PAPI",
      year: "2023",
      img: "papi.webp",
    },
    {
      name: "BOBO",
      year: "2023",
      img: "bobo.webp",
    },
    {
      name: "CAPYBARA",
      year: "2023",
      img: "capybara.webp",
    },
    {
      name: "SMP",
      year: "2023",
      img: "smp.webp",
    },
    {
      name: "GENESYS",
      year: "2023",
      img: "genesys.webp",
    },
    {
      name: "SHIB GPT",
      year: "2023",
      img: "shiba.webp",
    },
    {
      name: "ONLINE",
      year: "2023",
      img: "onlinebase.webp",
    },
  ];

  return (
    <section
      id="project"
      className="py-5 md:py-10 blurry-2 md:space-y-20 space-y-10"
    >
      <hgroup className="space-y-5 font-semibold text-center">
        <Fade>
          <h1 className="text-gradient leading-tight">Projects</h1>
        </Fade>
        <Fade delay={300}>
          <p className="md:mx-28">
            We offer a range of services that have successfully supported over
            10 projects, providing them with extensive press release coverage on
            top-tier platforms and connections to major exchanges for increased
            visibility and engagement
          </p>
        </Fade>
      </hgroup>
      <Fade delay={600}>
        <Slider {...settings} className="pb-10">
          {projects &&
            projects.length > 0 &&
            projects.map((project) => (
              <div key={project.name}>
                <div className="md:w-[160px] lg:w-[180px] w-[80px] xs:w-[100px] ss:w-[130px] aspect-square relative m-2 mx-auto">
                  <Image
                    src={"/image/project/" + project.img}
                    width={0}
                    height={0}
                    alt={project.name}
                    fill
                    sizes="(100vw, 100vh)"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
        </Slider>
      </Fade>
      <div className="md:space-y-5">
        <Slide direction="up" delay={100}>
          <p className="md:mx-28 text-center">
            Delivered 2 Audit Report and 1 KYC from SolidProof with the BEST
            price and marketing assistance for RADA Foundation and NaturesGold
            Token
          </p>
        </Slide>

        <div className="sm:grid sm:grid-cols-3  items-center">
          <div className="lg:w-[300px] md:w-[300px] sm:w-[200px] w-[300px] -mb-16 sm:mb-0 aspect-square relative mx-auto">
            <Image
              src={"/image/project/nature-golden-token-certificate.webp"}
              width={0}
              height={0}
              alt={"nature golden token certificate"}
              fill
              sizes="(100vw, 100vh)"
              className="object-contain"
            />
          </div>
          <div className="lg:w-[400px] md:w-[350px] sm:w-[250px] w-[300px] -mb-16 sm:mb-0 aspect-square relative mx-auto">
            <Image
              src={"/image/project/natures-gold-token-audit.webp"}
              width={0}
              height={0}
              alt={"nature golden token certificate"}
              fill
              sizes="(100vw, 100vh)"
              className="object-contain"
            />
          </div>
          <div className="lg:w-[300px] md:w-[300px] sm:w-[200px] w-[300px] -mb-16 sm:mb-0 aspect-square relative mx-auto">
            <Image
              src={"/image/project/rada-audit.webp"}
              width={0}
              height={0}
              alt={"nature golden token certificate"}
              fill
              sizes="(100vw, 100vh)"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
