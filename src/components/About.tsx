import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center gap-10 space-y-10 y-10 md:py-20 md:space-y-0 md:mx-10 md:flex-row blurry-2"
    >
      <Image
        src="/image/logo/mr.boo.png"
        className="md:h-[500px] h-[300px] aspect-square md:w-auto"
        alt="mr.boo"
        width={300}
        height={300}
      />
      <hgroup className="space-y-5 md:space-y-10">
        <h1 className="pb-5 text-gradient">Empower your business growth</h1>
        <p>
          Mr.Boo is a marketing-incubator and a verified listing agency for
          crypto projects. We help projects to maximize fundraising during
          IEO/IDO with strategic advisory and also market making advisory. We
          ensure the maximum fulfillment of our obligations and the best quality
          of services
        </p>
      </hgroup>
    </section>
  );
}
