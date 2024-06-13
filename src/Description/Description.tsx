import { FC } from "react";
import { useParams, useLocation } from "react-router-dom";
import { eventsData, placesData } from "../const/mockData";
import "./Description.scss";
import { Slider } from "../components/Slider";

export const CityItem: FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  if (!id) {
    return <div>No item found</div>;
  }

  const item = location.pathname.includes("/events")
    ? eventsData.find((item) => item.id === parseInt(id))
    : placesData.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Страница не найдена</div>;
  }
  return (
    <div className="Description_wrapper">
      <div className="Description_container">
        <div className="Description_slider_container">
          <Slider array={item.sliderImages} />
        </div>
        <div className="Description_name">{item.name}</div>
        <div className="Author_and_when">
          <div>от{item.author}</div>·<div>{item.date}</div>
        </div>
        <p>{item.description}</p>
        <div className="Descritpion_button_container">
          <button className="Description_button">открыть карту</button>
        </div>
      </div>
    </div>
  );
};
