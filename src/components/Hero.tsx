import Image from "next/image";
import profile from "../images/profile.jpg";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div>
        <p>Hello, I'm</p>
        <h1>Mohamed</h1>
        <Image
          src={profile}
          alt="Moahmed Elmesery"
          className="hero-profile"
        />
      </div>
    </section>
  );
};

export default Hero;
