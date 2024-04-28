"use client";
import Link from "next/link";
import Image from "next/image"
import { useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false)
  return (
    <div className="overarchingNav">
      <nav>
        <Link href="/" className="navHeader">Rebecca Heyman</Link>
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
          <Link href="/" className="linkStyling">Home</Link>
          <Link href="/blog" className="linkStyling">Blog</Link>
          <Link target="_blank" href="https://github.com/kawaiimusician" passHref={true} className="linkStyling">Github</Link>
        </div>
        {/* small screen */}
        <div className="showSmScreen">
          {navbar ? (
            <div className="flexCol linkList">
              <Link onClick={() => setNavbar(!navbar)} href="/" className="linkStyling">Home</Link>
              <Link onClick={() => setNavbar(!navbar)} href="/blog" className="linkStyling">Blog</Link>
              <Link onClick={() => setNavbar(!navbar)} target="_blank" href="https://github.com/kawaiimusician" passHref={true} className="linkStyling">Github</Link>
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
