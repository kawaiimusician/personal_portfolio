"use client";
import Image from "next/image"

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
    <div className="w-3/4 m-auto">
      <div>
        <Slider {...settings}>
          {cardData.map((d) => (
            <div className="bg-tertiary h-auto text-offWhite rounded-xl">
              {/* img */}
              <div className="rounded-t-xl bg-tertiary flex justify-center items-center">
                <Image src={d.projectImg} width={300} height={300} alt="Cartoon Rebecca" className="w-full h-auto rounded-t-xl" />
              </div>
              {/* text */}
              <div className="flex flex-col justify-center items-center p-4">
                <p>{d.projectName}</p>
                <p>{d.description}</p>
                <button className="bg-white text-primary text-lg px-6 py-1">Read More</button>
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
    projectName: "Example 1",
    projectImg: "/example-1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
  },
  {
    projectName: "Example 2",
    projectImg: "/rebecca-heyman.png",
    description: "This is an example of my project 1"
  },
  {
    projectName: "Example 3",
    projectImg: "/rebecca-heyman.png",
    description: "This is an example of my project 1"
  },
  {
    projectName: "Example 4",
    projectImg: "/rebecca-heyman.png",
    description: "This is an example of my project 1"
  },
  {
    projectName: "Example 5",
    projectImg: "/rebecca-heyman.png",
    description: "This is an example of my project 1"
  },
]