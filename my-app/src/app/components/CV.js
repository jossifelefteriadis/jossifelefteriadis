import ClientsAndEmployers from "./ClientsAndEmployers";
import Skills from "./Skills";
import TechInterests from "./TechInterests";

export default function CV() {
  return (
    <section className="flex flex-col lg:flex-row justify-evenly mt-32">
      {/* <p>
        CV similar section with clients and employers/tech interest/techstack
        I&apos;m using or used
      </p> */}
      <ClientsAndEmployers />
      <Skills />
      <TechInterests />
    </section>
  );
}
