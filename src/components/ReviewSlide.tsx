"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Image from "next/image";
import { reviews } from "@/data/reviewData";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const ReviewSlide = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      modules={[Autoplay, Pagination]}
      navigation={true}
      pagination={{ dynamicBullets: true }}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      }}
    >
      {reviews.map((review, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white px-6 py-8 shadow-lg rounded-md">
            <div className="size-10 bg-primary-100 rounded-full flex items-center justify-center text-primary bg-opacity-20 ">
              <BiSolidQuoteAltLeft />
            </div>
            <p className="mt-4 mb-7 text-gray-600 text-[15px]">{review.text}</p>
            <div className="flex items-center">
              <div className="size-12 rounded-full mr-3 overflow-hidden">
                <Image
                  src={review.image}
                  alt="review-img"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-base">{review.author.name}</p>
                <p className="font-medium text-sm">{review.author.role}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewSlide;
