import Hero from "./Hero";
import Services from "../../sections/services";
import CTA from "./CTA";
import Contact from "../../sections/Contact";
import Testimonials from "./Testimonials";
import About from "./About";
import FAQ from "./FAQ";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <CTA />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
