// eslint-disable-next-line no-unused-vars
import React from "react";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Tecnologies from "./components/tecnologies/Tecnologies";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const techSkills = [
    "React",
    "JavaScript",
    "Node.js",
    "HTML",
    "CSS",
    "Express",
    "Bootstrap",
    "Tailwind",
    "Sequelize",
    "PostgreSQL",
    "MySQL",
    "Git",
    "Github",
    "Trello",
    "Postman",
    "XAAMP",
  ];

  return (
    <>
      <Landing />
      <About />
      <Tecnologies techSkills={techSkills} />
      <Projects />
      <Contact />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
