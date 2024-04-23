import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarIcon } from "@nextui-org/react";

import Socials from "./Socials";

export default function Hero() {
  return (
    <section className="w-full flex justify-center">
      <section className="w-full flex flex-col md:flex-row items-center">
        <section className="w-1/2 h-[600px] flex flex-col justify-evenly items-center">
          <Avatar
            icon={<AvatarIcon />}
            color="primary"
            src=""
            className="w-64 h-64 bg-[#101017] p-1 ring-2 ring-[#272834] dark:ring-[#272834] text-[#272834] drop-shadow-2xl rounded-full"
          />
          <section>
            <section className="text-3xl font-semibold">
              Jossif Elefteriadis
            </section>
            <section className="w-fit bg-[#141414] my-2 py-1 px-4 text-lg">
              <span className="bg-gradient-to-r from-[#aafff8] to-[#e1b1fc] inline-block text-transparent bg-clip-text">
                DevRel @ t3rn
              </span>
            </section>
            <section className="mt-3">
              <Socials />
            </section>
          </section>
        </section>
        <section className="w-full">carousel here</section>
      </section>
    </section>
  );
}
