import { siteUrl, sitelinkPages } from "../data/navigation";
import { contactInfo, socialMediaConfig } from "../data/socialMedia";

export default function StructuredData() {
  const telephone = `+${contactInfo.whatsappNumber.replace(/\D/g, "")}`;
  const { street, neighborhood, city, state, postalCode, country } =
    contactInfo.address;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Church",
        name: "Ministério Boas Novas",
        alternateName: "MBON",
        description:
          "Ministério Boas Novas em Curitiba - Uma igreja cristã comprometida em compartilhar o amor de Deus e as boas novas do evangelho.",
        url: siteUrl,
        logo: `${siteUrl}/ministerioBoasNovas.svg`,
        image: `${siteUrl}/ministerioBoasNovas.svg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${street}, ${neighborhood}`,
          addressLocality: city,
          addressRegion: state,
          postalCode,
          addressCountry: country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: contactInfo.coordinates.latitude,
          longitude: contactInfo.coordinates.longitude,
        },
        telephone,
        sameAs: [socialMediaConfig.instagram.url],
        areaServed: {
          "@type": "City",
          name: city,
        },
        religiousAffiliation: "Cristianismo",
        denomination: "Protestante",
        hasMap: contactInfo.mapsUrl,
      },
      {
        "@type": "WebSite",
        name: "Ministério Boas Novas",
        url: siteUrl,
        inLanguage: "pt-BR",
      },
      {
        "@type": "ItemList",
        name: "Navegação",
        itemListElement: sitelinkPages.map((link, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: link.label,
          url: `${siteUrl}${link.href}`,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
