import About from "../components/About.tsx";
import Hero from "../components/Hero.tsx";
import RecentWork from "../components/RecentWork.tsx";
import Skills from "../components/Skills.tsx";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <RecentWork />
    </>
  );
}
