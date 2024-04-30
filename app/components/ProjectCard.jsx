export default function ProjectCard(projName, projImg, projDescription, projDate, updateDate, linkRef, buttonText) {
  return (
    <div className="tertiary-offWhite carouselCard">
      {/* img */}
      <div className="carouselImage">
        <Image src={projImg} width={300} height={300} alt="Cartoon Rebecca" className="w-full h-auto rounded-t-lg" />
      </div>
      {/* text */}
      <div className="carouselTextContainer">
        <p className="projectTitle">{projName}</p>
        <p className="text-sm">{projDescription}</p>
        <p className="text-sm">Project Date: {projDate}</p>
        {d.updatedDate ? (
          <p className="text-sm">Updated on: {updateDate}</p>
        ) : (
          <div></div>
        )}
        <Link href={`${linkRef}`} className="projectButton">{buttonText}</Link>
      </div>
    </div>
  )
}
