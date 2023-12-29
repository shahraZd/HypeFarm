import { ButtonComponent } from "@/components/Button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2 className="text-5xl sm:text-base text-center">
          Join Hypefarm on the journey to redefine Web3 marketing. Let&apos;s
          elevate your brand, engage your audience, and cultivate success in the
          decentralized future. Contact us today to embark on this exciting
          venture together.
        </h2>
        {/* <h2 className="text-5xl text-center">
          Partner With a Digital Marketing Agency That Delivers Growth
        </h2> */}
        <div></div>
        <div className="text-xl my-9 text-center">
          We&apos;re a full-service digital marketing agency that helps brands
          that want to get noticed and dominate their industry. We love
          marketing. We eat, sleep and breathe it. But more importantly, we love
          seeing our clients grow their businesses with our help. There&apos;s
          nothing more satisfying than playing a pivotal role in the success of
          another business. Whether you&apos;re a fresh-faced startup or a
          seasoned enterprise, we want to be the one that helps you chart a
          course to explosive growth. If this sounds good to you, then
          let&apos;s talk.
        </div>
        <Link href="#contact">
          <ButtonComponent content={"Speak to our team"} filled />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
