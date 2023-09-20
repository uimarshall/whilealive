import { SignedIn } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  const isUserLoggedIn = true;
  return (
    <nav className="navbar">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/assets/whileAliveLogo.png"
          alt="WhileAlive Logo"
          width={28}
          height={28}
        />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">
          WhileAlive
        </p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn></SignedIn>
          {}
        </div>
        <Link href="/login"></Link>
        <Link href="/signup"></Link>
      </div>
    </nav>
  );
}
Navbar;

export default Navbar;
