import { PageLayoutVariant, LayoutAssignments } from "./types";
import { servicesData } from "./services";
import { locationsData } from "./locations";
import { brandsData } from "./brands";

export const serviceVariants: PageLayoutVariant[] = [
  {
    key: "service-classic",
    label: "Classic Service Layout",
    description: "Traditional layout with hero, description, features, and FAQ",
    sections: ["hero", "description", "features", "inclusions", "faq", "related", "cta"],
    features: {
      toc: false,
      stickyCta: true,
      sidebar: false,
      heroStyle: "image",
      schema: ["Service", "BreadcrumbList", "FAQPage"],
    },
  },
  {
    key: "service-modern",
    label: "Modern Service Layout",
    description: "Clean modern layout with gradient hero and sidebar",
    sections: ["hero", "description", "sidebar", "benefits", "process", "faq", "cta"],
    features: {
      toc: true,
      stickyCta: true,
      sidebar: true,
      heroStyle: "gradient",
      schema: ["Service", "BreadcrumbList", "FAQPage"],
    },
  },
  {
    key: "service-detailed",
    label: "Detailed Service Layout",
    description: "Comprehensive layout with table of contents and expanded sections",
    sections: ["hero", "toc", "description", "benefits", "process", "inclusions", "situations", "faq", "related", "cta"],
    features: {
      toc: true,
      stickyCta: true,
      sidebar: true,
      heroStyle: "image",
      schema: ["Service", "BreadcrumbList", "FAQPage", "HowTo"],
    },
  },
  {
    key: "service-minimal",
    label: "Minimal Service Layout",
    description: "Clean and focused layout with essential information",
    sections: ["hero", "description", "benefits", "faq", "cta"],
    features: {
      toc: false,
      stickyCta: false,
      sidebar: false,
      heroStyle: "gradient",
      schema: ["Service", "BreadcrumbList", "FAQPage"],
    },
  },
  {
    key: "service-conversion",
    label: "Conversion-Focused Service Layout",
    description: "Layout optimized for conversions with multiple CTAs",
    sections: ["hero", "description", "benefits", "cta-mid", "process", "inclusions", "faq", "cta"],
    features: {
      toc: false,
      stickyCta: true,
      sidebar: false,
      heroStyle: "image",
      schema: ["Service", "BreadcrumbList", "FAQPage"],
    },
  },
  {
    key: "service-premium",
    label: "Premium Service Layout",
    description: "Elegant layout emphasizing quality and expertise",
    sections: ["hero", "toc", "description", "features", "benefits", "process", "inclusions", "brands", "faq", "related", "cta"],
    features: {
      toc: true,
      stickyCta: true,
      sidebar: true,
      heroStyle: "abstract",
      schema: ["Service", "BreadcrumbList", "FAQPage", "HowTo"],
    },
  },
];

export const locationVariants: PageLayoutVariant[] = [
  {
    key: "location-classic",
    label: "Classic Location Layout",
    description: "Traditional location page with map and services",
    sections: ["hero", "description", "map", "services", "faq", "cta"],
    features: {
      toc: false,
      stickyCta: true,
      sidebar: false,
      heroStyle: "map",
      schema: ["LocalBusiness", "BreadcrumbList", "FAQPage"],
    },
  },
  {
    key: "location-modern",
    label: "Modern Location Layout",
    description: "Contemporary layout with featured services",
    sections: ["hero", "description", "featured-services", "map", "faq", "cta"],
    features: {
      toc: false,
      stickyCta: true,
      sidebar: false,
      heroStyle: "gradient",
      schema: ["LocalBusiness", "BreadcrumbList", "FAQPage"],
    },
  },
  {
    key: "location-detailed",
    label: "Detailed Location Layout",
    description: "Comprehensive location page with area information",
    sections: ["hero", "description", "area-info", "services", "map", "process", "faq", "nearby", "cta"],
    features: {
      toc: true,
      stickyCta: true,
      sidebar: true,
      heroStyle: "image",
      schema: ["LocalBusiness", "BreadcrumbList", "FAQPage"],
    },
  },
  {
    key: "location-minimal",
    label: "Minimal Location Layout",
    description: "Streamlined layout focusing on key information",
    sections: ["hero", "description", "services", "faq", "cta"],
    features: {
      toc: false,
      stickyCta: false,
      sidebar: false,
      heroStyle: "gradient",
      schema: ["LocalBusiness", "BreadcrumbList"],
    },
  },
  {
    key: "location-service-focused",
    label: "Service-Focused Location Layout",
    description: "Layout emphasizing available services in the area",
    sections: ["hero", "description", "popular-services", "all-services", "map", "faq", "cta"],
    features: {
      toc: false,
      stickyCta: true,
      sidebar: false,
      heroStyle: "map",
      schema: ["LocalBusiness", "BreadcrumbList", "FAQPage"],
    },
  },
  {
    key: "location-community",
    label: "Community-Focused Location Layout",
    description: "Layout highlighting local community and area features",
    sections: ["hero", "description", "community-info", "services", "map", "local-projects", "faq", "cta"],
    features: {
      toc: true,
      stickyCta: true,
      sidebar: true,
      heroStyle: "image",
      schema: ["LocalBusiness", "BreadcrumbList", "FAQPage"],
    },
  },
];

export const brandVariants: PageLayoutVariant[] = [
  {
    key: "brand-showcase",
    label: "Brand Showcase Layout",
    description: "Premium layout highlighting brand features and products",
    sections: ["hero", "brand-story", "products", "features", "benefits", "faq", "cta"],
    features: {
      toc: true,
      stickyCta: true,
      sidebar: false,
      heroStyle: "image",
      schema: ["Product", "BreadcrumbList", "FAQPage"],
    },
  },
  {
    key: "brand-detailed",
    label: "Detailed Brand Layout",
    description: "Comprehensive brand page with product lines and specifications",
    sections: ["hero", "overview", "product-lines", "technology", "warranty", "comparison", "faq", "locations", "cta"],
    features: {
      toc: true,
      stickyCta: true,
      sidebar: true,
      heroStyle: "gradient",
      schema: ["Product", "BreadcrumbList", "FAQPage"],
    },
  },
  {
    key: "brand-modern",
    label: "Modern Brand Layout",
    description: "Contemporary layout emphasizing innovation and quality",
    sections: ["hero", "overview", "innovations", "products", "benefits", "faq", "cta"],
    features: {
      toc: false,
      stickyCta: true,
      sidebar: false,
      heroStyle: "abstract",
      schema: ["Product", "BreadcrumbList", "FAQPage"],
    },
  },
  {
    key: "brand-classic",
    label: "Classic Brand Layout",
    description: "Traditional brand page with focus on heritage and quality",
    sections: ["hero", "heritage", "products", "craftsmanship", "warranty", "faq", "cta"],
    features: {
      toc: false,
      stickyCta: true,
      sidebar: false,
      heroStyle: "image",
      schema: ["Product", "BreadcrumbList", "FAQPage"],
    },
  },
];

// Round-robin assignment function
function assignLayouts<T extends { slug: string }>(
  items: T[],
  variants: PageLayoutVariant[]
): Record<string, string> {
  const assignments: Record<string, string> = {};
  items.forEach((item, index) => {
    const variantIndex = index % variants.length;
    assignments[item.slug] = variants[variantIndex].key;
  });
  return assignments;
}

export const assignments: LayoutAssignments = {
  services: assignLayouts(servicesData, serviceVariants),
  locations: assignLayouts(locationsData, locationVariants),
  brands: assignLayouts(brandsData, brandVariants),
};