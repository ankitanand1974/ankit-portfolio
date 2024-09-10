import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import TimelineSection from "../components/TimelineSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <TimelineSection />
      <Contact />
    </main>
  );
}
