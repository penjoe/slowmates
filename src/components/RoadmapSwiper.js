import React, { useState } from 'react';

import { IMAGES } from '../assets'

// swiper components
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/scss/thumbs';

// swiper modules
import { FreeMode, Navigation, Thumbs } from 'swiper';

const RoadmapSwiper = () => {
  const [thumbsSwiper, setThumbSwiper] = useState(null);

  return(
    <div className="swiper-container">
    
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="main-swiper"
      >
        <SwiperSlide>
          <img className="swiper-main-img" src={IMAGES.waterfallZone} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-main-img" src={IMAGES.grasslandsZone} alt="" />
        </SwiperSlide>
      </Swiper>
      
    </div>
  );
};

export default RoadmapSwiper;