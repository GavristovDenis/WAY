import { memo, FC } from "react";
import "./Input.scss";

interface InputWithIconProps {
  placeholderText?: string;
  color?: string;
  search: any;
  setSearch: any;
}
const InputWithIcon: FC<InputWithIconProps> = memo(
  ({ placeholderText, color, search, setSearch }) => {
    return (
      <div className="Input_container">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          className={
            color === "blue" ? "List_input_for_city_select" : "List_input"
          }
          placeholder={placeholderText}
        />
        <div
          className="Search_icon"
          style={{
            position: "absolute",
            top: "35%",
            left: "10px",
            transform: "translateY(-50%)",
          }}
          onClick={() => console.log("click")}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="#476BCE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.9999 21L16.6499 16.65"
              stroke="#476BCE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    );
  }
);

export default InputWithIcon;
