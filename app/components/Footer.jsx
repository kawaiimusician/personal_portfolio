import Link from "next/link";
import Image from "next/image"
import './Footer.css';

export default function Footer() {
  return (
      <div className="footer">
        <div className="justifyCenter">
          <Link target="_blank" href="https://github.com/kawaiimusician" passHref={true} className="footerLink">
            <Image src="/github.png" width={40} height={40} alt="github" />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/rebecca-heyman/" passHref={true} className="footerLink">
            <Image src="/linkedin.png" width={40} height={40} alt="linkedin" />
          </Link>
          <Link href="mailto:RebeccaHeyman@proton.me" className="footerLink">
            <Image src="/mail.png" width={40} height={40} alt="contact" />
          </Link>
        </div>
        <div className="justifyCenter">
          <p>Handcrafted by me, with love &#9829;</p>
        </div>
      </div>
  );
}
