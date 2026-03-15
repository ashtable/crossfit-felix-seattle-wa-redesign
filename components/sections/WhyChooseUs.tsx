
import React from 'react';
import Card from '../ui/Card';
import Image from 'next/image';

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-zinc-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Card title="Bright, open, and built for work.">
            <Image src="/images/Felix-Athletics-12-1024x683.jpg" alt="Bright, open, and built for work." width={1024} height={683} className="rounded-t-lg"/>
            <p className="mt-2 text-zinc-600">A welcoming, well-equipped space in downtown Seattle. Clean, open, and built for community — no mirrors, no egos, just everything you need to move well and feel strong.</p>
          </Card>
          <Card title="Expert coaches, zero intimidation.">
            <Image src="/images/CrossFit-Felix-1155822-1024x819.jpg" alt="Expert coaches, zero intimidation." width={1024} height={819} className="rounded-t-lg"/>
            <p className="mt-2 text-zinc-600">Our team brings the knowledge, energy, and personality to make your workouts effective and fun. We’re here to guide, cheer, and sometimes laugh with you — never at you.</p>
          </Card>
          <Card title="Smart programming, scalable for all.">
            <Image src="/images/CrossFit-Felix-1166129-1024x768.jpg" alt="Smart programming, scalable for all." width={1024} height={768} className="rounded-t-lg"/>
            <p className="mt-2 text-zinc-600">From functional fitness to skill sessions and mobility work, our Felix 60 classes are designed to challenge and support every fitness level. Show up as you are — we’ll take care of the rest.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
