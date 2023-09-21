import { OrganizationSwitcher, SignOutButton, SignedIn } from '@clerk/nextjs';
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
          {/* If user is logged in, show <SignedOut></SignedOut> using clerk */}
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer text-cyan-400 bg-gray-200 border-solid">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
                Sign Out
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            elements: {
              button: { height: '3rem', width: '3rem' },
              organizationSwitcherTrigger: 'py-2 px-4',
            },
          }}
        />
        <Link href="/login"></Link>
        <Link href="/signup"></Link>
      </div>
    </nav>
  );
}
Navbar;

export default Navbar;
