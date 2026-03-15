
import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Team from '../components/sections/Team';
import Testimonials from '../components/sections/Testimonials';
import Schedule from '../components/sections/Schedule';
import Contact from '../components/sections/Contact';

const Page = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <Schedule />
      <Contact />
    </main>
  );
};

export default Page;
