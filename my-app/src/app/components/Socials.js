import { SiFarcaster } from "react-icons/si";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

export default function Socials() {
  return (
    <section className="w-full flex justify-between items-center">
      <a href="https://warpcast.com/jossif" target="_blank">
        <SiFarcaster className="text-lg md:text-3xl cursor-pointer hover:scale-110 ease-in duration-200" />
      </a>
      <a href="https://twitter.com/ElefteriadisJ" target="_blank">
        <FaXTwitter className="text-lg md:text-3xl cursor-pointer hover:scale-110 ease-in duration-200" />
      </a>
      <a href="https://www.linkedin.com/in/jossifelefteriadis/" target="_blank">
        <FaLinkedinIn className="text-lg md:text-3xl cursor-pointer hover:scale-110 ease-in duration-200" />
      </a>
      <a href="https://github.com/jossifelefteriadis" target="_blank">
        <FaGithub className="text-lg md:text-3xl cursor-pointer hover:scale-110 ease-in duration-200" />
      </a>
      <FaEnvelope className="text-lg md:text-3xl cursor-pointer hover:scale-110 ease-in duration-200" />
    </section>
  );
}
