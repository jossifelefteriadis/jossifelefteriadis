import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

import Lw3Dao from "../public/assets/projects/lw3-dao.png";

export default function Lw3dao() {
  return (
    <section className="w-full pt-20">
      <section className="w-screen h-[50vh] relative">
        <section className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Lw3Dao}
          alt="/"
        />
        <section className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">LW3 DAO</h2>
          <h3>Next JS / Tailwind / Solidity</h3>
        </section>
      </section>
      <section className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <section className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This application was built by myself and 3 other developers as a 36
            hour hackathon project using Next JS, Solidity, and Tailwind. It&apos;s
            hosted on Github and deployed to Vercel. LW3 DAO is an online
            community helping web2 developers move into the web3 space - it&apos;s an
            open source community I&apos;ve been contributing to. The application
            we&apos;ve built in the hackathon is for this community, and is also
            called LW3 DAO. <br />
            <br />
            Our goal was to have functionality for the user to connect their
            wallet, create proposals to vote on, and also being able to vote on
            current proposals.
            <br />
            <br />
            My participation included creating most of the frontend part in Next
            JS, using Tailwind to style the app, use Thirdweb for wallet
            connection, Moralis API to fetch users owned NFTs (this to give them
            specific voting powers depending on their NFTs), and also writing
            parts of the smart contract in Solidity, for creating a proposal.
          </p>
          <a
            href="https://lw3-dao-flax.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/jossifelefteriadis/lw3-dao"
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
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Solidity
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Thirdweb
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Vercel
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
