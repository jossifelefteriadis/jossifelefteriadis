import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({
  title,
  backgroundImg,
  projectUrl,
  technologies,
}) {
  return (
    <section className="relative flex items-center justify-center h-auto w-ull shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        src={backgroundImg}
        className="rounded-xl group-hover:opacity-10"
        alt="LW3 DAO image"
      />
      <section className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{technologies}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </section>
    </section>
  );
}
