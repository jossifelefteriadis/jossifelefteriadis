import { Image } from "@nextui-org/react";
import { FaFilm, FaScrewdriverWrench } from "react-icons/fa6";

export default function PinnedVideosProjects() {
  return (
    <section className="xl:w-11/12 md:h-[600px] flex flex-col items-center md:justify-evenly pt-6 md:pt-10">
      <section className="w-fit md:w-full h-[600px] md:h-fit flex flex-col md:flex-row items-center justify-between md:justify-evenly 2xl:justify-between pt-10 md:pb-10 rounded-xl relative">
        <FaFilm className="absolute top-3 left-5 text-xl" />
        <span className="absolute top-2.5 left-12">RECORDINGS</span>
        <a href="https://www.youtube.com/watch?v=WVEqX8DL4KE" target="_blank">
          <Image
            isZoomed
            src="/assets/blur-marketplace.png"
            alt="Blur Marketplace"
            width={300}
            className="md:w-[170px] lg:w-[200px] xl:w-[300px] 2xl:w-[350px] h-44 md:h-24 lg:h-[28] xl:h-40 2xl:h-44 rounded-xl cursor-pointer"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=0NVxgEPoxV8" target="_blank">
          <Image
            isZoomed
            src="/assets/lens-wallet-tracker.png"
            alt="Lens Wallet Tracker"
            width={300}
            className="md:w-[170px] lg:w-[200px] xl:w-[300px] 2xl:w-[350px] h-44 md:h-24 lg:h-[28] xl:h-40 2xl:h-44 rounded-xl cursor-pointer"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=SgtR44Umj1c" target="_blank">
          <Image
            isZoomed
            src="/assets/t3rn-audit.png"
            alt="t3rn Audit"
            width={300}
            className="md:w-[170px] lg:w-[200px] xl:w-[300px] 2xl:w-[350px] h-44 md:h-24 lg:h-[28] xl:h-40 2xl:h-44 rounded-xl cursor-pointer"
          />
        </a>
      </section>
      <section className="w-fit md:w-full h-[600px] md:h-fit flex flex-col md:flex-row items-center justify-between md:justify-evenly 2xl:justify-between pt-10 mt-10 md:mt-0 md:pb-10 rounded-xl relative">
        <FaScrewdriverWrench className="absolute top-3 left-5 text-xl" />
        <span className="absolute top-2.5 left-12">PROJECTS</span>
        <a href="https://stilto.io/" target="_blank">
          <Image
            isZoomed
            src="/assets/projects/stilto.png"
            alt="Stilto"
            width={300}
            className="md:w-[170px] lg:w-[200px] xl:w-[300px] 2xl:w-[350px] h-44 md:h-24 lg:h-[28] xl:h-40 2xl:h-44 rounded-xl cursor-pointer"
          />
        </a>
        <a href="https://fetch-my-nfts-eight.vercel.app/" target="_blank">
          <Image
            isZoomed
            src="/assets/projects/fetchMyNFTs.png"
            alt="Fetch My NFTs"
            width={300}
            className="md:w-[170px] lg:w-[200px] xl:w-[300px] 2xl:w-[350px] h-44 md:h-24 lg:h-[28] xl:h-40 2xl:h-44 rounded-xl cursor-pointer"
          />
        </a>
        <a href="/" target="_blank">
          <Image
            isZoomed
            src="/assets/projects/comingSoon.png"
            alt="Coming soon"
            width={300}
            className="md:w-[170px] lg:w-[200px] xl:w-[300px] 2xl:w-[350px] h-44 md:h-24 lg:h-[28] xl:h-40 2xl:h-44 rounded-xl cursor-pointer"
          />
        </a>
      </section>
    </section>
  );
}
