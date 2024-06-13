import { FC } from "react";
import { useParams } from "react-router-dom";
import { placesData } from "../const/mockData";

export const CityItem: FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>No item found</div>;
  }

  const item = placesData.find((item) => item.id === parseInt(id, 10));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h2>Item Detail</h2>
      <p>{item.description}</p>
    </div>
  );
};
