"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import withBasePath from "@/utils/basePath";

const bannerSlides = [
  {
    id: 1,
    image: "/images/banner/background1.png",
    alt: "LifeOnPlus Banner 1",
  },
  {
    id: 2,
    image: "/images/banner/background2.png",
    alt: "LifeOnPlus Banner 2",
  },
  {
    id: 3,
    image: "/images/banner/background3.png",
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
        <Slider {...settings} className="h-full">
          {bannerSlides.map((slide) => (
            <div key={slide.id} className="bg-banner-image">
              <Image
                src={withBasePath(slide.image)}
                alt={slide.alt}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
          ))}
        </Slider>
      {/* </div> */}
    </section>
  );
};

export default Banner;
