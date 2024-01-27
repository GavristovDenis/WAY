import { useLocation } from "react-router-dom";
import { useCityStore } from "./store";
import { filteredCity, filteredRoad } from "./utils";

export const Road = () => {
  const location = useLocation().pathname.split("itinerary/")[1].split("/");
  const cities = useCityStore((state) => state.city);
  const filteredItems = filteredCity(cities, location[0]);
  const road = filteredRoad(filteredItems.itinerary, location[1]);

  return (
    <div>
      <div>{road.title}</div>
      <div>{road.description}</div>
    </div>
  );
};
