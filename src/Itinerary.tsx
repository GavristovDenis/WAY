import { useCityStore } from "./store";
import { Link, useParams } from "react-router-dom";
import { filteredCity } from "./utils";

export const Itinerary = () => {
  const { id } = useParams();
  const cities = useCityStore((state) => state.city);

  const filteredItems = filteredCity(cities, id);
  return (
    <div>
      {filteredItems.itinerary.map((route) => {
        return (
          <div>
            {route.title}
            <div>
              <img style={{ width: 120 }} alt={route.img} src={route.img} />
              {route.description}
              <Link to={`/itinerary/${id}/${route.id}`}>Перейти</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
