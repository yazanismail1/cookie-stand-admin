'use client'
import "./globals.css";
import React, { useEffect, useState } from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";

const user_name = prompt("What is your name?")

export default function RootLayout({ children }) {
  const [userName, setUserName] = useState("")
  useEffect(() => {
    function getUserName() {
      setUserName(user_name)
    }
    getUserName();
  },[])

  const date = new Date();
  let year = date.getFullYear();

  return (
    <html lang="en">
      <head />
      <body>
        <Header name={userName} />
        <main className="pt-20">{children}</main>
        <Footer date={year} />
      </body>
    </html>
  );
}
