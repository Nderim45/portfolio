import Navbar from "../components/shared/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex-col w-full max-w-[1640px] mx-auto px-10">
      <Navbar />
      <Hero />
      <Projects />
      <Technologies />
      <Experience />
      <Footer />
    </div>
  );
};

export default Home;
