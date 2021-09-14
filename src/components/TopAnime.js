import React from "react";
import AnimeCard from "./AnimeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

function TopAnime({ topAnime }) {
  return (
    <section className="anime-slider">
      <h1>Top Anime</h1>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        loopedSlides={3}
        initialSlide={2}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {topAnime.map((anime) => (
          <SwiperSlide>
            <AnimeCard anime={anime} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default TopAnime;
