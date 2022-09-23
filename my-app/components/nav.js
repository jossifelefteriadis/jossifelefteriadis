import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <section className="fixed w-full h-20 shadow-xl z-[100]">
      <section className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <h2>
            <span>JOSSIF</span>
            <span>ELEFTERIADIS</span>
          </h2>
        </Link>
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
        </section>
      </section>
    </section>
  );
}
