import "./TopInfo.scss";
import { useLocation } from "react-router-dom";
import { StarIcon } from "../../svg/Star";
import { useEffect, useState } from "react";
const TopInfo = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (location.pathname) {
      case "/places":
        setTitle("Места");
        break;
      case "/events":
        setTitle("Москва");
        break;
    }
  }, [location.pathname]);
  return (
    <div className="Places_top_info">
      <div className="Top_info_text">{title}</div>
      {location.pathname === "/places" || location.pathname === "/events" ? (
        <div className="Top_info_star">
          <StarIcon />
        </div>
      ) : null}
    </div>
  );
};

export default TopInfo;
