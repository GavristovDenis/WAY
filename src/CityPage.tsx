import { Link, useParams } from "react-router-dom";
import { useCityStore } from "./store";

export const CityPage = () => {
  const { id } = useParams();
  const state = useCityStore((state) => state.city);
  const filteredItems = state.filter((item) =>
    item.id.toString().includes(String(id))
  );
  return (
    <div>
      <div>
        <Link to={"/main"}>back</Link>
      </div>
      {filteredItems[0].city}
    </div>
  );
};
