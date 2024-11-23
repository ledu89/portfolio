import { Link } from "react-scroll";

function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">FrontEnd</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            Hello, I&apos;m Dusko, a passionate Front-End Developer and Graphic
            Designer based in Novi Sad, Serbia.
            <br /> Ready to bring your ideas to life? Let&apos;s connect and
            turn your vision into reality.
          </p>
        </div>
        <div className="hero-btn-container">
          <Link
            activeClass="btn-primary"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            to="Contact"
            className="btn btn-primary"
          >
            Get in touch
          </Link>
          <a
            className="btn btn-outline-primary"
            target="_blank"
            href="./Dusko_Ninkov_FrontEnd_Dev_Cv.pdf"
            download="Dusko_Ninkov_FrontEnd_Dev_Cv.pdf"
          >
            Download my CV
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/heroMe.png" alt="Hero Section" />
      </div>
    </section>
  );
}

export default HeroSection;
