import type { Metadata } from "next";
import "@/app/global.css";
import Sidenav from "./component/sidenav";

export const metadata: Metadata = {
  title: {
    default: "Ivaz Portfolio Website",
    template: "%s | Ivaz Portfolio Website", 
  },  description: 'Portfolio Website About Muhammad "Ivaz" Reza Heryanto',
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
        <main className="flex-grow p-6 md:overflow-y-auto md:p-12"> 
          {children}
        </main>
      </body>
    </html>
  );
}
