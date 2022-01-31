import React from "react";
// import { Route } from "react-router-dom";

import Opener from "./Opener";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import VirusEscapePrivacyPolicy from "./VirusEscapePP";

const Body = () => (
  <section className="Container">
    <Opener />
    <Skills />
    <About />
    <Contact />
    {/* <Route path="/virus-escape-privacy-policy">
      <VirusEscapePrivacyPolicy />
    </Route> */}
  </section>
);

export default Body;
