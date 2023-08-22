// import BgHero from "../../../public/gradientHero/";
"use client";

const Hero = () => {
  return (
    <div className=" text-center min-h-screen flex justify-center  ">
      {/* <div className="hero_section_bg "></div> */}
      <iframe
        src="https://hero.hypefarm.io/"
        width="100%"
        frameborder="0"
        height="auto"
        className="hero_section_bg "
      ></iframe>
      <div className=" hero_section_container   ">
        <div className=" mb-[4.25rem] sm:mb-[1.8rem] box-border  max-w-full">
          <h1 className=" text-5xl sm:text-3xl ">
            Your Full Service Digital Marketing Company
          </h1>
          <div className="text-5xl sm:text-3xl flex items-center justify-center ">
            For
            <div className="hero-slider bg-primary-500 ml-8 opacity-70 rounded-lg ">
              <marquee
                direction="up"
                width="100%"
                height="100%"
                behavior="scroll"
                scrollamount="5"
                onHover={() => stop()}
              >
                <ul className="hero-slider__words  marquee">
                  <li>Crypto</li>
                  <li>Startups</li>
                  <li>B2B</li>
                  <li>Software</li>
                  <li>Fintech</li>
                </ul>
              </marquee>
              {/* <ul className="hero-slider__words  marquee">
                <li>
                  <marquee direction="up">CRYPTO</marquee>
                </li>
                <li>
                  <marquee direction="up">CRYPTO2</marquee>
                </li>
                <li>Startups</li>
                <li>B2B</li>
                <li>Software</li>
                <li>Fintech</li>
              </ul> */}
            </div>
          </div>
        </div>
        <p className="hero-section_desc text-xl sm:text-base">
          A leading marketing agency specializing in community management and
          comprehensive marketing services. We aim to build thriving online
          communities, forge strong connections, and drive exceptional growth
          for businesses.
        </p>
      </div>
      {/* <BgHero /> */}
    </div>
  );
};
export default Hero;
