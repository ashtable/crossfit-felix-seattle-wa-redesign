
import React from 'react';
import Button from '../ui/Button';

const Schedule = () => {
  return (
    <section id="schedule" className="py-20 bg-zinc-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Built to Fit Your Life</h2>
        <p className="text-lg text-zinc-600 max-w-3xl mx-auto mb-8">
          Whether you’re an early riser or prefer to train after work, we’ve got classes to fit your schedule. Every session is coach-led, structured, and designed to make the most of your 60 minutes—so all you have to do is show up and work hard. We’ll handle the rest.
        </p>
        <Button variant="primary">View Schedule</Button>
      </div>
    </section>
  );
};

export default Schedule;
