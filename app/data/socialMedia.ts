const instagramUsername = (
  process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME ?? "instagram"
).replace(/^@/, "");

export const socialMediaConfig = {
  instagram: {
    username: `@${instagramUsername}`,
    url: `https://www.instagram.com/${instagramUsername}`,
    color: "hover:text-pink-500",
    label: `@${instagramUsername}`,
  },
  // facebook: {
  //   username: "ministerioboasnovas",
  //   url: "https://www.facebook.com/ministerioboasnovas",
  //   color: "hover:text-blue-600",
  //   label: "Ministério Boas Novas",
  // },
  // youtube: {
  //   username: "@ministerioboasnovas",
  //   url: "https://www.youtube.com/@ministerioboasnovas",
  //   color: "hover:text-red-600",
  //   label: "@ministerioboasnovas",
  // },
  // whatsapp: {
  //   username: "(41) 99999-9999",
  //   url: "https://wa.me/5541999999999",
  //   color: "hover:text-green-500",
  //   label: "(41) 99999-9999",
  // },
};

export const contactInfo = {
  phone: "+55-41-XXXX-XXXX",
  email: "contato@ministerioboasnovas.com.br",
  address: {
    city: "Curitiba",
    state: "PR",
    country: "BR",
  },
  coordinates: {
    latitude: "-25.428954",
    longitude: "-49.267137",
  },
};
