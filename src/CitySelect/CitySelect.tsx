import { Slider } from "../components/Slider";
import "./CitySelect.scss";
import { cities } from "../const/mockData";
import { Input } from "../components/Input";
export const CitySelect = () => {
  return (
    <div className="City_select_wrapper">
      <Input placeholderText="Найти город" color="blue" />
      <Slider array={cities} />
    </div>
  );
};
