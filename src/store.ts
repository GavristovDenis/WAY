import { t } from "i18next";
import { create } from "zustand";
interface CityType {
  id: number;
  city: string;
  img: string;
  description: string;
}
interface BearState {
  bears: CityType[];
  increase: (by: number) => void;
}

export const useCityStore = create<BearState>()((set) => ({
  bears: [
    {
      id: 1,
      city: t("Moscow"),
      img: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663320905_22-mykaleidoscope-ru-p-sovremennaya-moskva-oboi-24.jpg",
      description: t("Moscow_description"),
    },
    {
      id: 2,
      city: t("Samara"),
      img: "https://sportishka.com/uploads/posts/2022-11/1667573131_35-sportishka-com-p-istoricheskie-dostoprimechatelnosti-samari-35.jpg",
      description: t("Samara_description"),
    },
    {
      id: 3,
      city: t("Saint_Petersburg"),
      img: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663345945_30-mykaleidoscope-ru-p-vidi-sankt-peterburga-krasivo-33.jpg",
      description: t("Saint_Petersburg_description"),
    },
    {
      id: 4,
      city: t("Vladivostok"),
      img: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663419347_5-mykaleidoscope-ru-p-vladivostok-stolitsa-dalnego-vostoka-vkont-5.jpg",
      description: t("Vladivostok_description"),
    },
    {
      id: 5,
      city: t("Crimea"),
      img: "https://sportishka.com/uploads/posts/2022-03/1646969368_51-sportishka-com-p-kukushkino-gnezdo-krim-turizm-krasivo-foto-56.jpg",
      description: t("Crimea_description"),
    },
  ],
  increase: (by) => set((state) => ({ bears: state.bears })),
}));
