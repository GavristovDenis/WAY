import { Link } from "react-router-dom";
import "./Sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="Sidebar_wrapper">
      <div className="Sidebar_element">
        <div className="Sidebar_button">
          <Link to={"/places"} className="Sidebar_link">
            <button className="Sidebar_button_place">места</button>
          </Link>
        </div>
        <div className="Sidebar_button">
          <button className="Sidebar_button_city">выбор города</button>
        </div>
        <div className="Sidebar_button">
          <Link to={"/events"} className="Sidebar_link">
            <button className="Sidebar_button_poster">афиша</button>
          </Link>
        </div>
        <div className="Sidebar_button">
          <Link to={"/help"} className="Sidebar_link">
            <button className="Sidebar_button_help">помощь</button>
          </Link>
        </div>
        <div className="Sidebar_button">
          <button className="Sidebar_button_about">о нас</button>
        </div>
      </div>
    </div>
  );
};
