"use client";

import Script from "next/script";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "Ministério Boas Novas",
    alternateName: "MBON",
    description:
      "Ministério Boas Novas em Curitiba - Uma igreja cristã comprometida em compartilhar o amor de Deus e as boas novas do evangelho.",
    url: "https://ministerioboasnovas.com.br",
    logo: "https://ministerioboasnovas.com.br/ministerioBoasNovas.svg",
    image: "https://ministerioboasnovas.com.br/ministerioBoasNovas.svg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Curitiba",
      addressRegion: "PR",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-25.428954",
      longitude: "-49.267137",
    },
    telephone: "+55-41-XXXX-XXXX",
    email: "contato@ministerioboasnovas.com.br",
    sameAs: [
      "https://www.facebook.com/ministerioboasnovas",
      "https://www.instagram.com/ministerioboasnovas",
      "https://www.youtube.com/@ministerioboasnovas",
    ],
    openingHours: ["Mo-Su 09:00-18:00"],
    serviceType: [
      "Culto de Domingo",
      "Culto de Família",
      "Culto de Jovens",
      "Culto de Mulheres",
      "Oração das 5h",
      "Caçadores da Verdade",
      "MBON Kids",
    ],
    areaServed: {
      "@type": "City",
      name: "Curitiba",
    },
    foundingDate: "2020",
    religiousAffiliation: "Cristianismo",
    denomination: "Protestante",
    hasMap: "https://maps.google.com/?q=Curitiba,PR",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
    },
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
