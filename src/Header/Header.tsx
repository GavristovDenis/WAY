import "./Header.scss";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { TopInfo } from "../components/TopInfo";
export const Header = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");
  useEffect(() => {
    switch (location.pathname) {
      case "/places":
        setTitle("Места");
        break;
      case "/help":
        setTitle("Помощь");
        break;
      case "/billboard":
        setTitle("Афиша");
        break;
      default:
        setTitle(" ");
    }
  }, [location.pathname]);
  return (
    <div className="Header_container">
      <div className="Header_wrapper">
        <div className="Sidebar_icon" onClick={() => console.log("click")}>
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.100098 0.999976C0.100098 0.502919 0.503041 0.0999756 1.0001 0.0999756H17.0001C17.4972 0.0999756 17.9001 0.502919 17.9001 0.999976C17.9001 1.49703 17.4972 1.89998 17.0001 1.89998H1.0001C0.503041 1.89998 0.100098 1.49703 0.100098 0.999976Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.0996094 6.99998C0.0996094 6.50292 0.416531 6.09998 0.807475 6.09998H13.3917C13.7827 6.09998 14.0996 6.50292 14.0996 6.99998C14.0996 7.49703 13.7827 7.89998 13.3917 7.89998H0.807475C0.416531 7.89998 0.0996094 7.49703 0.0996094 6.99998Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.100098 13C0.100098 12.5029 0.503041 12.1 1.0001 12.1H17.0001C17.4972 12.1 17.9001 12.5029 17.9001 13C17.9001 13.497 17.4972 13.9 17.0001 13.9H1.0001C0.503041 13.9 0.100098 13.497 0.100098 13Z"
              fill="white"
            />
          </svg>
        </div>
        <div>{title}</div>
        <div className="Avatar">
          <svg
            fill="#ffffff"
            height="24px"
            width="24px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <path d="M333.187,237.405c32.761-23.893,54.095-62.561,54.095-106.123C387.282,58.893,328.389,0,256,0 S124.718,58.893,124.718,131.282c0,43.562,21.333,82.23,54.095,106.123C97.373,268.57,39.385,347.531,39.385,439.795 c0,39.814,32.391,72.205,72.205,72.205H400.41c39.814,0,72.205-32.391,72.205-72.205 C472.615,347.531,414.627,268.57,333.187,237.405z M164.103,131.282c0-50.672,41.225-91.897,91.897-91.897 s91.897,41.225,91.897,91.897S306.672,223.18,256,223.18S164.103,181.954,164.103,131.282z M400.41,472.615H111.59 c-18.097,0-32.82-14.723-32.82-32.821c0-97.726,79.504-177.231,177.231-177.231s177.231,79.504,177.231,177.231 C433.231,457.892,418.508,472.615,400.41,472.615z"></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
      </div>
      <TopInfo />
    </div>
  );
};
