import { SmoothScroll } from './smooth/SmoothScroll';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Services from './components/Services';
import Work from './components/Work';
import Screenshots from './components/Screenshots';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <SmoothScroll>
        <main className="bg-[#060607]">
          <Hero />
          <Manifesto />
          <Services />
          <Work />
          <Screenshots />
          <Team />
          <Reviews />
          <Process />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
