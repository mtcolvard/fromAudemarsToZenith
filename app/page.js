import Image from 'next/image';
import Link from 'next/link';
import homePage1 from '../public/homePage1.webp';

export default function Home() {
  return (
    <main className="bg-black relative min-h-screen">
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Link href="/showcase">
          <div className="border-2 border-black p-7 text-black text-xl tracking-widest uppercase bg-clip-border bg-transparent bg-origin-padding">
            From Audemars to Zenith
          </div>
        </Link>
      </div>

      <div className="relative flex justify-center">
        <Link href="/">
          <Image
            priority
            alt=''
            src={homePage1}
            style={{
              width: '100%',
              height: '100vh',
            }}
          />
        </Link>
      </div>
    </main>
  );
}