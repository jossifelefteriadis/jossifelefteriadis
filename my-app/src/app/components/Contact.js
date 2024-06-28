"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@nextui-org/react";

import Socials from "./Socials";

export default function Contact() {
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(
      (result) => {
        console.log(`Message was send successfully: ${result.text}`);
      },
      (error) => {
        console.log(`Message was not sent successfully: ${error}`);
      }
    );
    e.target.reset();
  };

  return (
    <section id="contact" className="flex flex-col items-center mt-32">
      <section className="w-2/3">
        <form ref={form} onSubmit={handleSubmit}>
          <section className="grid md:grid-cols-2 gap-4 w-full py-2">
            <section className="flex flex-col">
              <label className="uppercase text-sm py-2">Name</label>
              <input
                className="text-black border-2 rounded-lg p-3 flex border-gray-300 outline-none"
                type="text"
                name="name"
              />
            </section>
            <section className="flex flex-col">
              <label className="uppercase text-sm py-2">Email</label>
              <input
                className="text-black border-2 rounded-lg p-3 flex border-gray-300 outline-none"
                type="email"
                name="email"
              />
            </section>
          </section>
          <section className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Subject</label>
            <input
              className="text-black border-2 rounded-lg p-3 flex border-gray-300 outline-none"
              type="text"
              name="subject"
            />
          </section>
          <section className="flex flex-col py-2">
            <label className="uppercase text-sm py-2">Message</label>
            <textarea
              className="text-black border-2 rounded-lg p-3 border-gray-300 outline-none"
              rows="10"
              name="message"
            ></textarea>
          </section>
          <Button
            fullWidth={true}
            size="lg"
            type="submit"
            className="bg-gradient-to-r from-[#aafff8] to-[#e1b1fc] text-xl font-bold text-gray-900 mt-4 rounded-xl outline-none"
          >
            Send Message
          </Button>
        </form>
      </section>
      <section className="w-60 mt-10 mb-20">
        <Socials />
      </section>
    </section>
  );
}
