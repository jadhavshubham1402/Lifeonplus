"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialType } from "@/app/types/testimonial";
import withBasePath from "@/utils/basePath";
import TestimonialSkeleton from "../../Skeleton/Testimonial";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState<TestimonialType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(withBasePath("/data/data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setTestimonial(data.TestimonialData);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 800, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {/* Custom Styles for Uniform Height */}
      <style jsx global>{`
        .testimonial-slider .slick-list {
          height: auto !important;
        }

        .testimonial-slider .slick-track {
          display: flex !important;
          align-items: stretch;
        }

        .testimonial-slider .slick-slide {
          height: 100% !important;
          display: flex !important;
        }

        .testimonial-slider .slick-slide > div {
          height: 100% !important;
          width: 100% !important;
        }

        /* Optional: Equal height cards */
        .testimonial-card {
          height: 100%;
          display: flex;
          flex-direction: column;
        }
      `}</style>

      <section id="testimonial-section" className="bg-cream py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-5 justify-between sm:items-center mb-6">
            <h2 className="font-bold tracking-tight text-3xl md:text-4xl">
              Testimonial
            </h2>
            <button className="bg-transparent cursor-pointer hover:bg-primary text-primary font-semibold hover:text-white py-3 px-6 border border-primary hover:border-transparent rounded-sm duration-300 whitespace-nowrap">
              Give Your Review
            </button>
          </div>

          <p className="text-lg font-medium mb-10 max-w-2xl">
            What others say about lifeonplus.
          </p>

          <div className="testimonial-slider">
            <Slider {...settings}>
              {loading
                ? Array.from({ length: 3 }).map((_, i) => (
                    <TestimonialSkeleton key={i} />
                  ))
                : testimonial.map((items, i) => (
                    <div key={i} className="px-3 h-full">
                      <div className="testimonial-card bg-white p-8 md:p-12 rounded-2xl shadow-sm flex flex-col min-h-[360px] md:min-h-[380px]">
                        {/* Avatar */}
                        <div className="flex justify-center mb-6">
                          <div className="relative">
                            <Image
                              src={withBasePath(items.imgSrc)}
                              alt={items.name}
                              width={80}
                              height={80}
                              className="rounded-full ring-4 ring-white shadow-md"
                            />
                            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[url('/images/testimonial/greenpic.svg')] bg-contain" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col text-center">
                          <p className="text-sm text-gray-500 mb-1">
                            {items.profession}
                          </p>
                          <p className="text-base font-semibold mb-4">
                            {items.name}
                          </p>

                          <p className="text-md leading-relaxed text-gray-700 flex-1">
                            {items.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
