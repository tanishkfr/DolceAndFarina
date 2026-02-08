import React from 'react';
import { Hero } from './components/Hero';
import { PastryMenu } from './components/PastryMenu';
import { CoffeeMenu } from './components/CoffeeMenu';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream font-sans text-espresso antialiased selection:bg-warm-yellow selection:text-espresso overflow-x-hidden">
      <Navbar />
      
      <main className="flex flex-col w-full">
        <Hero />
        <PastryMenu />
        <CoffeeMenu />
        <About />
      </main>

      <Footer />
    </div>
  );
};

export default App;