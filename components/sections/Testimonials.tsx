
import React from 'react';
import Card from '../ui/Card';

const testimonials = [
  {
    quote: 'I’ve trained at CrossFit gyms all over the world, and the hospitality at Felix stands out above the rest. The ownership and coaches are exceptional—welcoming,...',
    author: 'Ken Moseman',
  },
  {
    quote: 'I visited my friend in Seattle who goes to this gym regularly. We had a great workout and it was very well planned and instructed....',
    author: 'Morgan Smith',
  },
  {
    quote: 'My husband and I loved this gym. We were in Seattle for over a week and bought the weeklong pass, the owner let us add...',
    author: 'Shawna',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What People Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author}>
              <p className="text-zinc-600 italic">"{testimonial.quote}"</p>
              <p className="text-zinc-800 font-bold mt-4">- {testimonial.author}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
