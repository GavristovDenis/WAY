import { FC } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./Description.scss";
import { Slider } from "../components/Slider";
import { useCityStore } from "../store";

export const CityItem: FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const placesData = useCityStore((state) => state.placesData);
  const eventsData = useCityStore((state) => state.eventsData);

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
          <Slider isMain={false} array={item.sliderImages} />
        </div>
        <div className="Author_and_when">
          <div>{item.author}</div>·<div>{item.date}</div>
        </div>
        <div className="Description_name">
          {item.name}
          <a
            style={{ marginLeft: "16px" }}
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.93934 15.9393C0.353553 16.5251 0.353553 17.4749 0.93934 18.0607C1.52513 18.6464 2.47487 18.6464 3.06066 18.0607L0.93934 15.9393ZM18.5 2C18.5 1.17157 17.8284 0.499999 17 0.5L3.5 0.499999C2.67157 0.499999 2 1.17157 2 2C2 2.82843 2.67157 3.5 3.5 3.5L15.5 3.5L15.5 15.5C15.5 16.3284 16.1716 17 17 17C17.8284 17 18.5 16.3284 18.5 15.5L18.5 2ZM3.06066 18.0607L18.0607 3.06066L15.9393 0.939339L0.93934 15.9393L3.06066 18.0607Z"
                fill="#426AFF"
              />
            </svg>
          </a>
        </div>

        <p
          className="Description_description"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
      </div>
      <div className="Descritpion_button_container">
        <button className="Description_button">
          <a
            className="Description_link"
            href={item.mapLink}
            target="_blank"
            rel="noreferrer"
          >
            открыть_карту
          </a>
        </button>
      </div>
    </div>
  );
};
