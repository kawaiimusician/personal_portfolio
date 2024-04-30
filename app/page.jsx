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
        alt="Image Collage"
      />
      {/* small collage */}
      <Image
        src="/image-collage-sm.png"
        width="0"
        height="0"
        sizes="100vw"
        className="collageImg showMdScreen"
        alt="Image Collage"
      />
      {/* Experience Timeline */}
      <div className="tertiary-offWhite">
        <div className="experienceSection">
          <div className="skillsSection">
            <p className="experienceTitle">Software Skills</p>
            <div className="skillsListContainer">
              <div className="whitespace-nowrap pr-5">
                <p>&#8226; JavaScript</p>
                <p>&#8226; Python</p>
                <p>&#8226; HTML & CSS</p>
                <p>&#8226; Node</p>
                <p>&#8226; Express</p>
                <p>&#8226; Bootstrap</p>
              </div>
              <div className="whitespace-nowrap">
                <p>&#8226; React</p>
                <p>&#8226; Next.js</p>
                <p>&#8226; Tailwind CSS</p>
                <p>&#8226; MongoDB</p>
                <p>&#8226; PostgreSQL</p>
              </div>
            </div>
          </div>

          <div className="eduArea">
            <p className="experienceTitle">Education</p>
            <p>&#8226; University of London, Goldsmiths - BSc Computer Science (Estimated Graduation: April 2027)</p>
            <p className="experienceTitle pt-3">Certifications</p>
            <p>&#8226; Software Developer Bootcamp - Austin Community College</p>
            <p>&#8226; Google IT Support Certificate - Google</p>
            <p>&#8226; NetSuite Certified SuiteFoundations - Oracle NetSuite</p>
          </div>
        </div>

      </div>
    </main>
  );
}
