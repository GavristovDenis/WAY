import { useCityStore } from "./store";
import { useParams } from "react-router-dom";

export const Itinerary = () => {
  const { id } = useParams();
  const state = useCityStore((state) => state.city);

  const filteredItems = state.filter((city) =>
    city.id.toString().includes(String(id))
  )[0];
  return (
    <div>
      {filteredItems.itinerary.map((route) => {
        return (
          <div>
            {route.title}
            <br />
            {route.id}
          </div>
        );
      })}
    </div>
  );
};
