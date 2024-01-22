import { create } from "zustand";
interface CityType {
  id: number;
  city: string;
  img: string;
  description: string;
  progress: number;
}
interface BearState {
  city: CityType[];
  increase: (by: number) => void;
}

export const useCityStore = create<BearState>()((set) => ({
  city: [
    {
      id: 1,
      city: "Moscow",
      img: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663320905_22-mykaleidoscope-ru-p-sovremennaya-moskva-oboi-24.jpg",
      description: "Moscow_description",
      progress: 100,
    },
    {
      id: 2,
      city: "Samara",
      img: "https://sportishka.com/uploads/posts/2022-11/1667573131_35-sportishka-com-p-istoricheskie-dostoprimechatelnosti-samari-35.jpg",
      description: "Samara_description",
      progress: 50,
    },
    {
      id: 3,
      city: "Saint_Petersburg",
      img: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663345945_30-mykaleidoscope-ru-p-vidi-sankt-peterburga-krasivo-33.jpg",
      description: "Saint_Petersburg_description",
      progress: 0,
    },
    {
      id: 4,
      city: "Vladivostok",
      img: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663419347_5-mykaleidoscope-ru-p-vladivostok-stolitsa-dalnego-vostoka-vkont-5.jpg",
      description: "Vladivostok_description",
      progress: 0,
    },
    {
      id: 5,
      city: "Crimea",
      img: "https://sportishka.com/uploads/posts/2022-03/1646969368_51-sportishka-com-p-kukushkino-gnezdo-krim-turizm-krasivo-foto-56.jpg",
      description: "Crimea_description",
      progress: 0,
    },
  ],
  increase: (by) => set((state) => ({ city: state.city })),
}));
