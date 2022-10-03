import React from "react";
import Image from "next/image";

import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Firebase from "../public/assets/skills/firebase.png";
import Github from "../public/assets/skills/github.png";
import Hardhat from "../public/assets/skills/hardhat.png";
import Javascript from "../public/assets/skills/javascript.png";
import Nextjs from "../public/assets/skills/nextjs.png";
import Node from "../public/assets/skills/node.png";
import Postgresql from "../public/assets/skills/postgresql.png";
import ReactImg from "../public/assets/skills/react.png";
import Sass from "../public/assets/skills/sass.png";
import Sockets from "../public/assets/skills/sockets.png";
import Solidity from "../public/assets/skills/solidity.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Ts from "../public/assets/skills/ts.png";

export default function Skills() {
  return (
    <section id="skills" className="w-full md:mt-28 lg:h-screen p-2">
      <section className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="p-4">What I can do</h2>
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <section className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <section className="grid grid-cols-2 gap-4 justify-center items-center">
              <section className="m-auto">
                <Image src={Html} alt="/" width="64px" height="64px" />
              </section>
              <section className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </section>
            </section>
          </section>
          <section className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <section className="grid grid-cols-2 gap-4 justify-center items-center">
              <section className="m-auto">
                <Image src={Css} alt="/" width="64px" height="64px" />
              </section>
              <section className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </section>
            </section>
          </section>
          <section className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <section className="grid grid-cols-2 gap-4 justify-center items-center">
              <section className="m-auto">
                <Image src={Javascript} alt="/" width="64px" height="64px" />
              </section>
              <section className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </section>
            </section>
          </section>
          <section className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <section className="grid grid-cols-2 gap-4 justify-center items-center">
              <section className="m-auto">
                <Image src={ReactImg} alt="/" width="64px" height="64px" />
              </section>
              <section className="flex flex-col items-center justify-center">
                <h3>REACT</h3>
              </section>
            </section>
          </section>
          <section className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <section className="grid grid-cols-2 gap-4 justify-center items-center">
              <section className="m-auto">
                <Image src={Nextjs} alt="/" width="64px" height="64px" />
              </section>
              <section className="flex flex-col items-center justify-center">
                <h3>NEXT.JS</h3>
              </section>
            </section>
          </section>
          <section className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <section className="grid grid-cols-2 gap-4 justify-center items-center">
              <section className="m-auto">
                <Image src={Node} alt="/" width="64px" height="64px" />
              </section>
              <section className="flex flex-col items-center justify-center">
                <h3>NODE</h3>
              </section>
            </section>
          </section>
          <section className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <section className="grid grid-cols-2 gap-4 justify-center items-center">
              <section className="m-auto">
                <Image src={Solidity} alt="/" width="64px" height="64px" />
              </section>
              <section className="flex flex-col items-center justify-center">
                <h3>SOLIDITY</h3>
              </section>
            </section>
          </section>
          <section className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <section className="grid grid-cols-2 gap-4 justify-center items-center">
              <section className="m-auto">
                <Image src={Hardhat} alt="/" width="64px" height="64px" />
              </section>
              <section className="flex flex-col items-center justify-center">
                <h3>HARDHAT</h3>
              </section>
            </section>
          </section>
          <section className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <section className="grid grid-cols-2 gap-4 justify-center items-center">
              <section className="m-auto">
                <Image src={Tailwind} alt="/" width="64px" height="64px" />
              </section>
              <section className="flex flex-col items-center justify-center">
                <h3>TAILWIND</h3>
              </section>
            </section>
          </section>
          <section className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <section className="grid grid-cols-2 gap-4 justify-center items-center">
              <section className="m-auto">
                <Image src={Ts} alt="/" width="64px" height="64px" />
              </section>
              <section className="flex flex-col items-center justify-center">
                <h3>TYPESCRIPT</h3>
              </section>
            </section>
          </section>
          <section className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <section className="grid grid-cols-2 gap-4 justify-center items-center">
              <section className="m-auto">
                <Image src={Github} alt="/" width="64px" height="64px" />
              </section>
              <section className="flex flex-col items-center justify-center">
                <h3>GITHUB</h3>
              </section>
            </section>
          </section>
          <section className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <section className="grid grid-cols-2 gap-4 justify-center items-center">
              <section className="m-auto">
                <Image src={Sass} alt="/" width="64px" height="64px" />
              </section>
              <section className="flex flex-col items-center justify-center">
                <h3>SASS</h3>
              </section>
            </section>
          </section>
          <section className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <section className="grid grid-cols-2 gap-4 justify-center items-center">
              <section className="m-auto">
                <Image src={Postgresql} alt="/" width="64px" height="64px" />
              </section>
              <section className="flex flex-col items-center justify-center">
                <h3>POSTGRESQL</h3>
              </section>
            </section>
          </section>
          <section className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <section className="grid grid-cols-2 gap-4 justify-center items-center">
              <section className="m-auto">
                <Image src={Firebase} alt="/" width="64px" height="64px" />
              </section>
              <section className="flex flex-col items-center justify-center">
                <h3>FIREBASE</h3>
              </section>
            </section>
          </section>
          <section className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <section className="grid grid-cols-2 gap-4 justify-center items-center">
              <section className="m-auto">
                <Image src={Sockets} alt="/" width="64px" height="64px" />
              </section>
              <section className="flex flex-col items-center justify-center">
                <h3>SOCKETS</h3>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
