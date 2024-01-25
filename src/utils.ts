import { CityType, Itinerary } from "./types";

export const filteredCity = (cities: CityType[], id?: number | string) => {
  return cities.filter((city) => city.id.toString().includes(String(id)))[0];
};
export const filteredRoad = (cities: Itinerary[], id?: number | string) => {
  return cities.filter((city) => city.id.toString().includes(String(id)))[0];
};
