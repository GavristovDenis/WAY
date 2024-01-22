import { Link, useParams } from "react-router-dom";
import { useCityStore } from "./store";
import { useTranslation } from "react-i18next";

export const CityPage = () => {
  const { id } = useParams();
  const state = useCityStore((state) => state.city);
  const { t } = useTranslation();

  const filteredItems = state.filter((item) =>
    item.id.toString().includes(String(id))
  );
  return (
    <div>
      <div>
        <Link to={"/main"}>back</Link>
      </div>
      {t(filteredItems[0].city)}
      {t(filteredItems[0].description)}
    </div>
  );
};
