import About from "../../sections/about";
import { Card } from "../../components/Card";
import aboutData from "pub/data/about.json";

const AboutPage = () => {
  return (
    <section>
      <About />
      <Card services={aboutData} />
    </section>
  );
};

export default AboutPage;
