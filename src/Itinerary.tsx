import { useCityStore } from "./store";
import { useParams } from "react-router-dom";

export const Itinerary = () => {
  const { id } = useParams();
  const state = useCityStore((state) => state.city);

  const filteredItems = state.filter((item) =>
    item.id.toString().includes(String(id))
  );
  return (
    <div>
      {filteredItems[0].itinerary.map((item) => {
        return (
          <div>
            {item.title}
            <br />
            {item.id}
          </div>
        );
      })}
    </div>
  );
};
