import About from "../../sections/about";
import { Card } from "../../components/Card";
import aboutData from "pub/data/about.json";

const AboutPage = () => {
  return (
    <div className="sub-page">
      <About />
      <div className="  w-full flex-wrap justify-center align-center grid  grid-cols-4 pt-5 sm:grid-cols-2 xs:grid-cols-1">
        <Card services={aboutData} />
      </div>
      <p className="lead">
        Ready to redefine your Web3 marketing strategy? Join HypeFarm, where
        innovation meets success. Contact us today and let&apos;s carve a path
        to excellence in the decentralized frontier.
      </p>
    </div>
  );
};

export default AboutPage;
