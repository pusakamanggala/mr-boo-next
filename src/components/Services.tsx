"use client";

import { Fade, Slide } from "react-awesome-reveal";
import { GlassNeonCard } from "./GlassNeonCard";

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
        <Fade delay={300}>
          <GlassNeonCard
            description="Mr.Boo marketing incubation works only if you are planning to list
            your project on Pinksale, we are working with Verified pinksale
            incubator to maximize the fundraise for Presale and Fairlaunch. Our
            focus is to help the project to raise funds as much as possible so
            it will be great for project liquidity in the future (also for
            upcoming marketing and operational)."
            title="Incubation Program"
          >
            <div className="w-20 h-20 bg-white rounded-full">ICON</div>
          </GlassNeonCard>
        </Fade>
        <Fade delay={600}>
          <GlassNeonCard
            description="Amplify your project's brand through social media. We specialize in attracting quality buyers and holders while ensuring your presence on top crypto platforms like CoinMarketCap, CoinGecko, and Dextools. Let us help you trend and generate buzz within the community, unlocking unparalleled exposure and paving the path to success."
            title="Social Media & Trending"
          >
            <div className="w-20 h-20 bg-white rounded-full">ICON</div>
          </GlassNeonCard>
        </Fade>
        <Fade delay={900}>
          <GlassNeonCard
            description="Experience the future of digital advertising with our Web 3.0 pages. Our innovative solutions leverage the latest technologies to create captivating and interactive experiences for your audience. From dynamic content to seamless user interfaces, we redefine the standards of online advertising."
            title="Web3 Advertising"
          >
            <div className="w-20 h-20 bg-white rounded-full">ICON</div>
          </GlassNeonCard>
        </Fade>
        <Fade delay={1200}>
          <GlassNeonCard
            description="Maximize your project's exposure with our comprehensive press release services, reaching top-tier platforms like Yahoo Finance, Bloomberg, and NASDAQ. Special services include connection to Binance for Live AMA and trending on Altcoin. Access Tier 1 exchange feeds on Binance, Huobi, KuCoin, and Gate.io."
            title="PRESS RELEASE"
          >
            <div className="w-20 h-20 bg-white rounded-full">ICON</div>
          </GlassNeonCard>
        </Fade>
        <Fade delay={1500}>
          <GlassNeonCard
            description="Explore our Blockchain & Metaverse Development expertise: Smart Contracts, testnet services, mainnet implementation, bridge/DEX/Staking platforms creation. Experience captivating Metaverse offerings: mini games, virtual tours, engaging introductions. Turn your ideas into immersive digital realities with us."
            title="BLOCKCHAIN & METAVERSE DEVELOPMENT"
          >
            <div className="w-20 h-20 bg-white rounded-full">ICON</div>
          </GlassNeonCard>
        </Fade>
      </div>
    </section>
  );
}
