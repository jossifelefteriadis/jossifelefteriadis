import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Site from "./components/Site";

function App() {
  return (
    <BrowserRouter>
      <section className="App">
        <Site />
      </section>
    </BrowserRouter>
  );
}

export default App;
