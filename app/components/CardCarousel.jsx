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
            <div className="tertiary-offWhite carouselCard">
              {/* img */}
              <div className="carouselImage">
                <Image src={d.projectImg} width={300} height={300} alt="Cartoon Rebecca" className="w-full h-auto rounded-t-lg" />
              </div>
              {/* text */}
              <div className="carouselTextContainer">
                <p className="projectTitle">{d.projectName}</p>
                <p className="text-sm">{d.description}</p>
                <p className="text-sm">Project Date: {d.projDate}</p>
                {d.updatedDate? (
                  <p className="text-sm">Updated on: {d.updatedDate}</p>
                ) : (
                  <div></div>
                )}
                <Link href={`${d.linkRef}`} className="projectButton">{d.buttonText}</Link>
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
    projectImg: "/higher-or-lower.png",
    description: "Quick and fun game where you must guess if the hidden card is higher or lower than the card shown. Test your luck and give it a try!",
    projDate: "March 2022",
    updatedDate: "April 2024",
    linkRef: "/higher-or-lower",
    buttonText: "View Project"
  },
  {
    projectName: "Color Guesser",
    projectImg: "/rebecca-heyman.png",
    description: "How well do you know your RGB colors? Test your knowledge with this guessing game!",
    projDate: "June 2022",
    updatedDate: "",
    linkRef: "/color-guesser",
    buttonText: "View Project"
  },
  {
    projectName: "Gary the Ghost",
    projectImg: "/rebecca-heyman.png",
    description: "Gary the Ghost is a short one level platformer which served as my final project for Intro to Programming 1. In this project we utilize only p5.js functionality to create a fully playable game.",
    projDate: "March 2024",
    updatedDate: "",
    linkRef: "/blog",
    buttonText: "View Project"
  },
]