import { Avatar, AvatarIcon } from "@nextui-org/react";

import Socials from "./Socials";

export default function PinnedPersonalInfo() {
  return (
    <section className="w-full xl:w-2/5 md:w-3/5 h-[300px] md:h-[600px] flex flex-col justify-evenly items-center">
      <Avatar
        icon={<AvatarIcon />}
        color="primary"
        src="/assets/jossif-profile.png"
        className="w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-[#101017] p-1 ring-2 ring-[#272834] dark:ring-[#272834] text-[#272834] drop-shadow-2xl rounded-full"
      />
      <section>
        <section className="text-lg md:text-2xl lg:text-3xl font-semibold">
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
  );
}
