import "./Input.scss";
const InputWithIcon = () => {
  return (
    <div className="Input_container">
      <input type="text" placeholder="Поиск" className="List_input" />
      <div
        className="Search_icon"
        style={{
          position: "absolute",
          top: "50%",
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
};

export default InputWithIcon;
