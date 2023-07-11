import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
import Certificates from "./components/certificates/Certificates";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
    // <div>App</div>
    <>
        
        <Nav/>
        <Header/>
        <About/>
        <Experience/>
        <Education/>
        <Projects/>
        <Certificates/>
        <Contact/>
        <Footer/>
    </>
    )
}

export default App