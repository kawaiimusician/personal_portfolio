// Import CSS
import "./globals.css";
// Import google font
import { Open_Sans } from "next/font/google";

// component import
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const open_sans = Open_Sans({ 
  subsets: ["latin"],
  display: 'swap'
});

export const metadata = {
  title: "Rebecca Heyman",
  description: "a portfolio website",
};

// the children prop relates to the page that is currently being displayed on the site
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
