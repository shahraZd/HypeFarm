import { Card } from "@/components/Card";
import services from "pub/data/services.json";
import "./section.css";

const Services = () => {
  return (
    <section className="section bg-black" id="services">
      <div className="container text-center  ">
        <div className="flex flex-col justify-center align-center w-full">
          <h1 className=" mb-12 ">
            Our Digital <br /> Marketing Services
          </h1>
          <p className="services-desc text-xl w-1/2 sm:w-full text-secondary-700 mx-auto">
            Welcome to Hypefarm, your dedicated partner in navigating the
            dynamic landscape of Web3 marketing. As a leading web3 marketing
            agency, we specialize in elevating businesses to new heights through
            our strategic services. Whether you&apos;re a business-to-business
            enterprise, a cryptocurrency pioneer, an NFT trailblazer, or a
            high-growth startup brand, Hypefarm is here to amplify your presence
            in the decentralized digital realm.
          </p>
          {/* <h3 className=" font-medium py-2">Our Digital Marketing Services</h3> */}
        </div>
        <div className=" flex  w-full flex-wrap justify-center align-center  md:grid-cols-3 pt-5 sm:grid-cols-2 xs:grid-cols-1 ">
          <Card services={services} />
        </div>
      </div>
    </section>
  );
};

export default Services;
