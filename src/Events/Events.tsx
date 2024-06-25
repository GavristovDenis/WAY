import "../Places/Places.scss";
import { eventsData } from "../const/mockData";
import { ListData } from "../types";
import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { ListCard } from "../components/ListCard";
import { useEffect, useState } from "react";

export const Events = () => {
  const [search, setSearch] = useState("");
  const [data, setDate] = useState([] as ListData[]);
  const [dataCity, setDateCity] = useState([] as ListData[]);
  useEffect(() => {
    setDateCity(eventsData.filter((city) => city.city.toString() === "1"));
  }, []);
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
              to={`/events/${item.id}}`}
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
