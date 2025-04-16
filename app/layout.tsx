import type { Metadata } from "next";
import "@/app/global.css";
import Sidenav from "./component/sidenav";
import Footer from "./component/footer";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import '@/app/lib/fontawesome';

export const metadata: Metadata = {
  description: 'Portfolio Website About Muhammad "Ivaz" Reza Heryanto',
  icons: "/mybrandnew.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <header className="w-full flex-none md:w-90">
          <Sidenav />
        </header>
        <main className="flex-grow md:overflow-y-auto"> 
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
