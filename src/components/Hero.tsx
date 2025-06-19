
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=6000&q=80')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-slate-900/40"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-light text-white mb-4 tracking-wide">
            RB & Company
          </h1>
          
          <div className="w-24 h-0.5 bg-white/60 mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide">
            Precision in Numbers, Excellence in Service
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
