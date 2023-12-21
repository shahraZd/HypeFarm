import "./section.css";

const About = () => {
  return (
    <section
      id="company"
      className="text-white bg-secondary-100 dark:bg-gray-900 "
    >
      <div className="container">
        <h1 className="mb-12">
          <span className="text-5xl">About HypeFarm </span>
        </h1>
        <p className="w-1/2 mx-auto mt-2">
          Welcome to HypeFarm, your gateway to unparalleled success in the
          dynamic realm of Web3 marketing. As a premier marketing agency, we
          specialize in crafting innovative strategies for blockchain projects
          and decentralized applications. At HypeFarm, we are more than just
          marketers; we are architects of success, guiding businesses through
          the intricacies of the decentralized future.
        </p>
      </div>
    </section>
  );
};

export default About;
