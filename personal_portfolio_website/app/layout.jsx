
import "./globals.css";
//import google font
import { Rubik } from "next/font/google";

// component import
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Rebecca Heyman",
  description: "a portfolio website",
};

// the children prop relates to the page that is currently being displayed on the site
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
