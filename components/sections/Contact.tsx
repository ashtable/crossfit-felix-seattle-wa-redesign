
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Right in the heart of downtown</h2>
          <p className="text-lg text-zinc-600 mb-8">Drop in, check us out, or just stop by for a look. We’re easy to find and love to meet new faces.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <ul className="text-lg">
              <li className="mb-2"><a href="mailto:team@crossfitfelix.com" className="text-primary-red hover:underline">team@crossfitfelix.com</a></li>
            </ul>
            <h3 className="text-2xl font-bold mt-8 mb-4">Address</h3>
            <address className="text-lg not-italic">
              2211 5th Avenue<br />
              Seattle WA, 98121
            </address>
            <h3 className="text-2xl font-bold mt-8 mb-4">Hours</h3>
            <ul className="text-lg">
              <li>Mon-Fri 6:00AM - 8:30PM</li>
              <li>Sat 8:00AM - 11:00AM</li>
              <li>Sun 9:00AM - 11:00AM</li>
            </ul>
          </div>
          <div>
            {/* Placeholder for map */}
            <div className="bg-zinc-200 h-96 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
