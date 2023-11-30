import { Card } from "@/components/Card";
import services from "pub/data/services.json";
import "./services.css";

const Services = () => {
  return (
    <section className="services-section bg-black" id="services">
      <div className="container">
        <div className="mb-20 ">
          <h1 className="services-title text-6xl text-black sm:text-4xl font-medium mb-12 ">
            Our Digital <br /> Marketing Services
          </h1>
          <p className="services-desc text-xl w-1/2 sm:w-full text-secondary-700">
            Welcome to Hypefarm, your dedicated partner in navigating the
            dynamic landscape of Web3 marketing. As a leading web3 marketing
            agency, we specialize in elevating businesses to new heights through
            our strategic services. Whether you&apos;re a business-to-business
            enterprise, a cryptocurrency pioneer, an NFT trailblazer, or a
            high-growth startup brand, Hypefarm is here to amplify your presence
            in the decentralized digital realm.
          </p>
        </div>
        <div className=" flex w-full flex-wrap justify-center align-center  grid-cols-3 ">
          <Card services={services} />
        </div>
      </div>
    </section>
  );
};

export default Services;
