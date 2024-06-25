import { BackgroundPolarStar } from "../svg/BackgroundPolarStar";
import "./Help.scss";

export const Help = () => {
  return (
    <div className="Help_wrapper">
      <div className="Help_element">
        <div>
          <a href="https://t.me/tsar_anpo" target="_blank" rel="noreferrer">
            <svg
              style={{ border: "1px solid white" }}
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_625_6905)">
                <path
                  d="M85 0H15C6.71573 0 0 6.71573 0 15V85C0 93.2843 6.71573 100 15 100H85C93.2843 100 100 93.2843 100 85V15C100 6.71573 93.2843 0 85 0Z"
                  fill="#37AEE2"
                />
                <path
                  d="M38.8672 78.9062C36.7188 78.9062 36.9141 78.125 36.3281 76.1719L30.0781 55.6641L77.9297 27.5391"
                  fill="#C8DAEA"
                />
                <path
                  d="M38.8672 78.9062C40.2344 78.9062 41.0156 78.125 41.9922 77.3438L50.7812 68.9453L39.8438 62.3047"
                  fill="#A9C9DD"
                />
                <path
                  d="M39.8437 62.3047L66.2108 81.6406C68.9452 83.3984 71.289 82.4219 72.0702 78.9063L82.8124 28.5156C83.789 24.2188 81.0546 22.2656 78.1249 23.6328L15.4296 47.8516C11.328 49.4141 11.328 51.9531 14.6483 52.9297L30.8593 58.0078L67.9687 34.375C69.7265 33.3984 71.289 33.7891 70.1171 35.1563"
                  fill="#F6FBFE"
                />
              </g>
              <defs>
                <clipPath id="clip0_625_6905">
                  <rect width="100" height="100" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div className="Help_vk">
          <a
            href="https://vk.com/welcome_home_anpo"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              style={{ border: "1px solid white" }}
              width="101"
              height="100"
              viewBox="0 0 101 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 48C0.5 25.3726 0.5 14.0589 7.52944 7.02944C14.5589 0 25.8726 0 48.5 0H52.5C75.1274 0 86.4411 0 93.4706 7.02944C100.5 14.0589 100.5 25.3726 100.5 48V52C100.5 74.6274 100.5 85.9411 93.4706 92.9706C86.4411 100 75.1274 100 52.5 100H48.5C25.8726 100 14.5589 100 7.52944 92.9706C0.5 85.9411 0.5 74.6274 0.5 52V48Z"
                fill="#0077FF"
              />
              <path
                d="M53.7083 72.042C30.9166 72.042 17.9167 56.417 17.375 30.417H28.7917C29.1667 49.5003 37.5832 57.5836 44.2498 59.2503V30.417H55.0002V46.8752C61.5835 46.1669 68.4993 38.667 70.8327 30.417H81.583C79.7913 40.5837 72.2913 48.0836 66.958 51.1669C72.2913 53.6669 80.8334 60.2086 84.0834 72.042H72.2497C69.708 64.1253 63.3752 58.0003 55.0002 57.1669V72.042H53.7083Z"
                fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="Menu_polar_star">
        <BackgroundPolarStar />
      </div>
    </div>
  );
};
