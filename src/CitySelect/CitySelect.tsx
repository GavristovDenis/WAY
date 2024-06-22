import { Slider } from "../components/Slider";
import "./CitySelect.scss";
import { cities } from "../const/mockData";
import { Input } from "../components/Input";
import { useState } from "react";
export const CitySelect = () => {
  const [search, setSearch] = useState();
  return (
    <div className="City_select_wrapper">
      <Input
        placeholderText="Найти город"
        color="blue"
        search={search}
        setSearch={setSearch}
      />
      <Slider array={cities} />
    </div>
  );
};
