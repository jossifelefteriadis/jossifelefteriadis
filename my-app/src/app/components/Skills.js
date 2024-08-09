import { User } from "@nextui-org/react";

export default function Skills() {
  return (
    <section className="w-full lg:w-2/6 flex flex-col lg:items-start mt-10 lg:mt-0 pl-8 lg:pl-0 space-y-4">
      <h2 className="w-full text-xl">Techstack I&apos;m using or used</h2>
      <section className="flex items-center">
        <User
          avatarProps={{
            src: "/assets/skills/javascript.png",
          }}
        />
        <span className="text-lg">javascript</span>
      </section>
      <section className="flex items-center">
        <User
          avatarProps={{
            src: "/assets/skills/nextjs.png",
          }}
        />
        <span className="text-lg">nextjs</span>
      </section>
      <section className="flex items-center">
        <User
          avatarProps={{
            src: "/assets/skills/node.png",
          }}
        />
        <span className="text-lg">node</span>
      </section>
      <section className="flex items-center">
        <User
          avatarProps={{
            src: "/assets/skills/tailwind.png",
          }}
        />
        <span className="text-lg">tailwindcss</span>
      </section>
      <section className="flex items-center">
        <User
          avatarProps={{
            src: "/assets/skills/react.png",
          }}
        />
        <span className="text-lg">react</span>
      </section>
      <section className="flex items-center">
        <User
          avatarProps={{
            src: "/assets/skills/solidity.png",
          }}
        />
        <span className="text-lg">solidity</span>
      </section>
      <section className="flex items-center">
        <User
          avatarProps={{
            src: "/assets/skills/hardhat.png",
          }}
        />
        <span className="text-lg">hardhat</span>
      </section>
      <section className="flex items-center">
        <User
          avatarProps={{
            src: "/assets/skills/github.png",
          }}
        />
        <span className="text-lg">github</span>
      </section>
      <section className="flex items-center">
        <User
          avatarProps={{
            src: "/assets/skills/ts.png",
          }}
        />
        <span className="text-lg">typescript</span>
      </section>
      <section className="flex items-center">
        <User
          avatarProps={{
            src: "/assets/skills/html.png",
          }}
        />
        <span className="text-lg">html</span>
      </section>
      <section className="flex items-center">
        <User
          avatarProps={{
            src: "/assets/skills/css.png",
          }}
        />
        <span className="text-lg">css</span>
      </section>
      <section className="flex items-center">
        <User
          avatarProps={{
            src: "/assets/skills/sass.png",
          }}
        />
        <span className="text-lg">sass</span>
      </section>
      <section className="flex items-center">
        <User
          avatarProps={{
            src: "/assets/skills/postgresql.png",
          }}
        />
        <span className="text-lg">postgresql</span>
      </section>
      <section className="flex items-center">
        <User
          avatarProps={{
            src: "/assets/skills/firebase.png",
          }}
        />
        <span className="text-lg">firebase</span>
      </section>
    </section>
  );
}
