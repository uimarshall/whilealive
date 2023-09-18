// import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <main className="">
      <h1>WhileAlive</h1>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
}
