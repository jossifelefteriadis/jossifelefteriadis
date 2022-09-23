import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

import Logo from "../public/assets/je.png";

export default function Nav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <section className="fixed w-full h-20 shadow-xl z-[100]">
      <section className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={Logo} alt="/" width="125" height="50" />
        {/* <Link href="/">
          <h2>
            <span>JOSSIF</span>
            <span>ELEFTERIADIS</span>
          </h2>
        </Link> */}
        <section>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-bottom">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-bottom">
                About
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-bottom">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-bottom">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-bottom">
                Contact
              </li>
            </Link>
          </ul>
          <section onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </section>
        </section>
      </section>
      <section
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <section
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <section>
            <section className="flex w-full items-center justify-between">
              <Image src={Logo} alt="/" width="87" height="35" />
              <section
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </section>
            </section>
            <section className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w[90%] py-4">
                Let's build something legendary together
              </p>
            </section>
          </section>
          <section className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <section className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Lets'Connect
              </p>
              <section className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <section className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </section>
                <section className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </section>
                <section className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </section>
                <section className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
