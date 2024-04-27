"use client";
import Link from "next/link";
import Image from "next/image"
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <div className="overarchingNav">
      <nav>
        <p>Rebecca Heyman</p>
        <div className="showSmScreen navButton">
          <button onClick={() => setNavbar(!navbar)} >
            {navbar ? (
              <Image src="/close.png" width={40} height={40} alt="X" />
            ) : (
              <Image
                src="/hamburger.png"
                width={40}
                height={40}
                alt="Menu Lines"
              />
            )}
          </button>
        </div>
        {/* large screen */}
        <div className="hideSmScreen">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link target="_blank" href="https://github.com/kawaiimusician" passHref={true}>Github</Link>
        </div>
        {/* small screen */}
        <div className="showSmScreen">
          {navbar ? (
            <div className="flexCol linkList">
              <Link onClick={() => setNavbar(!navbar)} href="/" >Home</Link>
              <Link onClick={() => setNavbar(!navbar)} href="/blog">Blog</Link>
              <Link onClick={() => setNavbar(!navbar)} target="_blank" href="https://github.com/kawaiimusician" passHref={true}>Github</Link>
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
