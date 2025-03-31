import React from "react";
import Navbar from "./components/navbar";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./HomePage";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import WorkExperience from "./sections/WorkExperience";
import Hobbies from "./sections/Hobbies";
import Projects from "./sections/Projects";


const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Projects />
      <WorkExperience />
      <Skills />
      <Education />
      <Hobbies /> 
      <Contact />
      <ScrollToTop/>
    </div>
  );
};

export default App;
