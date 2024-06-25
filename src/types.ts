export interface Itinerary {
  id: number;
  title: string;
  img: string;
  description: string;
  progress: number;
}

export interface CityType {
  id: string;
  city: string;
  img: string;
  description: string;
}

export interface ListData {
  id: number;
  description: string;
  name: string;
  whenPublished: string;
  shortDescription: string;
  previewImage: any;
  isAdded: boolean;
  sliderImages: City[];
  author: string;
  date: string;
  mapLink: string;
  city: number;
}

export interface City {
  image: string;
  name?: string;
  id?: string | number;
}
