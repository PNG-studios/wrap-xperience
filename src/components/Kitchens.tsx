"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Kitchens() {
  return (
    <section className="my-15 justify-center gap-8 w-full max-w-[1440px] mx-auto">
      <h2 className="text-3xl text-primary font-bold text-dark">
        EEN OVERZICHT VAN DE KEUKENS
      </h2>
      <div className="p-8">
        <Swiper
          navigation
          modules={[Navigation]}
          className="mySwiper"
          effect="cards"
          grabCursor={true}
          slidesPerView={3}
          spaceBetween={90}
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="relative group w-auto h-[50vh]">
                <img
                  className="w-full h-full object-cover duration-300 group-hover:brightness-75 group-hover:scale-110"
                  src="/images/hero.png"
                  alt={`Kitchen ${index + 1}`}
                />
                {/* overlay text */}
                <div
                  className="absolute inset-0 flex items-center justify-center 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300"
                >
                  <p className="text-white text-2xl font-bold">{`Kitchen ${index + 1}`}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          ,
        </Swiper>
      </div>
    </section>
  );
}
