import { create } from "zustand";
import { CityType } from "./types";

interface CityState {
  city: CityType[];
  increase: (by: number) => void;
  selectedCity: string;
  setSelectedCity: (to: string) => void;
  isSelected: boolean;
  setIsSelected: (to: boolean) => void;
  selectedCityId: null | string;
  setSelectedCityId: (to: string) => void;
}

export const useCityStore = create<CityState>()((set) => ({
  city: [
    {
      id: "1",
      city: "Moscow",
      img: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663320905_22-mykaleidoscope-ru-p-sovremennaya-moskva-oboi-24.jpg",
      description: "Moscow_description",
    },
    {
      id: "2",
      city: "Saint_Petersburg",
      img: "https://sportishka.com/uploads/posts/2022-11/1667573131_35-sportishka-com-p-istoricheskie-dostoprimechatelnosti-samari-35.jpg",
      description: "Saint_Petersburg",
    },
    {
      id: "3",
      city: "Saint_Petersburg",
      img: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663345945_30-mykaleidoscope-ru-p-vidi-sankt-peterburga-krasivo-33.jpg",
      description: "Saint_Petersburg_description",
    },
  ],
  increase: (by) => set((state) => ({ city: state.city })),
  selectedCity: "",
  setSelectedCity: (to) => set({ selectedCity: to }),
  isSelected: false,
  setIsSelected: (to) => set({ isSelected: to }),
  selectedCityId: null,
  setSelectedCityId: (to) => set({ selectedCityId: to }),
}));
