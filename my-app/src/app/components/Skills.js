import { User } from "@nextui-org/react";

export default function Skills() {
  return (
    <section className="w-2/6 flex flex-col items-start space-y-4">
      <h2 className="w-full text-xl">
        Skills here - techstack I&apos;m using or used
      </h2>
      <User
        name="javascript"
        avatarProps={{
          src: "/assets/skills/javascript.png",
        }}
      />
      <User
        name="nextjs"
        avatarProps={{
          src: "/assets/skills/nextjs.png",
        }}
      />
      <User
        name="node"
        avatarProps={{
          src: "/assets/skills/node.png",
        }}
      />
      <User
        name="tailwindcss"
        avatarProps={{
          src: "/assets/skills/tailwind.png",
        }}
      />
      <User
        name="react"
        avatarProps={{
          src: "/assets/skills/react.png",
        }}
      />
      <User
        name="solidity"
        avatarProps={{
          src: "/assets/skills/solidity.png",
        }}
      />
      <User
        name="hardhat"
        avatarProps={{
          src: "/assets/skills/hardhat.png",
        }}
      />
      <User
        name="github"
        avatarProps={{
          src: "/assets/skills/github.png",
        }}
      />
      <User
        name="typescript"
        avatarProps={{
          src: "/assets/skills/ts.png",
        }}
      />
      <User
        name="html"
        avatarProps={{
          src: "/assets/skills/html.png",
        }}
      />
      <User
        name="css"
        avatarProps={{
          src: "/assets/skills/css.png",
        }}
      />
      <User
        name="sass"
        avatarProps={{
          src: "/assets/skills/sass.png",
        }}
      />
      <User
        name="postgresql"
        avatarProps={{
          src: "/assets/skills/postgresql.png",
        }}
      />
      <User
        name="firebase"
        avatarProps={{
          src: "/assets/skills/firebase.png",
        }}
      />
    </section>
  );
}
