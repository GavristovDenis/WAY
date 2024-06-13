import "./Slider.scss";
import { Carousel } from "antd";
import { FC } from "react";

interface SliderProps {
  array: string[];
}
const Slider: FC<SliderProps> = ({ array }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    centerPadding: "50px",
  };

  return (
    <Carousel {...settings} className="Slider">
      {array.map((item, index) => {
        return (
          <img
            className="Slider_image"
            src={item}
            key={index}
            alt="Изображение не найдено"
          />
        );
      })}
    </Carousel>
  );
};
export default Slider;
