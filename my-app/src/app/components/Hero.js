import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarIcon } from "@nextui-org/react";

export default function Hero() {
  return (
    <section className="w-full flex justify-center py-24">
      <section className="w-full flex flex-col md:flex-row items-center">
        <section className="w-1/2 flex justify-center md:justify-end">
          <Avatar
            icon={<AvatarIcon />}
            color="primary"
            src=""
            className="w-96 h-96 bg-[#101017] p-1 ring-2 ring-[#272834] dark:ring-[#272834] text-[#272834] drop-shadow-2xl rounded-full"
          />
          {/* <section className=" w-36 h-42 bg-contain drop-shadow-2xl p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500">
            s
          </section> */}
        </section>
        <section className="w-full bg-red-300">hej</section>
      </section>
    </section>
  );
}
