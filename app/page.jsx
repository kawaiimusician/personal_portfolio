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
          <p className="text-3xl pb-3">Hello there!</p>
          <p>Allow me to introduce myself, my name is Rebecca and I&apos;m a software developer with 3 years experience. In that time I have explored my passion for problem solving through both web and game development. Currently, I am working towards my bachelors degree in Computer Science at the University of London. Aside from programming, I love to play violin, crochet, cuddle my two cats, and play video games with my friends.</p>
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
                <p>&#8226; Git & Github</p>
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
