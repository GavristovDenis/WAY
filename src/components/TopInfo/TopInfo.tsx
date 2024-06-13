import "./TopInfo.scss";
import { useLocation } from "react-router-dom";
const TopInfo = () => {
  const location = useLocation();
  return (
    <div className="Places_top_info">
      <div className="Top_info_text">Москва</div>
      {location.pathname === "/places" || location.pathname === "/billboard" ? (
        <div className="Top_info_star">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00016 1.33337L10.0602 5.50671L14.6668 6.18004L11.3335 9.42671L12.1202 14.0134L8.00016 11.8467L3.88016 14.0134L4.66683 9.42671L1.3335 6.18004L5.94016 5.50671L8.00016 1.33337Z"
              fill="#FFB323"
              stroke="#FFB323"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      ) : null}
    </div>
  );
};

export default TopInfo;
