import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

import MyNft from "../public/assets/projects/mynft.png";

export default function Mynft() {
  return (
    <section className="w-full">
      <section className="w-screen h-[50vh] relative">
        <section className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={MyNft}
          alt="/"
        />
        <section className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">MY NFT</h2>
          <h3>Next JS / Polygon / Moralis API</h3>
        </section>
      </section>
      <section className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <section className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I built this application in Next JS, hosted on Github, and deployed
            to Vercel. The purpose of this app is to demonstrate my knowledge
            working with Next JS, the Polygon network, and accessing API
            endpoints. I&apos;ve also used RainbowKit, ethers.js and wagmi for
            connecting wallet interacting with the network.
            <br />
            <br />
            Walkthrough: When user connects their wallet, their Polygon based
            NFTs get fetched using Moralis API, and then displayed on the
            website.
          </p>
          <a
            href="https://fetch-my-nfts-eight.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/jossifelefteriadis/fetch-my-nfts"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </section>
        <section className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <section className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <section className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next JS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Polygon Network
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Moralis API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                RainbowKit
              </p>
            </section>
          </section>
        </section>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </section>
    </section>
  );
}
