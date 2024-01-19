import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Link } from "react-router-dom";
import { useCityStore } from "./store";

export const Slider = () => {
  const state = useCityStore((state) => state.bears);
  return (
    <>
      <Swiper loop={true} className="mySwiper">
        {state.map(({ id, city, img }) => {
          return (
            <SwiperSlide className="SwiperSlide" key={id}>
              <img alt="" src={img} />
              <div className="SwiperSlideCity">
                <Link className="SwiperSlideCityLink" to={`/${id}`}>
                  {city}
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
