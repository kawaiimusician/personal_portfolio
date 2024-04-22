"use client";
import Link from "next/link";
import Image from "next/image"
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <div className="bg-primary p-8 sticky top-0 z-10">
      <nav>
        <p>Rebecca Heyman</p>
        <div className="sm:hidden navButton">
          <button onClick={() => setNavbar(!navbar)} >
            {navbar ? (
              <Image src="/close.png" width={40} height={40} alt="logo" />
            ) : (
              <Image
                src="/hamburger.png"
                width={40}
                height={40}
                alt="logo"
              />
            )}
          </button>
        </div>
        <div className="hidden sm:block">
          <Link href="/">Home</Link>
          <Link target="_blank" href="https://github.com/kawaiimusician" passHref={true}>Github</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="sm:hidden">
          {navbar ? (
            <div className="flex flex-col">
              <Link onClick={() => setNavbar(!navbar)} href="/" >Home</Link>
              <Link onClick={() => setNavbar(!navbar)} target="_blank" href="https://github.com/kawaiimusician" passHref={true}>Github</Link>
              <Link onClick={() => setNavbar(!navbar)} href="/blog">Blog</Link>
            </div>
          ) : (
            <div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
