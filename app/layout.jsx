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
  description: "Rebecca Heyman is a software developer with 3 years experience. She is currently pursuing her degree in Computer Science at the University of London, Goldsmiths.",
  keywords: ['Rebecca Heyman', "Rebecca Heyman Developer", 'Software Developer', "Austin", "Texas", "Web", "Development"],
  creator: 'Rebecca Heyman',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
