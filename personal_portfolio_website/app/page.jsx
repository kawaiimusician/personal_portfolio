import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* main header */}
      <div className="my-10">
        <div className="mainPageHeader">
          <p>Developer</p>
          <p className="hideLgScreen">&#8212;</p>
          <p>Violinist</p>
          <p className="hideLgScreen">&#8212;</p>
          <p>Puzzle Solver</p>
        </div>
      </div>
      <div className="imageCrop mx-auto mb-10">
        <Image src="/rebecca-heyman.png" width={300} height={300} alt="Cartoon Rebecca" className="circleImage" />
      </div>
      {/* About */}
      <div className="bg-tertiary text-offWhite">
        <div className="p-12 aboutSection">
          <p>Hello there!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      {/* Pics */}
      <Image
        src="/image-collage.png"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
      />
      {/* Projects */}
      <div>
        <div className="p-12 projectSection">
          <p>Project Spotlight</p>
          <div>Proj 1</div>
          <div>Proj 2</div>
          <div>Proj 3</div>
        </div>
      </div>
      {/* Experience Timeline */}
      <div className="bg-tertiary text-offWhite">
        <div className="p-12 timelineSection">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

      </div>
    </main>
  );
}
