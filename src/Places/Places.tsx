import "./Places.scss";
import { placesData } from "../const/mockData";
import { ListData } from "../types";
import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { ListCard } from "../components/ListCard";
import { useEffect, useState } from "react";
import { useCityStore } from "../store";

export const Places = () => {
  const [search, setSearch] = useState("");
  const [data, setDate] = useState(placesData);
  const [dataCity, setDateCity] = useState([] as ListData[]);
  const selectedCityId = useCityStore((state) => state.selectedCityId);

  useEffect(() => {
    setDateCity(
      placesData.filter((city) => city.city.toString() === selectedCityId)
    );
  }, [selectedCityId]);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!search) {
        setDate(dataCity);
      }
      const result = dataCity.filter((title) =>
        title.name.toLowerCase().includes(search.toLowerCase())
      );
      setDate(result);
    }, 300);
    return () => clearTimeout(timer);
  }, [dataCity, search]);

  return (
    <div className="Places_wrapper">
      <div className="Places_input_container">
        <Input
          search={search}
          setSearch={setSearch}
          placeholderText="Поиск"
          color="white"
        />
      </div>
      <div className="Places_list">
        {data.map((item: ListData, id: number) => {
          return (
            <Link
              to={`/places/${item.id}}`}
              className="Places_link"
              key={item.id}
            >
              <ListCard
                id={id}
                published={item.whenPublished}
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
