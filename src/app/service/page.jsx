"use client";
import Services from "../../sections/services";
import services from "pub/data/services.json";
import { Typography } from "antd";
import Image from "next/image";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

const ServicesPage = () => {
  return (
    <div className="sub-page">
      <div className="text-center m-5">
        <h1 className=" mb-12 ">
          Our Digital <br /> Marketing Services
        </h1>
        <p className=" text-xl w-1/2 mx-auto text-secondary-700">
          Welcome to Hypefarm, your dedicated partner in navigating the dynamic
          landscape of Web3 marketing. As a leading web3 marketing agency, we
          specialize in elevating businesses to new heights through our
          strategic services. Whether you&apos;re a business-to-business
          enterprise, a cryptocurrency pioneer, an NFT trailblazer, or a
          high-growth startup brand, Hypefarm is here to amplify your presence
          in the decentralized digital realm.
        </p>
      </div>
      {services.map((e, i) => (
        <div className="service-item" key={i}>
          <div className="service-item-img">
            <Image
              alt={e.title}
              decoding="async"
              data-src={e.pic}
              className=" lazyloaded"
              src={e.pic}
              width={250}
              height={e.size.height}
            />
          </div>
          <div className="service-item-txt font-medium">
            <Title level={1}>{e.title}</Title>

            <p>{e.content}</p>
            <Link href={e.link} target="_blank" className="text-xl">
              Learn more...
            </Link>
          </div>
        </div>
      ))}

      <p className="lead">
        Join Hypefarm on the journey to redefine Web3 marketing. Let&apos;s
        elevate your brand, engage your audience, and cultivate success in the
        decentralized future. Contact us today to embark on this exciting
        venture together.
      </p>
    </div>
  );
};
export default ServicesPage;
