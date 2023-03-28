import { Footer, Navbar } from '../components';
import { About, Explore, Contact, GetStarted, Hero, WhatsNew } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar  />
    <Hero />
  <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
  </div>

  <div className="relative">
    <GetStarted />
    <div className="gradient-03 z-0" />
    <WhatsNew />
  </div>

  <div className="relative">
    <div className="gradient-03 z-0" />
    <Contact />
  </div>
    <Footer />
  </div>
);

export default Page;
