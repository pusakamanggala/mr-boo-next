"use client";

import { Fade, Slide } from "react-awesome-reveal";
import { GlassNeonCard } from "./GlassNeonCard";
import Image from "next/image";

export default function Services() {
  return (
    <section id="service" className="min-h-screen py-5 md:py-20 blurry-3">
      <div className="grid gap-10 md:grid-cols-2 md:px-20 xl:grid-cols-3">
        <hgroup className="flex flex-col justify-center space-y-5 font-semibold text-center md:text-start">
          <Slide direction="left">
            <h1 className="text-gradient">Services</h1>
          </Slide>
          <Slide direction="left" delay={30}>
            <p>
              Empowering businesses by harnessing the capabilities of Blockchain
              technology, while leveraging the transformative force of
              decentralization to drive sustainable growth and success.
            </p>
          </Slide>
        </hgroup>
        <Fade delay={100} cascade duration={700}>
          <GlassNeonCard
            description="As project incubator , it is our duty to support the project with the best marketing plan in order to get decent sale during your presale. We also ensure budget effectiveness so you don't have to spend for unnecessary needs."
            title="Incubation Program"
          >
            <Image
              src="/image/icon/incubation.webp"
              alt="incubation"
              width={80}
              height={80}
            />
          </GlassNeonCard>
          <GlassNeonCard
            description="Amplify your project's brand through social media. We specialize in attracting quality buyers and holders while ensuring your presence on top crypto platforms like CoinMarketCap, CoinGecko, and Dextools. Let us help you trend and generate buzz within the community, unlocking unparalleled exposure and paving the path to success."
            title="Social Media & Trending"
          >
            <Image
              src="/image/icon/social-media.webp"
              alt="social media"
              width={80}
              height={80}
            />
          </GlassNeonCard>
          <GlassNeonCard
            description="Experience the future of digital advertising with our Web 3.0 pages. Our innovative solutions leverage the latest technologies to create captivating and interactive experiences for your audience. From dynamic content to seamless user interfaces, we redefine the standards of online advertising."
            title="Web3 Advertising"
          >
            <Image
              src="/image/icon/web3.webp"
              alt="web3"
              width={80}
              height={80}
            />
          </GlassNeonCard>
          <GlassNeonCard
            description="Maximize your project's exposure with our comprehensive press release services, reaching top-tier platforms like Yahoo Finance, Bloomberg, and NASDAQ. Special services include connection to Binance for Live AMA and trending on Altcoin. Access Tier 1 exchange feeds on Binance, Huobi, KuCoin, and Gate.io."
            title="PRESS RELEASE"
          >
            <Image
              src="/image/icon/news.webp"
              alt="news"
              width={80}
              height={80}
            />
          </GlassNeonCard>
          <GlassNeonCard
            description="Explore our Blockchain & Metaverse Development expertise: Smart Contracts, testnet services, mainnet implementation, bridge/DEX/Staking platforms creation. Experience captivating Metaverse offerings: mini games, virtual tours, engaging introductions. Turn your ideas into immersive digital realities with us."
            title="BLOCKCHAIN & METAVERSE DEVELOPMENT"
          >
            <Image
              src="/image/icon/metaverse.webp"
              alt="metaverse"
              width={80}
              height={80}
            />
          </GlassNeonCard>
        </Fade>
      </div>
    </section>
  );
}
