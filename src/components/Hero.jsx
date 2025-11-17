// src/components/Hero.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";



import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Premium Auto Wash Services",
    subtitle: "We provide professional car wash with modern tools & skilled experts.",
    image: hero1,
  },
  {
    id: 2,
    title: "Keep Your Car Spotless",
    subtitle: "Fast, clean, reliable & eco-friendly car washing.",
    image: hero2,
  },
  {
    id: 3,
    title: "Detailing & Deep Cleaning",
    subtitle: "Give your car the shine it deserves.",
    image: hero3,
  },
];

const Hero = () => {
  return (
    <div className="w-[80%] mx-auto h-[80vh] md:h-[90vh] relative overflow-hidden">

      {/* Swiper Main Section */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500 }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="bg-black/50 absolute inset-0" />

              {/* Animated Content */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative text-white px-6 md:px-20 max-w-2xl"
              >
                <h1 className="text-3xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="mt-4 text-lg md:text-xl opacity-90 mb-4 drop-shadow-lg"
                >
                  {slide.subtitle}
                </motion.p>

             <button className="
  relative px-8 py-3 overflow-hidden font-semibold text-white rounded-lg
  bg-gradient-to-r from-red-700 to-red-500
  transition-transform duration-300 ease-out
  hover:scale-105
  group
">
  <span className="relative z-10">Explore More</span>

  {/* Hover gradient swipe effect */}
  <span className="
    absolute inset-0 bg-gradient-to-r from-red-500 to-red-700
    translate-x-[-100%] group-hover:translate-x-0
    transition-transform duration-500 ease-out
  "></span>
</button>


              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
