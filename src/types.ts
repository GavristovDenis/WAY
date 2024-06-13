export interface Itinerary {
  id: number;
  title: string;
  img: string;
  description: string;
  progress: number;
}

export interface CityType {
  id: number;
  city: string;
  img: string;
  description: string;
  progress: number;
  itinerary: Itinerary[];
}

export interface ListData {
  id: number;
  description: string;
  name: string;
  published: string;
  shortDescription: string;
}
