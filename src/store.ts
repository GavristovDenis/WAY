import { create } from "zustand";
import { CityType } from "./types";

interface CityState {
  сities: CityType[];
  setCities: (array: CityType[]) => void;
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
  selectedCity: "",
  setSelectedCity: (to) => set({ selectedCity: to }),
  isSelected: false,
  setIsSelected: (to) => set({ isSelected: to }),
  selectedCityId: null,
  setSelectedCityId: (to) => set({ selectedCityId: to }),
}));
