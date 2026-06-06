export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface WrappedStat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  color: string;
  icon: string;
}

export interface LoveReason {
  id: number;
  text: string;
}

export interface FuturePlan {
  id: string;
  title: string;
  description: string;
  icon: string;
  completed: boolean;
}

export interface MemoryLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  memory: string;
  date: string;
  image: string;
}

export interface StatisticItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export type Theme = 'light' | 'dark';
