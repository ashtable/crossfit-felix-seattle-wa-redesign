
import React from 'react';
import Card from '../ui/Card';
import Image from 'next/image';
import Button from '../ui/Button';

const Services = () => {
  return (
    <section id="classes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What We Do Here</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card title="Felix 60">
            <Image src="/images/CrossFit-Felix-1155958-819x1024.jpg" alt="Felix 60" width={819} height={1024} className="rounded-lg mb-4"/>
            <p className="text-zinc-600 mb-4">From $200/Month</p>
            <p className="text-zinc-600 mb-4">Our Felix 60 classes are built to challenge and change you—combining functional movements, varied programming, and high-intensity workouts in a supportive, community-driven environment.</p>
            <Button variant="primary">Get Started</Button>
          </Card>
          <Card title="HYROX Training">
            <Image src="/images/hyrox1.webp" alt="HYROX Training" width={819} height={1024} className="rounded-lg mb-4"/>
            <p className="text-zinc-600 mb-4">Included with membership</p>
            <p className="text-zinc-600 mb-4">HYROX training means more sled pushes, more wall balls, more lungs-on-fire conditioning—and yes, more bragging rights. Whether you’re chasing your first HYROX finish or aiming to shave minutes off your time, our training is built to prep you for race day (and make you hard to kill in the process).</p>
            <Button variant="secondary">Learn More</Button>
          </Card>
          <Card title="Personal Training">
            <Image src="/images/CrossFit-Felix-1166195-768x1024.jpg" alt="Personal Training" width={768} height={1024} className="rounded-lg mb-4"/>
            <p className="text-zinc-600 mb-4">Custom Pricing</p>
            <p className="text-zinc-600 mb-4">For personalized goals and focused attention, our one-on-one training sessions deliver custom programming, expert coaching, and real accountability tailored to your unique fitness journey.</p>
            <Button variant="secondary">Learn More</Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
