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
      <SiFarcaster />
      <FaXTwitter />
      <FaLinkedinIn />
      <FaGithub />
      <FaEnvelope />
    </section>
  );
}
