import "./Events.scss";
import { eventsData } from "../const/mockData";
import { ListData } from "../types";
import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { ListCard } from "../components/ListCard";
import { useEffect, useState } from "react";

export const Events = () => {
  const [search, setSearch] = useState("");
  const [data, setDate] = useState(eventsData);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!search) {
        setDate(eventsData);
      }
      const result = eventsData.filter((title) =>
        title.name.toLowerCase().includes(search.toLowerCase())
      );
      setDate(result);
    }, 300);
    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="Places_wrapper">
      <div className="Places_input_container">
        <Input search={search} setSearch={setSearch} />
      </div>
      <div className="Places_list">
        {data.map((item: ListData) => {
          return (
            <Link
              to={`/events/${item.id}}`}
              className="Places_link"
              key={item.id}
            >
              <ListCard
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
