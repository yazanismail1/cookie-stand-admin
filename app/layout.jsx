"use client";
import "./globals.css";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ThemeWrapper from "./contexts/theme";
import { AuthWrapper } from "./contexts/auth";

const user_name = prompt("What is your name?");

export default function RootLayout({ children }) {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    function getUserName() {
      setUserName(user_name);
    }
    getUserName();
  }, []);

  const date = new Date();
  let year = date.getFullYear();

  return (
    <html lang="en">
      <head />
      <AuthWrapper>
        <ThemeWrapper>
          <body>
            <Header name={userName} />
            <main className="bg-white">{children}</main>
            <Footer date={year} />
          </body>
        </ThemeWrapper>
      </AuthWrapper>
    </html>
  );
}
