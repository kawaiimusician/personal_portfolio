import Image from "next/image";

export default function Home() {
  return (
    <main className="main">
        <div className="my-10">
          <div className="mainPageHeader">
            <p>Developer</p>
            <p className="hideSmScreen">-</p>
            <p>Violinist</p>
            <p className="hideSmScreen">-</p>
            <p>Puzzle Solver</p>
          </div>
        </div>
        <div className="imageCrop mx-auto">
          <Image src="/rebecca-heyman.png" width={300} height={300} alt="Cartoon Rebecca" className="circleImage" />
        </div>
    </main>
  );
}
