import '../globals.css';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import Navbar from '../../components/shared/Navbar';
import Footer from '../../components/shared/Footer';
import LeftSideBar from '../../components/shared/LeftSideBar';
import RightSideBar from '../../components/shared/RightSideBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Whilealive',
  description:
    'A Whilealive Application that helps you keep your loved ones alive and sense of belongings.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <main>
            <LeftSideBar />
            <section className="main-wrapper">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSideBar />
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
