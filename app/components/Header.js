import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header(props) {
  return (
    <header>
      <nav className="flex w-full flex-wrap fixed h-18 py-3 z-10  items-center justify-between px-12 bg-transparent font-medium border-b-2 text-black">
        <div className="absolute w-full h-full left-0 top-0 bg-orange-100 -z-10 backdrop-blur-sm"></div>
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
          <li className="rounded hover:bg-orange-300 px-3 py-2">
            <Link href="/">Home</Link>
          </li>
          <li className="rounded hover:bg-orange-300 px-3 py-2">
            <a href="#aboutUs">About</a>
          </li>
          <li className="rounded hover:bg-orange-300 px-3 py-2">
            <a href="#services">Services</a>
          </li>
          <li className="rounded hover:bg-orange-300 px-3 py-2">
            <Link href="/entries">Entries</Link>
          </li>
        </ul>
        <p>Welcome, {props.name}</p>
      </nav>
    </header>
  );
}
