import Image from "next/image";

export default function Partnerships() {
  const listingPartners = [
    {
      img: "bitget.webp",
      name: "Bitget",
    },
    {
      img: "bitmart.webp",
      name: "Bitmart",
    },
    {
      img: "bkex.webp",
      name: "BKEX",
    },
    {
      img: "coingecko.webp",
      name: "CoinGecko",
    },
    {
      img: "CoinMarketCap.webp",
      name: "CoinMarketCap",
    },
    {
      img: "cointigerlogo.webp",
      name: "Cointiger",
    },
    {
      img: "consbit.webp",
      name: "Consbit",
    },
    {
      img: "latokenlogo.webp",
      name: "Latoken",
    },
    {
      img: "lbanklogo.webp",
      name: "Lbank",
    },
    {
      img: "mexclogo.webp",
      name: "Mexc",
    },
    {
      img: "okx.webp",
      name: "Okx",
    },
    {
      img: "Poloniex.webp",
      name: "Poloniex",
    },
    {
      img: "solidproof.webp",
      name: "Solidproof",
    },
    {
      img: "xt.webp",
      name: "XT",
    },
  ];

  const exclusivePartners = [
    {
      img: "bnw.webp",
      name: "BNW",
    },
    {
      img: "dexview.webp",
      name: "dexview",
    },
    {
      img: "louiz-holding.webp",
      name: "Louiz Holding",
    },
    {
      img: "magilounge.webp",
      name: "Magi Lounge",
    },
    {
      img: "mitch-club.webp",
      name: "Mitch Club",
    },
    {
      img: "partner-1.webp",
      name: "Partner 1",
    },
    {
      img: "partner-2.webp",
      name: "Partner 2",
    },
    {
      img: "partner-3.webp",
      name: "Partner 3",
    },
    {
      img: "partner-4.webp",
      name: "Partner 4",
    },
    {
      img: "partner-5.webp",
      name: "Partner 5",
    },
    {
      img: "partner-6.webp",
      name: "Partner 6",
    },
    {
      img: "pinksale.webp",
      name: "Pink Sale",
    },
    {
      img: "sonic-whale-calls.webp",
      name: "Sonic Whale Calls",
    },
  ];

  return (
    <section
      id="partnership"
      className="py-5 space-y-10 md:flex-row md:py-20 md:mx-10 blurry-1"
    >
      <hgroup className="space-y-5 text-center mb-28">
        <h1 className="text-gradient">Partnerships</h1>
        <p>
          Unlocking Success Through Strategic Alliances and Collaborative
          Endeavors
        </p>
      </hgroup>
      <div className="grid gap-20 md:gap-10 md:divide-x-2 md:grid-cols-2 md:divide-secondary">
        <div className="space-y-5">
          <h2 className="flex flex-col pb-5 font-medium text-center text-gradient gap-y-3 md:gap-y-0">
            Listing <span>Partners</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-7">
            {listingPartners &&
              listingPartners.map((partner, index) => (
                <div key={index} className="h-5 md:h-8 lg:h-10 ">
                  <Image
                    src={"/image/listing-partner/" + partner.img}
                    alt={partner.name}
                    className="object-contain h-full mx-auto"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", minHeight: "100%" }}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="space-y-5">
          <h2 className="flex flex-col pb-5 font-medium text-center text-gradient gap-y-3 md:gap-y-0">
            Exclusive <span>Partners</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-7">
            {exclusivePartners &&
              exclusivePartners.map((partner, index) => (
                <div key={index} className="h-12 md:h-20 lg:h-24 ">
                  <Image
                    src={"/image/exclusive-partner/" + partner.img}
                    alt={partner.name}
                    className="object-contain h-full mx-auto"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "auto", minHeight: "100%" }}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
