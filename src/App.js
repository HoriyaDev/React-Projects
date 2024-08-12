import logo from './logo.svg';
import './App.css';

import About from './About';
import Strategies from './Strategies';
import Team from './Team';
import Footer from './Footer';
import Navbar from './Navbar';
import Hero from './Hero';
import Brand from './Brands';
import Features from './Features';


function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-red-100 to-red-50  ">
      <Navbar />
      <Hero />
      </div>
      <Brand />
      <Features />
      <About />
      <Strategies />
      <Team />
      <Footer />
    </>
  );
}

export default App;

