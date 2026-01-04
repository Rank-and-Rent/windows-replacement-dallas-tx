export type Slug = string;

export interface ServiceItem {
  slug: Slug;
  name: string;
  short: string;
  route: Slug;
  category?: string;
}

export interface LocationItem {
  slug: Slug;
  name: string;
  parent?: Slug;
  route: Slug;
  type: "city" | "neighborhood" | "suburb" | "district";
}

export interface BrandItem {
  slug: Slug;
  name: string;
  route: Slug;
  description: string;
  image: string;
  logo: string;
}

export interface ResourceLink {
  key: string;
  label: string;
  href: string;
}

export interface PageLayoutVariant {
  key: string;
  label: string;
  description: string;
  sections: string[];
  features?: {
    toc?: boolean;
    stickyCta?: boolean;
    sidebar?: boolean;
    heroStyle?: "image" | "gradient" | "map" | "abstract";
    schema?: string[];
  };
}

export interface LayoutAssignments {
  services: Record<string, string>;
  locations: Record<string, string>;
  brands: Record<string, string>;
}