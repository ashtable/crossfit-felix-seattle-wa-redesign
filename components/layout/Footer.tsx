
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-8" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">CrossFit Felix</h3>
            <p>2211 5th Avenue<br />Seattle WA, 98121</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <p><a href="mailto:team@crossfitfelix.com">team@crossfitfelix.com</a></p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/doggies_and_deadlifts/" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-zinc-400">
          &copy; {new Date().getFullYear()} CrossFit Felix. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
