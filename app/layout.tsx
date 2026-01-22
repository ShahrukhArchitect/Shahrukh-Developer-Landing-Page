import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "Shahrukh | MVP Developer & Full Stack Expert",
  description: "Transforming ideas into production-ready MVPs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // "dark" class force ki gayi hai aur color-scheme set hai
    <html lang="en" className={`dark ${inter.variable} ${jakarta.variable}`} style={{ colorScheme: 'dark' }}>
      <body className="antialiased selection:bg-yellow-500/30 bg-[#030406] text-white">
          <Navbar />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  );
}