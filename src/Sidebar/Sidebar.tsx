import "./Sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="Sidebar_wrapper">
      <div className="Sidebar_element">
        <div className="Sidebar_button">
          <button className="Sidebar_button_place">места</button>
        </div>
        <div className="Sidebar_button">
          <button className="Sidebar_button_city">выбор города</button>
        </div>
        <div className="Sidebar_button">
          <button className="Sidebar_button_poster">афиша</button>
        </div>
        <div className="Sidebar_button">
          <button className="Sidebar_button_help">помощь</button>
        </div>
        <div className="Sidebar_button">
          <button className="Sidebar_button_about">о нас</button>
        </div>
      </div>
    </div>
  );
};
