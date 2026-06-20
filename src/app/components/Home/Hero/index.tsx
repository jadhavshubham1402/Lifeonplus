"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import withBasePath from "@/utils/basePath";

const bannerSlides = [
  {
    id: 1,
    image: "/images/banner/banner21.jpeg",
    alt: "LifeOnPlus Banner 1",
  },
  {
    id: 2,
    image: "/images/banner/banner22.jpeg",
    alt: "LifeOnPlus Banner 2",
  },
  {
    id: 3,
    image: "/images/services/dehk.jpeg",
    alt: "LifeOnPlus Banner 3",
  },
  {
    id: 5,
    image: "/images/services/dmek.png",
    alt: "LifeOnPlus Banner 3",
  },
  {
    id: 6,
    image: "/images/services/diagnosis1.png",
    alt: "LifeOnPlus Banner 3",
  },
    {
    id: 7,
    image: "/images/services/ai2.png",
    alt: "LifeOnPlus Banner 3",
  },
    {
    id: 8,
    image: "/images/services/brs1.png",
    alt: "LifeOnPlus Banner 3",
  },
    {
    id: 6,
    image: "/images/services/brs2.png",
    alt: "LifeOnPlus Banner 3",
  },
    {
    id: 6,
    image: "/images/services/brs3.png",
    alt: "LifeOnPlus Banner 3",
  },
    {
    id: 6,
    image: "/images/services/brs4.jpeg",
    alt: "LifeOnPlus Banner 3",
  },
  // Add more banner images here
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <section id="Home" className="relative overflow-hidden">
      {/* Full Height Banner Slider */}
      {/* <div className="relative h-screen min-h-[640px]"> */}
      <Slider {...settings} className="h-full mt-14">
        {bannerSlides.map((slide) => (
          <div key={slide.id}>
            <div className="border-[3px] border-[#35A93E] h-full">
              <img src={slide.image} className="w-full h-full object-contain" />
            </div>
          </div>
        ))}
      </Slider>
      {/* </div> */}
    </section>
  );
};

export default Banner;
