import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from '@emailjs/browser'

import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

import Profile from "../public/assets/profile.jpeg";

export default function Contact() {
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const form = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target , PUBLIC_KEY)
      .then((result) => {
          console.log(`Message was send successfully: ${result.text}`);
      }, (error) => {
          console.log(`Message was not sent successfully: ${error.text}`);
      });
    e.target.reset();
  }

  return (
    <section id="contact" className="w-full lg:h-screen">
      <section className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <section className="grid lg:grid-cols-5 gap-8">
          <section className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <section className="lg:p-4 h-full">
              <section>
                <Image
                  src={Profile}
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  alt="/"
                  width="550px"
                  height="550px"
                />
              </section>
              <section>
                <h2 className="py-2">Jossif Elefteriadis</h2>
                <p>Fullstack Developer</p>
                <p className="py-4">
                  I am available for frontend, fullstack, and blockchain
                  opportunities. Contact me and lets talk.
                </p>
              </section>
              <section>
                <p className="uppercase pt-8">Connect with me</p>
                <section className="flex items-center justify-between py-4">
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

          <section className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <section className="p-4">
              <form ref={form} onSubmit={handleSubmit}>
                <section className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <section className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </section>
                  <section className="flex flex-col">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                      name="email"
                    />
                  </section>
                </section>
                <section className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </section>
                <section className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                  ></textarea>
                </section>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
