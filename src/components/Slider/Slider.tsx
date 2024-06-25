import "./Slider.scss";
import { Carousel } from "antd";
import { FC } from "react";
import { City } from "../../types";
import { useLocation, useNavigate } from "react-router-dom";
import { useCityStore } from "../../store";

interface SliderProps {
  array: City[];
}
const Slider: FC<SliderProps> = ({ array }) => {
  const selectedCity = useCityStore((state) => state.selectedCity);
  const setSelectedCity = useCityStore((state) => state.setSelectedCity);
  const setSelectedCityId = useCityStore((state) => state.setSelectedCityId);

  const location = useLocation();
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
  };
  const citySelect = (city: string, id?: string) => {
    if (location.pathname === "/city_select") {
      navigate("/places");
      setSelectedCity(city);
      setSelectedCityId(id ? id : "");
    } else {
      return;
    }
  };
  return (
    <Carousel {...settings} className="Slider">
      {array.map((item, index) => {
        return (
          <>
            <img
              className="Slider_image"
              src={item.image}
              key={index}
              alt="Изображение не найдено"
              onClick={() =>
                item.name ? citySelect(item.name, item.id?.toString()) : null
              }
            />
            <div
              className={
                selectedCity === item.name
                  ? "City_select_city_title_red"
                  : "City_select_city_title"
              }
            >
              {location.pathname === "/city_select" ? item.name : null}
            </div>
          </>
        );
      })}
    </Carousel>
  );
};
export default Slider;
