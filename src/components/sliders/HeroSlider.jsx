import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImageUpload from "../image/ImageUpload";

export default function HeroSlider() {
  // custom ease-out effect for smooth transitions
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `.fries-swiper .swiper-wrapper{transition-timing-function:cubic-bezier(.22,1,.36,1)!important}`;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <section className="pt-10 md:pt-18 lg:pt-10">
      <div className="c-space">
        <div className="relative">
          {/* Left arrow (outside) */}
          <button
            className="fries-prev absolute -left-7 md:-left-10 lg:-left-16 top-1/2 -translate-y-1/2 z-20 pointer-events-auto cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="fa-solid fa-chevron-left text-secondary hover:text-primary duration-300 size-9 md:size-14 lg:size-16" />
          </button>

          {/* Swiper slider */}
          <Swiper
            className="fries-swiper overflow-visible"
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop={true}
            spaceBetween={30}
            centeredSlides={true}
            speed={2000}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{ nextEl: ".fries-next", prevEl: ".fries-prev" }}
          >
            <SwiperSlide>
              <ImageUpload
                src="hero/hero1.jpg"
                alt="Happy Potato Hero 1"
                className="w-full h-[150px] md:h-[300px] lg:h-[450px] bg-center rounded-3xl object-cover select-none"
              />
            </SwiperSlide>

            <SwiperSlide>
              <ImageUpload
                src="hero/hero2.jpg"
                alt="Happy Potato Hero 2"
                className="w-full h-[150px] md:h-[300px] lg:h-[450px] bg-center rounded-3xl object-cover select-none"
              />
            </SwiperSlide>

            <SwiperSlide>
              <ImageUpload
                src="hero/hero3.jpg"
                alt="Happy Potato Hero 3"
                className="w-full h-[150px] md:h-[300px] lg:h-[450px] bg-center rounded-3xl object-cover select-none"
              />
            </SwiperSlide>
          </Swiper>

          {/* Right arrow (outside) */}
          <button
            className="fries-next absolute -right-7 md:-right-10 lg:-right-16 top-1/2 -translate-y-1/2 z-20 pointer-events-auto cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="fa-solid fa-chevron-left text-secondary hover:text-primary duration-300 size-9 md:size-14 lg:size-16" />
          </button>
        </div>
      </div>
    </section>
  );
}
