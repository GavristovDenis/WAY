import { useEffect } from "react";
import "./LoadingPage.scss";
import { useNavigate } from "react-router-dom";

export const LoadingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/city_select");
    }, 2000);
  }, [navigate]);
  return (
    <div className="LoadingPage_wrapper">
      <div className="LoadingPage_element">
        <svg
          width="325"
          height="198"
          viewBox="0 0 325 198"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M193.946 33.9141L239.206 73.7995"
            stroke="white"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g filter="url(#filter0_dd_607_865)">
            <path
              d="M193.946 113.66L239.206 73.7994"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <g filter="url(#filter1_ddd_607_865)">
            <path
              d="M193.946 113.66H43.6113V33.9141H193.946"
              stroke="white"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
              shape-rendering="crispEdges"
            />
          </g>
          <g filter="url(#filter2_d_607_865)">
            <path
              d="M99.7698 90.6536L94.0738 69.3416L88.4418 90.6536H78.0098L70.5218 57.3736H79.4818L83.8338 80.2856L90.0418 57.3736H98.1698L104.378 80.2856L108.73 57.3736H117.69L110.202 90.6536H99.7698ZM127.574 67.6136H118.614C119.126 59.1016 125.974 56.4136 133.654 56.4136C141.654 56.4136 148.054 59.2936 148.054 67.9336V90.6536H139.094V84.2536H138.774C138.774 84.2536 136.726 91.6136 128.214 91.6136C122.134 91.6136 117.654 88.7976 117.654 82.6536C117.654 76.4456 122.774 73.6296 128.278 72.2216C133.846 70.8136 139.094 70.3656 139.094 66.6536C139.094 64.0296 137.174 62.4936 133.654 62.4936C129.814 62.4936 127.702 64.0296 127.574 67.6136ZM139.094 73.8856C137.622 75.2296 134.614 75.9336 132.054 76.5736C129.174 77.2776 126.742 78.7496 126.742 81.6936C126.742 84.2536 128.534 85.8536 131.414 85.8536C137.494 85.8536 139.094 78.8136 139.094 73.8856ZM183.254 57.3736L171.414 91.6136C168.79 99.2296 165.334 103.134 158.614 103.134C155.414 103.134 152.854 102.174 152.854 102.174V94.8136C152.854 94.8136 154.774 95.4536 157.014 95.4536C160.214 95.4536 161.494 93.7256 162.774 90.6536L149.334 57.3736H158.934L167.062 79.3256L173.654 57.3736H183.254Z"
              fill="white"
            />
          </g>
          <g filter="url(#filter3_d_607_865)">
            <path
              d="M65.2335 77.2577C49.0106 48.395 36.0227 42.8964 4 51.381C36.0227 42.8964 40.2776 32.8192 24.0548 3.95642C40.2776 32.8192 53.2655 38.3178 85.2882 29.8331C53.2655 38.3427 49.0106 48.395 65.2335 77.2577Z"
              fill="white"
            />
            <path
              d="M8.00586 61.2092C36.8935 44.9863 42.3672 31.9978 33.8826 0C42.3672 31.9978 52.4444 36.2527 81.3072 20.0299C52.4196 36.2527 46.9458 49.2412 55.4305 81.239C46.9458 49.2412 36.8686 44.9863 8.00586 61.2092Z"
              fill="white"
            />
          </g>
          <g filter="url(#filter4_d_607_865)">
            <path
              d="M280.118 188H45.2645C38.0137 188 32.0625 181.651 32.0625 173.862V152.374C32.0625 144.609 37.9909 138.237 45.2645 138.237H280.118C287.369 138.237 293.32 144.585 293.32 152.374V173.862C293.32 181.627 287.369 188 280.118 188Z"
              fill="white"
            />
          </g>
          <path
            d="M61.3154 172.701L58.1114 160.713L54.9434 172.701H49.0754L44.8634 153.981H49.9034L52.3514 166.869L55.8434 153.981H60.4154L63.9074 166.869L66.3554 153.981H71.3954L67.1834 172.701H61.3154ZM84.7095 172.701V165.321H77.6895V172.701H72.6495V153.981H77.6895V161.361H84.7095V153.981H89.7495V172.701H84.7095ZM91.3836 163.341C91.3836 157.869 94.5876 153.441 100.744 153.441C106.9 153.441 109.744 157.869 109.744 163.341C109.744 163.773 109.708 164.421 109.708 164.421H96.4596C96.6756 167.301 97.8996 169.461 100.924 169.461C103.984 169.461 104.524 166.581 104.524 166.581H109.564C109.564 166.581 108.484 173.241 100.744 173.241C94.4436 173.241 91.3836 168.813 91.3836 163.341ZM100.744 157.221C98.2596 157.221 97.0356 158.877 96.6036 161.181H104.56C104.236 158.877 103.228 157.221 100.744 157.221ZM111.357 172.701V153.981H116.397V157.941H118.917C121.077 157.941 121.797 157.941 121.797 155.601V153.981H126.837V156.141C126.837 160.281 125.397 161.541 120.177 161.541H116.397V172.701H111.357ZM127.173 163.341C127.173 157.869 130.377 153.441 136.533 153.441C142.689 153.441 145.533 157.869 145.533 163.341C145.533 163.773 145.497 164.421 145.497 164.421H132.249C132.465 167.301 133.689 169.461 136.713 169.461C139.773 169.461 140.313 166.581 140.313 166.581H145.353C145.353 166.581 144.273 173.241 136.533 173.241C130.233 173.241 127.173 168.813 127.173 163.341ZM136.533 157.221C134.049 157.221 132.825 158.877 132.393 161.181H140.349C140.025 158.877 139.017 157.221 136.533 157.221ZM161.014 159.741H155.974C156.262 154.953 160.114 153.441 164.434 153.441C168.934 153.441 172.534 155.061 172.534 159.921V172.701H167.494V169.101H167.314C167.314 169.101 166.162 173.241 161.374 173.241C157.954 173.241 155.434 171.657 155.434 168.201C155.434 164.709 158.314 163.125 161.41 162.333C164.542 161.541 167.494 161.289 167.494 159.201C167.494 157.725 166.414 156.861 164.434 156.861C162.274 156.861 161.086 157.725 161.014 159.741ZM167.494 163.269C166.666 164.025 164.974 164.421 163.534 164.781C161.914 165.177 160.546 166.005 160.546 167.661C160.546 169.101 161.554 170.001 163.174 170.001C166.594 170.001 167.494 166.041 167.494 163.269ZM174.321 172.701V153.981H179.361V157.941H181.881C184.041 157.941 184.761 157.941 184.761 155.601V153.981H189.801V156.141C189.801 160.281 188.361 161.541 183.141 161.541H179.361V172.701H174.321ZM190.137 163.341C190.137 157.869 193.341 153.441 199.497 153.441C205.653 153.441 208.497 157.869 208.497 163.341C208.497 163.773 208.461 164.421 208.461 164.421H195.213C195.429 167.301 196.653 169.461 199.677 169.461C202.737 169.461 203.277 166.581 203.277 166.581H208.317C208.317 166.581 207.237 173.241 199.497 173.241C193.197 173.241 190.137 168.813 190.137 163.341ZM199.497 157.221C197.013 157.221 195.789 158.877 195.357 161.181H203.313C202.989 158.877 201.981 157.221 199.497 157.221ZM237.299 153.981L230.639 173.241C229.163 177.525 227.219 179.721 223.439 179.721C221.639 179.721 220.199 179.181 220.199 179.181V175.041C220.199 175.041 221.279 175.401 222.539 175.401C224.339 175.401 225.059 174.429 225.779 172.701L218.219 153.981H223.619L228.191 166.329L231.899 153.981H237.299ZM242.146 163.341C242.146 166.725 243.442 169.461 246.646 169.461C249.85 169.461 251.146 166.725 251.146 163.341C251.146 159.957 249.85 157.221 246.646 157.221C243.442 157.221 242.146 159.957 242.146 163.341ZM237.106 163.341C237.106 157.869 240.49 153.441 246.646 153.441C252.802 153.441 256.186 157.869 256.186 163.341C256.186 168.813 252.802 173.241 246.646 173.241C240.49 173.241 237.106 168.813 237.106 163.341ZM275.277 153.981V172.701H270.417V169.641H270.237C270.237 169.641 268.617 173.241 264.477 173.241C259.257 173.241 257.817 169.821 257.817 165.501V153.981H262.857V164.421C262.857 167.661 263.757 169.101 266.097 169.101C268.797 169.101 270.237 167.481 270.237 163.701V153.981H275.277Z"
            fill="#EB6669"
          />
          <g filter="url(#filter5_d_607_865)">
            <path
              d="M256.169 89.3163V88.9072C256.214 84.5663 256.669 81.1117 257.532 78.5435C258.396 75.9754 259.623 73.8958 261.214 72.3049C262.805 70.714 264.714 69.2481 266.942 67.9072C268.282 67.089 269.487 66.1231 270.555 65.0095C271.623 63.8731 272.464 62.5663 273.078 61.089C273.714 59.6117 274.032 57.9754 274.032 56.1799C274.032 53.9526 273.51 52.0208 272.464 50.3845C271.419 48.7481 270.021 47.4867 268.271 46.6004C266.521 45.714 264.578 45.2708 262.442 45.2708C260.578 45.2708 258.782 45.6572 257.055 46.4299C255.328 47.2026 253.885 48.4185 252.726 50.0776C251.567 51.7367 250.896 53.9072 250.714 56.589H242.123C242.305 52.7254 243.305 49.4185 245.123 46.6685C246.964 43.9185 249.385 41.8163 252.385 40.3617C255.407 38.9072 258.76 38.1799 262.442 38.1799C266.442 38.1799 269.919 38.9754 272.873 40.5663C275.851 42.1572 278.146 44.339 279.76 47.1117C281.396 49.8845 282.214 53.0435 282.214 56.589C282.214 59.089 281.828 61.3504 281.055 63.3731C280.305 65.3958 279.214 67.2026 277.782 68.7935C276.373 70.3845 274.669 71.7935 272.669 73.0208C270.669 74.2708 269.067 75.589 267.862 76.9754C266.657 78.339 265.782 79.964 265.237 81.8504C264.692 83.7367 264.396 86.089 264.351 88.9072V89.3163H256.169ZM260.532 109.498C258.851 109.498 257.407 108.896 256.203 107.691C254.998 106.487 254.396 105.044 254.396 103.362C254.396 101.68 254.998 100.237 256.203 99.0322C257.407 97.8276 258.851 97.2254 260.532 97.2254C262.214 97.2254 263.657 97.8276 264.862 99.0322C266.067 100.237 266.669 101.68 266.669 103.362C266.669 104.475 266.385 105.498 265.817 106.43C265.271 107.362 264.532 108.112 263.601 108.68C262.692 109.225 261.669 109.498 260.532 109.498Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_607_865"
              x="188.946"
              y="72.7994"
              width="55.2598"
              height="49.8605"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_607_865"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_607_865"
                result="effect2_dropShadow_607_865"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_607_865"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_ddd_607_865"
              x="35.6113"
              y="32.9141"
              width="163.335"
              height="89.7458"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_607_865"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_607_865"
                result="effect2_dropShadow_607_865"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-3" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect2_dropShadow_607_865"
                result="effect3_dropShadow_607_865"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect3_dropShadow_607_865"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_607_865"
              x="66.522"
              y="56.4136"
              width="120.732"
              height="54.72"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_607_865"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_607_865"
                result="shape"
              />
            </filter>
            <filter
              id="filter3_d_607_865"
              x="0"
              y="0"
              width="89.2881"
              height="89.239"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_607_865"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_607_865"
                result="shape"
              />
            </filter>
            <filter
              id="filter4_d_607_865"
              x="25.0625"
              y="138.237"
              width="269.258"
              height="59.7633"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-3" dy="6" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_607_865"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_607_865"
                result="shape"
              />
            </filter>
            <filter
              id="filter5_d_607_865"
              x="235.124"
              y="38.1799"
              width="48.0908"
              height="79.3181"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="-3" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_607_865"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_607_865"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};
