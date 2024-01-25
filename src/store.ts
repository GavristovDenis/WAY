import { create } from "zustand";
import { CityType } from "./types";

interface CityState {
  city: CityType[];
  increase: (by: number) => void;
}

export const useCityStore = create<CityState>()((set) => ({
  city: [
    {
      id: 1,
      city: "Moscow",
      img: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663320905_22-mykaleidoscope-ru-p-sovremennaya-moskva-oboi-24.jpg",
      description: "Moscow_description",
      progress: 100,
      itinerary: [
        {
          id: 11,
          title: "Moscow_city",
          img: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663320905_22-mykaleidoscope-ru-p-sovremennaya-moskva-oboi-24.jpg",
          description: "Moscow_city_description",
          progress: 100,
        },
        {
          id: 12,
          title: "Moscow_city2",
          img: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663320905_22-mykaleidoscope-ru-p-sovremennaya-moskva-oboi-24.jpg",
          description: "Moscow_city_description2",
          progress: 100,
        },
      ],
    },
    {
      id: 2,
      city: "Samara",
      img: "https://sportishka.com/uploads/posts/2022-11/1667573131_35-sportishka-com-p-istoricheskie-dostoprimechatelnosti-samari-35.jpg",
      description: "Samara_description",
      progress: 50,
      itinerary: [
        {
          id: 21,
          title: "Samara_start",
          img: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663320905_22-mykaleidoscope-ru-p-sovremennaya-moskva-oboi-24.jpg",
          description: "Samara_city_description",
          progress: 100,
        },
      ],
    },
    {
      id: 3,
      city: "Saint_Petersburg",
      img: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663345945_30-mykaleidoscope-ru-p-vidi-sankt-peterburga-krasivo-33.jpg",
      description: "Saint_Petersburg_description",
      progress: 0,
      itinerary: [
        {
          id: 31,
          title: "Saint_Petersburg_start",
          img: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663320905_22-mykaleidoscope-ru-p-sovremennaya-moskva-oboi-24.jpg",
          description: "Saint_Petersburg_city_description",
          progress: 100,
        },
      ],
    },
    {
      id: 4,
      city: "Vladivostok",
      img: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663419347_5-mykaleidoscope-ru-p-vladivostok-stolitsa-dalnego-vostoka-vkont-5.jpg",
      description: "Vladivostok_description",
      progress: 0,
      itinerary: [
        {
          id: 41,
          title: "Vladivostok_start",
          img: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663320905_22-mykaleidoscope-ru-p-sovremennaya-moskva-oboi-24.jpg",
          description: "Vladivostok_city_description",
          progress: 100,
        },
      ],
    },
    {
      id: 5,
      city: "Crimea",
      img: "https://sportishka.com/uploads/posts/2022-03/1646969368_51-sportishka-com-p-kukushkino-gnezdo-krim-turizm-krasivo-foto-56.jpg",
      description: "Crimea_description",
      progress: 0,
      itinerary: [
        {
          id: 51,
          title: "Crimea_start",
          img: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663320905_22-mykaleidoscope-ru-p-sovremennaya-moskva-oboi-24.jpg",
          description: "Crimea_city_description",
          progress: 100,
        },
      ],
    },
  ],
  increase: (by) => set((state) => ({ city: state.city })),
}));
