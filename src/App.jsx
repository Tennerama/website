import React from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Advantages from './components/Advantages';
import Investment from './components/Investment';
import Success from './components/Success';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Advantages />
          <Investment />
          <Success />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

