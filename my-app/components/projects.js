import React from "react";

import Lw3Dao from "../public/assets/projects/lw3-dao.png";
import MyNft from "../public/assets/projects/mynft.png";

import ProjectItem from "../components/projectItem";

export default function Projects() {
  return (
    <section id="projects" className="w-full">
      <section className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <section className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="LW3 DAO"
            backgroundImg={Lw3Dao}
            projectUrl="/lw3dao"
            technologies="Next JS / Tailwind / Solidity"
          />
          <ProjectItem
            title="MY NFT"
            backgroundImg={MyNft}
            projectUrl="/mynft"
            technologies="Next JS / Polygon / Moralis API"
          />
        </section>
      </section>
    </section>
  );
}
