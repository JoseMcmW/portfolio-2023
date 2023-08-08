// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import Landing from "./components/landing/Landing";
import Tecnologies from "./components/tecnologies/Tecnologies";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css"


function App() {
  const refs = {
    tecnologies: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  }

  const techSkills = ["React", "JavaScript", "Node.js", "HTML", "CSS"];

  return (
    <ParallaxProvider>
      <Landing
        tecnologies={refs.tecnologies}
        projects={refs.projects}
        contact={refs.contact}
      />
      <Tecnologies ref={refs.tecnologies}   techSkills={techSkills}/>
      <Projects ref={refs.projects}/>
      <Contact ref={refs.contact}/>
      <Footer/>
    </ParallaxProvider>
  )
}

export default App
