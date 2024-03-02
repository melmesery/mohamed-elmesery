import "../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
         <a
          href="https://drive.google.com/file/d/1-JYizt7a6Erg8iWZtY8GL7nO-SemVAkz/view?usp=sharing"
          target="_blank"
          className="about-resume"
        >
          Download CV
        </a>
        <p className="about-me">
          Hi, my name is Mohamed Elmesery. I'm a Full-stack developer based
          in Egypt. I describe myself as a passionate developer who loves
          coding, and web developing.Aside from my job, I like to create and
          contribute to open source projects. That helps me to learn a ton
          of new stuff, grow as a developer and support other open source
          projects. And if you want to reach out on{" "}
          <a
            href="https://www.linkedin.com/in/melmesery/"
            target="_blank"
          >
            LinkedIn
          </a>
          .
        </p>
     </section>
  );
};

export default About;
