import "./Header.scss";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TopInfo } from "../components/TopInfo";
import { SidebarIcon } from "../svg/SidebarIcon";
import { BackArrow } from "../svg/BackArrow";
export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    if (location.pathname.includes("places")) {
      setTitle("Места");
    } else if (location.pathname.includes("help")) {
      setTitle("Помощь");
    } else if (location.pathname.includes("events")) {
      setTitle("События");
    } else if (location.pathname.includes("sidebar")) {
      setTitle("Меню");
    } else if (location.pathname.includes("city_select")) {
      setTitle("Выбор города");
    } else {
      setTitle("");
    }
  }, [location.pathname]);
  return (
    <div className="Header_container">
      <div className="Header_wrapper">
        <Link style={{ zIndex: 5 }} to={"/sidebar"}>
          <SidebarIcon />
        </Link>

        <div>{title}</div>
        {location.pathname !== "/city_select" ? (
          <BackArrow onClick={goBack} />
        ) : (
          <div />
        )}
      </div>
      {location.pathname === "/places" || location.pathname === "/events" ? (
        <TopInfo />
      ) : null}
    </div>
  );
};
