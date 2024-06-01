export interface NasaDataInterface {
  collection: Collection;
}

export interface Collection {
  version: string;
  href: string;
  items: Item[];
  metadata: Metadata;
  links: Link2[];
}

export interface Item {
  href: string;
  data: Daum[];
  links: Link[];
}

export interface Daum {
  center: string;
  title: string;
  photographer?: string;
  keywords: string[];
  nasa_id: string;
  media_type: string;
  date_created: string;
  description: string;
  description_508?: string;
  secondary_creator?: string;
  location?: string;
}

export interface Link {
  href: string;
  rel: string;
  render: string;
}

export interface Metadata {
  total_hits: number;
}

export interface Link2 {
  rel: string;
  prompt: string;
  href: string;
}
