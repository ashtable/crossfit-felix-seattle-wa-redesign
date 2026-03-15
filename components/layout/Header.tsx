
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/">
          <Image src="/images/Felix_Logo_Primary_RGB_Red_White.png" alt="CrossFit Felix Logo" width={150} height={50} />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#classes">Classes</Link></li>
            <li><Link href="#personal-training">Personal Training</Link></li>
            <li><Link href="#getting-started">Getting Started</Link></li>
            <li><Link href="#wod">WOD</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
