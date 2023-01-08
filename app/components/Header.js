import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import { AuthContext } from '../contexts/auth';

export default function Header(props) {
  const { isDarkTheme, toggleThemeHandler } = useContext(ThemeContext);
  const {tokens} = useContext(AuthContext);

  return (
    (tokens?<header>
      <nav className="flex w-full flex-wrap h-18 py-3 z-10  items-center justify-between px-12 bg-transparent font-medium border-b-2 text-black dark:text-white">
        <div className="absolute w-full h-full left-0 top-0 dark:bg-slate-900 bg-orange-100 -z-10 backdrop-blur-sm"></div>
        <ul className="inline-flex space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/cookie.png"
              width={30}
              height={30}
              alt="Pet logo"
            />
            <brand>Cookie Stand Admin</brand>
          </Link>
          <li className="rounded hover:bg-orange-300 px-3 py-2 dark:hover:bg-slate-700">
            <Link href="/">Home</Link>
          </li>
          <li className="rounded hover:bg-orange-300 px-3 py-2 dark:hover:bg-slate-700">
            <a href="#aboutUs">About</a>
          </li>
          <li className="rounded hover:bg-orange-300 px-3 py-2 dark:hover:bg-slate-700">
            <a href="#services">Services</a>
          </li>
          <li className="rounded hover:bg-orange-300 px-3 py-2 dark:hover:bg-slate-700">
            <Link href="/entries">Entries</Link>
          </li>
        </ul>
        <div className="flex gap-6">
          <p>Welcome, {props.name}</p>
          <button onClick={toggleThemeHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>:<></>)
  );
}
