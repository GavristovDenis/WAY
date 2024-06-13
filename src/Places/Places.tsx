import "./Places.scss";
import { placesData } from "../const/mockData";
import { ListData } from "../types";
import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { ListCard } from "../components/ListCard";

export const Places = () => {
  return (
    <div className="Places_wrapper">
      <div className="Places_input_container">
        <Input />
      </div>
      <div className="Places_list">
        {placesData.map((item: ListData) => {
          return (
            <Link
              to={`/places/${item.id}}`}
              className="Places_link"
              key={item.id}
            >
              <ListCard
                published={item.published}
                name={item.name}
                shortDescription={item.shortDescription}
                previewImage={item.previewImage}
                isAdded={item.isAdded}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
