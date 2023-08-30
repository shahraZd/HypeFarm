"use client";
import Accordion from "@/components/Accordion";
import faq from "pub/faq.json";
const FAQ = () => {
  return (
    <section className="bg-primary-1000 text-white text-center flex flex-col justify-center align-center  pb-20  ">
      <div className="container">
        <h1 className="text-2xl my-10 ">
          <span className="text-5xl">FAQ. </span>Popular Question From Our
          Clients
        </h1>
        <div className="mx-auto w-full sm:w-full">
          {faq.map((e) => (
            <Accordion item={e} key={e.order} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
