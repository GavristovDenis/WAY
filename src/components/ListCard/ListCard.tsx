import { memo, FC } from "react";
import "./ListCard.scss";
interface ListCardProps {
  published: string;
  name: string;
  shortDescription: string;
}
const ListCard: FC<ListCardProps> = memo(
  ({ published, name, shortDescription }) => {
    return (
      <div className="List_card_wrapper">
        <div className="List_card_info">
          <div className="List_card_info_date">{published}</div>
          <div className="List_card_info_name">{name}</div>
          <div className="List_card_info_short_description">
            {shortDescription}
          </div>
          <svg
            width="17"
            height="3"
            viewBox="0 0 17 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5625 2.125C8.87316 2.125 9.125 1.87316 9.125 1.5625C9.125 1.25184 8.87316 1 8.5625 1C8.25184 1 8 1.25184 8 1.5625C8 1.87316 8.25184 2.125 8.5625 2.125Z"
              fill="white"
            />
            <path
              d="M15.5625 2.125C15.8732 2.125 16.125 1.87316 16.125 1.5625C16.125 1.25184 15.8732 1 15.5625 1C15.2518 1 15 1.25184 15 1.5625C15 1.87316 15.2518 2.125 15.5625 2.125Z"
              fill="white"
            />
            <path
              d="M1.5625 2.125C1.87316 2.125 2.125 1.87316 2.125 1.5625C2.125 1.25184 1.87316 1 1.5625 1C1.25184 1 1 1.25184 1 1.5625C1 1.87316 1.25184 2.125 1.5625 2.125Z"
              fill="white"
            />
            <path
              d="M8.5625 2.125C8.87316 2.125 9.125 1.87316 9.125 1.5625C9.125 1.25184 8.87316 1 8.5625 1C8.25184 1 8 1.25184 8 1.5625C8 1.87316 8.25184 2.125 8.5625 2.125Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.5625 2.125C15.8732 2.125 16.125 1.87316 16.125 1.5625C16.125 1.25184 15.8732 1 15.5625 1C15.2518 1 15 1.25184 15 1.5625C15 1.87316 15.2518 2.125 15.5625 2.125Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1.5625 2.125C1.87316 2.125 2.125 1.87316 2.125 1.5625C2.125 1.25184 1.87316 1 1.5625 1C1.25184 1 1 1.25184 1 1.5625C1 1.87316 1.25184 2.125 1.5625 2.125Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="List_card_image"></div>
      </div>
    );
  }
);

export default ListCard;
