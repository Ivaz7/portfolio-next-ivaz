import type { Metadata } from "next";
import "@/app/global.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
