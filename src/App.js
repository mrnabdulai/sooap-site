import "./App.css";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
