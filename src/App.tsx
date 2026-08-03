import { Background } from "./components/Background";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Stats } from "./components/Stats";
import { Features } from "./components/Features";
import { Courses } from "./components/Courses";
import { Process } from "./components/Process";
import { Team } from "./components/Team";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Features />
        <Courses />
        <Process />
        <Team />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
