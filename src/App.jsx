import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Footer from "./components/Footer";
import TransitionDark from "./components/TransitionDark";
import EndSection from "./components/EndSection";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <TransitionDark />
      <EndSection />
      <Footer />
    </main>
  );
};

export default App;
