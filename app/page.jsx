'use client';
import { Inter } from "@next/font/google";
import "./globals.css";
import Introduction from './components/Inroduction'
import About from './components/About'
import Services from './components/Services'
import LoginForm from './components/LoginForm';
import {useContext} from 'react';
import { AuthContext } from './contexts/auth';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {tokens} = useContext(AuthContext);
  return (
  (tokens ?
    <>
      <Introduction />
      <About />
      <Services />
    </> :
    <LoginForm />
  )
  )
}
