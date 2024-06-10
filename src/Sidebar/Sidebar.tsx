import "./Sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="Sidebar_wrapper">
      <div className="Sidebar_element">
        <div className="Sidebar_button Sidebar_button_place">
          <button>места</button>
        </div>
        <div className="Sidebar_button Sidebar_button_city">
          <button>выбор города</button>
        </div>
        <div className="Sidebar_button Sidebar_button_poster">
          <button>афиша</button>
        </div>
        <div className="Sidebar_button Sidebar_button_help">
          <button>помощь</button>
        </div>
        <div className="Sidebar_button Sidebar_button_about">
          <button>о нас</button>
        </div>
      </div>
    </div>
  );
};
