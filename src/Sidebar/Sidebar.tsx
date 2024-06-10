import "./Sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="Sidebar_wrapper">
      <div className="Sidebar_element">
        <div className="Sidebar_button Sidebar_button_place">
          <button>места</button>
        </div>
        <div className="Sidebar_button Sidebar_button_place">
          <button>выбор города</button>
        </div>
        <div className="Sidebar_button Sidebar_button_place">
          <button>афиша</button>
        </div>
        <div className="Sidebar_button Sidebar_button_place">
          <button>помощь</button>
        </div>
        <div className="Sidebar_button Sidebar_button_place">
          <button>о нас</button>
        </div>
      </div>
    </div>
  );
};
