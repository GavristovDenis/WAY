import { Link, useParams } from "react-router-dom";

export const CityPage = () => {
  const { id } = useParams();
  return (
    <div>
      <div>
        <Link to={"/main"}>back</Link>
      </div>
      {id}
    </div>
  );
};
