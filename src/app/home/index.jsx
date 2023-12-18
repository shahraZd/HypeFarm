import Hero from "./Hero";
import Services from "../../sections/services";
import CTA from "./CTA";
import Contact from "../../sections/contactSection";
import Testimonials from "./Testimonials";
import About from "../../sections/about";
import FAQ from "./FAQ";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <CTA />
      <section
        id="company"
        className="bg-primary-1000 w-full text-center align-center text-white  flex flex-col justify-center align-center px-7"
      >
        <About />
      </section>
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
