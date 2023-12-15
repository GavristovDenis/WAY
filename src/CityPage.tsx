import { useParams } from "react-router-dom";

export const CityPage = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};
