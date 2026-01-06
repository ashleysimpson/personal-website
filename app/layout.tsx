import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ashley Simpson',
  description:
    'Website designed and created by Ashley Simpson. Promotes both his GitHub and LinkedIn profile for anyone interested.',
  canonicalUrl: 'https://ashleysimpson.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="wrapper">{children}</main>
      </body>
    </html>
  );
}
