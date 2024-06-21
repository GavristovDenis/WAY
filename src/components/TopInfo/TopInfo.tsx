import "./TopInfo.scss";
import { useLocation } from "react-router-dom";
import { StarIcon } from "../../svg/Star";
import { useCityStore } from "../../store";
const TopInfo = () => {
  const location = useLocation();
  const selectedCity = useCityStore((state) => state.selectedCity);
  return (
    <div className="Places_top_info">
      {location.pathname === "/places" || location.pathname === "/events" ? (
        <>
          <div className="Top_info_text">{selectedCity.toUpperCase()}</div>
          <div className="Top_info_star">
            <StarIcon />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default TopInfo;
