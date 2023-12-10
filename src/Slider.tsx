import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Link } from "react-router-dom";

interface CityType {
  id: number;
  city: string;
}

export const Slider = () => {
  const state: CityType[] = [
    { id: 1, city: "Moscow" },
    { id: 2, city: "Samara" },
  ];
  return (
    <>
      <Swiper className="mySwiper">
        {state.map(({ id, city }) => {
          return (
            <SwiperSlide className="SwiperSlide" key={id}>
              <Link to={`/${id}`}>{city}</Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
