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
  const setSelectedCity = useCityStore((state) => state.setSelectedCity);
  const location = useLocation();
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
  };
  const citySelect = (city: string) => {
    if (location.pathname === "/city_select") {
      navigate("/places");
      setSelectedCity(city);
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
              onClick={() => (item.name ? citySelect(item.name) : null)}
            />
            <div className="City_select_city_title">
              {location.pathname === "/city_select" ? item.name : null}
            </div>
          </>
        );
      })}
    </Carousel>
  );
};
export default Slider;
