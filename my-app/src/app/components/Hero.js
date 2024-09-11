import Link from "next/link";
import Image from "next/image";

import PinnedPersonalInfo from "./PinnedPersonalInfo";
import PinnedVideosProjects from "./PinnedVideosProjects";

export default function Hero() {
  return (
    <section className="w-full h-full flex justify-center mb-20">
      <section className="w-full flex flex-col md:flex-row">
        <PinnedPersonalInfo />
        <section className="w-full">
          <PinnedVideosProjects />
        </section>
      </section>
    </section>
  );
}
