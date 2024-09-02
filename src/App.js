import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-10 md:px-16">
        
      <Navbar />
      <Banner />
      <Features />
      <Projects />
      <Resume />
      <Testimonial />
      <Contact />
      <Footer />

      </div>
    </div>
    
  );
}

export default App;
