import Image from "next/image";
import CardCarousel from "./components/CardCarousel"

export default function Home() {
  return (
    <main>
      {/* main header */}
      <div className="py-10 offWhite-Primary">
        <div className="mainPageHeader">
          <p>Developer</p>
          <p className="hideLgScreen">&#8212;</p>
          <p>Violinist</p>
          <p className="hideLgScreen">&#8212;</p>
          <p>Puzzle Solver</p>
        </div>
      </div>
      <div className="offWhite-Primary pb-10">
        <div className="mainImage mx-auto">
          <Image src="/rebecca-heyman.png" width={300} height={300} alt="Cartoon Rebecca" />
        </div>
      </div>
      {/* About */}
      <div className="tertiary-offWhite">
        <div className="aboutSection">
          <p>Hello there!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      {/* Projects */}
      <div className="offWhite-Primary">
        <div className="projectSection">
          <CardCarousel></CardCarousel>
        </div>
      </div>
      {/* Pics */}
      {/* regular collage */}
      <Image
        src="/image-collage.png"
        width="0"
        height="0"
        sizes="100vw"
        className="collageImg hideMdScreen"
      />
      {/* small collage */}
      <Image
        src="/image-collage-sm.png"
        width="0"
        height="0"
        sizes="100vw"
        className="collageImg showMdScreen"
      />
      {/* Experience Timeline */}
      <div className="tertiary-offWhite">
        <div className="experienceSection">
          <div className="flex-none p-5 pr-20 border-r-4 border-offWhite">
            <p className="underline text-2xl pb-2">Software Skills</p>
            <div className="flex text-left justify-center">
              <div className="flex flex-col pr-5">
                <p>&#8212; JavaScript</p>
                <p>&#8212; Python</p>
                <p>&#8212; HTML & CSS</p>
                <p>&#8212; Node</p>
                <p>&#8212; Express</p>
                <p>&#8212; Bootstrap</p>
              </div>
              <div className="flex flex-col">
                <p>&#8212; React</p>
                <p>&#8212; Next.js</p>
                <p>&#8212; Tailwind CSS</p>
                <p>&#8212; MongoDB</p>
                <p>&#8212; PostgreSQL</p>
              </div>
            </div>
          </div>

          <div className="flex-none p-5">
            <p className="underline text-2xl pb-2">Education</p>
            <p>University of London, Goldsmiths - BSc Computer Science (Estimated Graduation: April 2027)</p>
            <p className="underline text-2xl pb-2 pt-3">Certifications</p>
            <p>Software Developer Bootcamp - Austin Community College</p>
            <p>Google IT Support Certificate - Google</p>
            <p>NetSuite Certified SuiteFoundations - Oracle NetSuite</p>
          </div>
        </div>

      </div>
    </main>
  );
}
