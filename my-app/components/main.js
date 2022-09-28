import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

export default function Main() {
  return (
    <section id="home" className="w-full h-screen text-center">
      <section className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <section>
          <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#5651e5]">Jossif</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Fullstack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I&apos;m focused on building responsive frontend applications with a well
            structured and reusable backend. <br />
            <br />I strongly believe smart contracts along with Blockchain
            technology will change the Internet for the better. I find myself
            extremely passionate working with blockchain technologies like
            Ethereum smart contracts written in solidity.
          </p>
          <section className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/jossifelefteriadis/"
              target="_blank"
              rel="noreferrer"
            >
              <section className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </section>
            </a>
            <a
              href="https://github.com/jossifelefteriadis"
              target="_blank"
              rel="noreferrer"
            >
              <section className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </section>
            </a>
            <a
              href="https://twitter.com/ElefteriadisJ"
              target="_blank"
              rel="noreferrer"
            >
              <section className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaTwitter />
              </section>
            </a>
            <Link href="/#contact">
              <section className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </section>
            </Link>
          </section>
        </section>
      </section>
    </section>
  );
}
