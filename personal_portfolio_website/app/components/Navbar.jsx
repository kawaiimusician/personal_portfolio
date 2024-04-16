import Link from "next/link"

export default function Navbar() {
  return (
    <nav>
      <p>Rebecca Heyman</p>
      <div className="spacer"></div>
      <Link href="/">Home</Link>
      <Link target="_blank" href="https://github.com/kawaiimusician" passHref={true}>Github</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  )
}
