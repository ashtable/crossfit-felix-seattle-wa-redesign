
import React from 'react';
import HeroVideo from '../HeroVideo';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <HeroVideo src="/videos/CrossFit+Felix+Banner+Video.mp4" />
      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Seattle’s #1 Place to Start Your Fitness Journey</h1>
        <p className="mt-4 text-lg md:text-xl">Belltown, Seattle</p>
        <div className="mt-8">
            <Button variant="primary">Try Us Free</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
