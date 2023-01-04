'use client';
import { Inter } from "@next/font/google";
import "./globals.css";
import Introduction from './components/Inroduction'
import About from './components/About'
import Services from './components/Services'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Introduction />
      <About />
      <Services />
    </>
  );
}
