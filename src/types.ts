export interface Itinerary {
  id: number;
  title: string;
  img: string;
  description: string;
  progress: number;
}

export interface ListData {
  link: string;
  id: number;
  description: string;
  name: string;
  whenPublished: string;
  shortDescription: string;
  previewImage: any;
  isAdded: boolean;
  sliderImages: any;
  author: string;
  date: string;
  mapLink: string;
  city: number;
}

export interface CityType {
  image: string;
  name: string;
  id: string | number;
}
