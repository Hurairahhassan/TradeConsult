import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          alt="Business background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Global Trade Solutions<br />for Your Business
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Expert consulting services to help your business thrive in international markets.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-green-600 rounded-lg text-lg font-semibold transition-colors"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

export default Hero;