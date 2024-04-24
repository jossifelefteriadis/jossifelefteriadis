import { Image } from "@nextui-org/react";
import { FaFilm, FaScrewdriverWrench } from "react-icons/fa6";

export default function PinnedVideos() {
  return (
    <section className="w-11/12 h-[600px] flex flex-col justify-evenly pt-10">
      <section className="flex justify-evenly py-10 rounded-xl relative">
        <FaFilm className="absolute top-3 left-5 text-xl" />
        <span className="absolute top-2.5 left-12">RECORDINGS</span>
        <a href="https://www.youtube.com/watch?v=WVEqX8DL4KE" target="_blank">
          <Image
            isZoomed
            src="/assets/blur-marketplace.png"
            alt="Blur Marketplace"
            width={300}
            className="rounded-xl cursor-pointer"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=0NVxgEPoxV8" target="_blank">
          <Image
            isZoomed
            src="/assets/lens-wallet-tracker.png"
            alt="Lens Wallet Tracker"
            width={300}
            className="rounded-xl cursor-pointer"
          />
        </a>
        <a href="https://www.youtube.com/watch?v=SgtR44Umj1c" target="_blank">
          <Image
            isZoomed
            src="/assets/t3rn-audit.png"
            alt="t3rn Audit"
            width={300}
            className="rounded-xl cursor-pointer"
          />
        </a>
      </section>
      <section className="flex justify-evenly py-10 rounded-xl relative">
        <FaScrewdriverWrench className="absolute top-3 left-5 text-xl" />
        <span className="absolute top-2.5 left-12">PROJECTS</span>
        <Image
          isZoomed
          src="/assets/blur-marketplace.png"
          alt="Blur Marketplace"
          width={300}
          className="rounded-xl cursor-pointer"
        />
        <Image
          isZoomed
          src="/assets/t3rn-audit.png"
          alt="t3rn Audit"
          width={300}
          className="rounded-xl cursor-pointer"
        />
        <Image
          isZoomed
          src="/assets/blur-marketplace.png"
          alt="Blur Marketplace"
          width={300}
          className="rounded-xl cursor-pointer"
        />
      </section>
    </section>
  );
}
