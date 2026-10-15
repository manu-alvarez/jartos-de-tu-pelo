import { useEffect } from "react";
import { business } from "../config/business";

/** Inyecta JSON-LD HairSalon con datos reales cuando existan (sin inventar). */
export default function JsonLd() {
  useEffect(() => {
    const data: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "HairSalon",
      name: `${business.name} ${business.tagline}`.trim(),
      url: business.domain,
      priceRange: business.priceRange,
    };
    if (business.address) {
      data.address = {
        "@type": "PostalAddress",
        streetAddress: business.address,
        addressLocality: business.city || undefined,
        addressCountry: "ES",
      };
    }
    if (business.phone) data.telephone = business.phone;
    if (business.latitude && business.longitude) {
      data.geo = {
        "@type": "GeoCoordinates",
        latitude: business.latitude,
        longitude: business.longitude,
      };
    }
    if (business.openingHours.some((d) => d.hours !== "Cerrado")) {
      data.openingHoursSpecification = business.openingHours
        .filter((d) => d.hours !== "Cerrado")
        .map((d) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: d.day,
          opens: d.hours.split("–")[0]?.trim() ?? d.hours.split("-")[0]?.trim(),
          closes: d.hours.split("–")[1]?.trim() ?? d.hours.split("-")[1]?.trim(),
        }));
    }

    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "jsonld-salon";
    el.textContent = JSON.stringify(data);
    document.head.querySelector("#jsonld-salon")?.remove();
    document.head.appendChild(el);
    return () => {
      document.head.querySelector("#jsonld-salon")?.remove();
    };
  }, []);

  return null;
}
