import { memo, FC } from "react";
import "./ListCard.scss";
interface ListCardProps {
  published: string;
  name: string;
  shortDescription: string;
  previewImage: string;
  isAdded: boolean;
  id: number;
}
const ListCard: FC<ListCardProps> = memo(
  ({ published, name, shortDescription, previewImage, isAdded, id }) => {
    return (
      <div
        className={
          id % 2 === 0 ? "List_card_wrapper" : "List_card_wrapper_reverse"
        }
      >
        <div className="List_card_info_wrapper">
          <div className="List_card_info">
            <div className="List_card_info_name">{name}</div>
            <div className="List_card_info_short_description">
              {shortDescription}
            </div>
          </div>
        </div>
        <div className="List_card_image_wrapper">
          <img
            className="List_card_image"
            src={previewImage}
            alt="Изображение недоступно"
          />
        </div>
      </div>
    );
  }
);

export default ListCard;
