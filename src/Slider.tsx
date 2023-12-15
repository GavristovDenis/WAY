import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Link } from "react-router-dom";

interface CityType {
  id: number;
  city: string;
  img: string;
}

export const Slider = () => {
  const state: CityType[] = [
    {
      id: 1,
      city: "Moscow",
      img: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663320905_22-mykaleidoscope-ru-p-sovremennaya-moskva-oboi-24.jpg",
    },
    {
      id: 2,
      city: "Samara",
      img: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663320905_22-mykaleidoscope-ru-p-sovremennaya-moskva-oboi-24.jpg",
    },
  ];
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
