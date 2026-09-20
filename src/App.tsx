import { SmoothScroll } from './smooth/SmoothScroll';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Services from './components/Services';
import Work from './components/Work';
import TrustStrip from './components/TrustStrip';
import PricingStrip from './components/PricingStrip';
import HomeFaq from './components/HomeFaq';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Process from './components/Process';
import BlogTeaser from './components/BlogTeaser';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Legal from './pages/Legal';
import Blog from './pages/Blog';
import Post from './pages/Post';
import { legalPages } from './data/legal';
import { postBySlug } from './data/posts';
import { routeFor } from './seo';
import { serviceBySlug } from './data/services';
import ServicePage from './pages/ServicePage';
import ServicesIndex from './pages/ServicesIndex';
import Calculator from './pages/Calculator';
import NotFound from './pages/NotFound';
import StickyCta from './components/StickyCta';

function Home() {
  return (
    <>
      <Nav />
      <SmoothScroll>
        <main className="bg-[#060607]">
          {/* order = the buyer's questions: what · proof · who · price · how · trust · doubts · learn · ask */}
          <Hero />
          <TrustStrip />
          <Manifesto />
          <Services />
          <Work />
          <PricingStrip />
          <Process />
          <Team />
          <Reviews />
          <HomeFaq />
          <BlogTeaser />
          <Contact />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}

// ponytail: path switch instead of a router — every route is prerendered to a static file.
function Page({ path }: { path: string }) {
  if (path === '/blog') return <Blog page={1} />;
  const blogPage = /^\/blog\/page\/(\d+)$/.exec(path);
  if (blogPage && routeFor(path)) return <Blog page={Number(blogPage[1])} />;
  const post = path.startsWith('/blog/') ? postBySlug(path.slice(6)) : undefined;
  if (post) return <Post post={post} />;
  const legal = legalPages.find((p) => p.path === path);
  if (legal) return <Legal page={legal} />;
  if (path === '/services') return <ServicesIndex />;
  const service = path.startsWith('/services/') ? serviceBySlug(path.slice(10)) : undefined;
  if (service) return <ServicePage service={service} />;
  if (path === '/tools/ai-project-cost-calculator') return <Calculator />;
  if (path === '/') return <Home />;
  return <NotFound />;
}

export default function App({ url }: { url: string }) {
  const path = url.replace(/\.html$/, '').replace(/\/+$/, '') || '/';
  return (
    <>
      <Page path={path} />
      <StickyCta />
    </>
  );
}
