import "./TopInfo.scss";
import { useLocation } from "react-router-dom";
import { StarIcon } from "../../svg/Star";
const TopInfo = () => {
  const location = useLocation();
  return (
    <div className="Places_top_info">
      <div className="Top_info_text">Москва</div>
      {location.pathname === "/places" || location.pathname === "/events" ? (
        <div className="Top_info_star">
          <StarIcon />
        </div>
      ) : null}
    </div>
  );
};

export default TopInfo;
