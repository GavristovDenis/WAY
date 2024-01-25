import { Link, useParams } from "react-router-dom";
import { useCityStore } from "./store";
import { useTranslation } from "react-i18next";

export const CityPage = () => {
  const { id } = useParams();
  const state = useCityStore((state) => state.city);
  const { t } = useTranslation();

  const filteredItems = state.filter((city) =>
    city.id.toString().includes(String(id))
  )[0];
  return (
    <div>
      <div>
        <Link to={"/main"}>back</Link>
      </div>
      <div>{t(filteredItems.city)}</div>

      <div>{t(filteredItems.description)}</div>
      <div>
        <Link to={`/itinerary/${id}`}>itinerary</Link>
      </div>
    </div>
  );
};
