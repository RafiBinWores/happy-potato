import { useMemo, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Inject the keyframes once
if (
  typeof document !== "undefined" &&
  !document.getElementById("menuShakeStyle")
) {
  const style = document.createElement("style");
  style.id = "menuShakeStyle";
  style.textContent = `
 0% { transform: skewY(-15deg); }
  5% { transform: skewY(15deg); }
  10% { transform: skewY(-15deg); }
  15% { transform: skewY(15deg); }
  20% { transform: skewY(0deg); }
  100% { transform: skewY(0deg); }
    }
    .shake-animation {
      animation: menuShake 0.8s ease-in-out both;
    }
  `;
  document.head.appendChild(style);
}

const MenuSlider = ({ items = [] }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const onEnter = (entry) => {
      const imgs = entry.target.querySelectorAll("[data-shake]");
      imgs.forEach((img, i) => {
        // reset (so it can retrigger)
        img.classList.remove("shake-animation");
        // force reflow
        void img.offsetWidth;
        // small stagger for nicer feel
        setTimeout(() => {
          img.classList.add("shake-animation");
          img.addEventListener(
            "animationend",
            () => img.classList.remove("shake-animation"),
            { once: true }
          );
        }, i * 80);
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) onEnter(entry);
        });
      },
      {
        threshold: 0.35, // ~1/3 of the section visible
        rootMargin: "0px",
      }
    );

    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  const data = useMemo(
    () =>
      items.length
        ? items
        : [
            {
              id: 1,
              image: "assets/images/menu/order1.jpg",
              alt: "Pop Chicken",
            },
            {
              id: 2,
              image: "assets/images/menu/order2.jpg",
              alt: "Loopy Fries",
            },
            {
              id: 3,
              image: "assets/images/menu/order3.jpg",
              alt: "Smiley Fries",
            },
            {
              id: 4,
              image: "assets/images/menu/order4.jpg",
              alt: "Waffle Fries",
            },
            {
              id: 5,
              image: "assets/images/menu/order5.jpg",
              alt: "Jumbo Nugget",
            },
            {
              id: 6,
              image: "assets/images/menu/order6.jpg",
              alt: "Jumbo Nugget",
            },
          ],
    [items]
  );

  return (
    <section ref={sectionRef} className="relative py-8 overflow-hidden bg-white">
      <div className="flex flex-col lg:flex-row lg:items-center c-space md:justify-between gap-x-5 lg:mb-20">
        <h3 className="text-primary text-[23px] md:text-[40px] mb-4 md:mb-0 p-2 whitespace-nowrap shrink-0">
          CHICKEN & SPECIALTY FRIES
        </h3>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-3 lg:gap-8 md:mt-4">
          <p className="text-customBlue text-[13px] md:text-base">
            They’re not just sides, but expressions of our love for all things
            potato, served up with a twist of culinary creativity.
          </p>
          {/* Custom nav buttons */}
          <div className="flex items-center gap-6 mt-5 md:mt-0">
            <button
              className="hp-prev inline-grid place-items-center size-[26px] lg:size-10 rounded-full bg-primary ring-4 ring-secondary transition cursor-pointer hover:bg-customBlue duration-300"
              aria-label="Previous"
            >
              <ChevronLeft className="text-secondary size-[26px] lg:size-10" />
            </button>
            <button
              className="hp-next inline-grid place-items-center size-[26px] lg:size-10 rounded-full bg-primary ring-4 ring-secondary transition cursor-pointer hover:bg-customBlue duration-300"
              aria-label="Next"
            >
              <ChevronRight className="text-secondary size-[26px] lg:size-10" />
            </button>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="mt-6">
        <Swiper
          modules={[Navigation, Autoplay, A11y]}
          slidesPerView={2.2}
          spaceBetween={16}
          loop
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          navigation={{ prevEl: ".hp-prev", nextEl: ".hp-next" }}
          breakpoints={{
            480: { slidesPerView: 2.5, spaceBetween: 16 },
            640: { slidesPerView: 2.5, spaceBetween: 16 },
            768: { slidesPerView: 3.5, spaceBetween: 20 },
            1024: { slidesPerView: 4.5, spaceBetween: 24 },
            1280: { slidesPerView: 5.5, spaceBetween: 28 },
          }}
          className="!overflow-visible"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="group overflow-hidden">
                <img
                  data-shake
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full cursor-pointer object-contain object-center will-change-transform"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MenuSlider;
