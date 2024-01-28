import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Link } from "react-router-dom";
import { useCityStore } from "./store";
import { useTranslation } from "react-i18next";

export const Slider = () => {
  const { t } = useTranslation();
  const state = useCityStore((state) => state.city);
  return (
    <>
      <Swiper loop={true} className="mySwiper">
        {state.map(({ id, city, img }) => {
          return (
            <SwiperSlide className="SwiperSlide" key={id}>
              <img alt={city} src={img} />
              <div className="SwiperSlideCity">
                <Link className="SwiperSlideCityLink" to={`/${id}`}>
                  {t(city)}
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
