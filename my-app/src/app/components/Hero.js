import Link from "next/link";
import Image from "next/image";

import PinnedPersonalInfo from "./PinnedPersonalInfo";
import PinnedVideos from "./PinnedVideos";

export default function Hero() {
  return (
    <section className="w-full h-full flex justify-center">
      <section className="w-full flex flex-col md:flex-row">
        <PinnedPersonalInfo />
        <section className="w-full">
          <PinnedVideos />
        </section>
      </section>
    </section>
  );
}
