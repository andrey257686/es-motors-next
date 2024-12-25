import { StaticImageData } from 'next/image';

export interface AdvantageItem {
  title_advantages: string;
  inside_advantages: string;
  icon_advantages: string;
}

export interface CatalogItem {
  id: number;
  name: string;
  nameEn: string;
  brands: string[];
  image: {
    src: string;
    width: number;
    height: number;
  };
  imagePNG: StaticImageData;
}

export interface StepProps {
  number: number;
  title: string;
  description: string;
}

export interface Socials {
  social_tg: string;
  social_whatsapp: string;
}

export interface CatalogItemBackend {
  order: number;
  name_category: string;
  brand_names: string[];
}
