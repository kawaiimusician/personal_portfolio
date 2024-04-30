"use client";
import Image from "next/image"
import Link from "next/link";

import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CardCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },

    ]
  };
  return (
    <div className="w-10/12 m-auto">
      <div>
        <Slider {...settings}>
          {cardData.map((d) => (
            <div className="tertiary-offWhite carouselCard" key={d}>
              {/* img */}
              <div className="carouselImage">
                <Image src={d.projectImg} width={300} height={300} alt={d.projectName} className="w-full h-auto rounded-t-lg" unoptimized />
              </div>
              {/* text */}
              <div className="carouselTextContainer">
                <p className="projectTitle">{d.projectName}</p>
                <p className="text-sm">{d.description}</p>
                <p className="text-sm">Project Date: {d.projDate}</p>
                {d.updatedDate? (
                  <p className="text-sm">Updated: {d.updatedDate}</p>
                ) : (
                  <div></div>
                )}
                {/* if there is button text, display button. If not, display nothing */}
                {d.buttonText? (
                  <Link href={`${d.linkRef}`} className="projectButton">{d.buttonText}</Link>
                ):(<div></div>)}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

const cardData = [
  {
    projectName: "Higher or Lower",
    projectImg: "/higherOrLower.gif",
    description: "Quick and fun game where you must guess if the hidden card is higher or lower than the card shown. Test your luck and give it a try!",
    projDate: "March 2022",
    updatedDate: "April 2024",
    linkRef: "/higher-or-lower",
    buttonText: "View Project"
  },
  {
    projectName: "Color Guesser",
    projectImg: "/colorGuesser.gif",
    description: "How well do you know your RGB colors? Test your knowledge with this guessing game!",
    projDate: "June 2022",
    updatedDate: "April 2024",
    linkRef: "/color-guesser",
    buttonText: "View Project"
  },
  {
    projectName: "Coming Soon!",
    projectImg: "/ComingSoonProj.png",
    description: "Coming soon, stay tuned!",
    projDate: "TBD",
    updatedDate: "",
    linkRef: "/",
    buttonText: ""
  },
]