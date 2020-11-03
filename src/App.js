import React from "react";
import "./App.css";

import Section from "./components/Section";
import Logo from "./assets/Images/Netflix-logo.jpg";
import show from "./assets/show.json";

function App() {
  return (
    <>
      <div className="logo">
        <img alt="Netflix-logo" src={Logo} />
      </div>

      <Section show={show} />
    </>
  );
}

export default App;
