import React from "react";
import { Routes, Route } from "react-router-dom";

import Opener from "./Opener";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import VirusEscapePrivacyPolicy from "./VirusEscapePP";

export default class Body extends React.Component {
  render() {
    return (
      <section className="Container">
        <Routes>
          <Route
            path="/virus-escape-privacy-policy"
            element={<VirusEscapePrivacyPolicy />}
          />
          <Route
            path="/"
            element={
              <>
                <Opener />
                <Skills />
                <About />
                <Contact />
              </>
            }
          />
        </Routes>
      </section>
    );
  }
}
