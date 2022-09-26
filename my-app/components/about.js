import React from "react";
import Image from "next/image";
import Link from "next/link";

import Profile from "../public/assets/profile.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <section className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <section className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            I've always been very passionate about software development and
            engineering, because of possibilities that tech industry gives me
            while developing simple solutions to complex problems. The
            motivation to learn new concepts has given me lot of experience in
            Javascript, React, Node, Google Cloud Platform while developing
            Fullstack applications.
          </p>
          <p className="py-2 text-gray-600">
            I strongly believe smart contracts along with Blockchain technology
            will change the Internet for the better. I find myself extremely
            passionate working with blockchain technologies like Ethereum smart
            contracts written in solidity and have gained a lot of experience
            while developing fullstack applications during my journey.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </section>
        <section className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src={Profile}
            className="rounded-xl"
            alt="Profile image"
            width="550"
            height="550"
          />
        </section>
      </section>
    </section>
  );
}