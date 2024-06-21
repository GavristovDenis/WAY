import "./Header.scss";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TopInfo } from "../components/TopInfo";
import { Avatar } from "../svg/Avatar";
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
      setTitle("Афиша");
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
        <Link to={"/sidebar"}>
          <SidebarIcon />
        </Link>

        <div>{title}</div>
        {location.pathname.includes("sidebar") ||
        location.pathname.includes("%") ? (
          <BackArrow onClick={goBack} />
        ) : (
          <Avatar />
        )}
      </div>
      {location.pathname === "/places" || location.pathname === "/events" ? (
        <TopInfo />
      ) : null}
    </div>
  );
};
