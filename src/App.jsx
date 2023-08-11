// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Tecnologies from "./components/tecnologies/Tecnologies";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const techSkills = ["React", "JavaScript", "Node.js", "HTML", "CSS"];

  return (
    <>
      <Landing />
      <About />
      <Tecnologies techSkills={techSkills} />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
