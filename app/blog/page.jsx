import Image from "next/image";

export default function Blog() {
  return (
    <div className="bg-offWhite text-primary text-7xl">
      <Image
        src="/comingSoon.png"
        width="0"
        height="0"
        sizes="100vw"
        className="collageImg"
        alt="Coming Soon"
      />
    </div>
  )
}