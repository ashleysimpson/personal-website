import type { Metadata } from 'next';
import { Bitter, Open_Sans } from 'next/font/google';
import './globals.css';

const bitter = Bitter({
  subsets: ['latin'],
  variable: '--font-bitter',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ashley Simpson',
  description: 'Personal website for Ashley Simpson.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bitter.variable} ${openSans.variable}`}>
      <body className="bg-background">
        <main className="flex flex-col justify-between w-screen min-h-screen tablet:h-screen tablet:grid tablet:grid-rows-[20vh_20vh_50vh_10vh] tablet:grid-cols-[30vw_30vw_10vw_30vw] desktop:grid-rows-[20vh_20vh_50vh_10vh] desktop:grid-cols-[20vw_30vw_15vw_35vw]">
          {children}
        </main>
      </body>
    </html>
  );
}
