import { Link, useParams } from "react-router-dom";
import { useCityStore } from "./store";
import { useTranslation } from "react-i18next";
import { filteredCity } from "./utils";

export const CityPage = () => {
  const { id } = useParams();
  const cities = useCityStore((state) => state.city);
  const { t } = useTranslation();

  const filteredItems = filteredCity(cities, id);
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
