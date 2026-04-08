import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Danae Villa | Santorini",
  description: "A sanctuary on the Caldera. Experience Swiss Minimalism and stealth luxury in Santorini.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-swiss-dark text-swiss-gray antialiased selection:bg-white selection:text-black`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
