import { create } from "zustand";
import { CityType, ListData } from "./types";

interface CityState {
  сities: CityType[];
  setCities: (array: CityType[]) => void;
  placesData: ListData[];
  setPlacesData: (placesData: ListData[]) => void;
  eventsData: ListData[];
  setEventsData: (eventsData: ListData[]) => void;
  selectedCity: string;
  setSelectedCity: (to: string) => void;
  isSelected: boolean;
  setIsSelected: (to: boolean) => void;
  selectedCityId: null | string;
  setSelectedCityId: (to: string) => void;
}

export const useCityStore = create<CityState>()((set) => ({
  сities: [],
  setCities: (сities) => set({ сities: сities }),
  placesData: [],
  setPlacesData: (placesData) => set({ placesData: placesData }),
  eventsData: [],
  setEventsData: (eventsData) => set({ eventsData: eventsData }),
  selectedCity: "",
  setSelectedCity: (to) => set({ selectedCity: to }),
  isSelected: false,
  setIsSelected: (to) => set({ isSelected: to }),
  selectedCityId: null,
  setSelectedCityId: (to) => set({ selectedCityId: to }),
}));
