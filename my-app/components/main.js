import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Main() {
  return (
    <section className="w-full h-screen text-center">
      <section className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <section>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LETS BUILD SOMETHING
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Jossif</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Fullstack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <section className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <section className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </section>
            <section className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </section>
            <section className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </section>
            <section className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
