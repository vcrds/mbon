import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import StructuredData from "./components/StructuredData";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#202020",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Ministério Boas Novas - Igreja em Curitiba",
  description:
    "Ministério Boas Novas em Curitiba - Uma igreja cristã comprometida em compartilhar o amor de Deus e as boas novas do evangelho. Venha fazer parte da nossa família e descubra o propósito que Deus tem para sua vida.",
  keywords: [
    "igreja cristã curitiba",
    "ministério boas novas curitiba",
    "igreja em curitiba",
    "evangelho curitiba",
    "cristianismo curitiba",
    "fé curitiba",
    "adoração curitiba",
    "comunidade cristã curitiba",
    "deus",
    "jesus cristo",
    "espiritualidade",
    "igreja protestante curitiba",
    "culto curitiba",
  ],
  authors: [{ name: "Ministério Boas Novas" }],
  creator: "Ministério Boas Novas",
  publisher: "Ministério Boas Novas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ministerioboasnovas.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://ministerioboasnovas.com.br",
    title: "Ministério Boas Novas - Igreja em Curitiba",
    description:
      "Ministério Boas Novas em Curitiba - Uma igreja cristã comprometida em compartilhar o amor de Deus e as boas novas do evangelho.",
    siteName: "Ministério Boas Novas",
    images: [
      {
        url: "/ministerioBoasNovas.svg",
        width: 1200,
        height: 630,
        alt: "Ministério Boas Novas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ministério Boas Novas - Igreja em Curitiba",
    description:
      "Ministério Boas Novas em Curitiba - Uma igreja cristã comprometida em compartilhar o amor de Deus e as boas novas do evangelho.",
    images: ["/ministerioBoasNovas.svg"],
    creator: "@ministerioboasnovas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "religion",
  classification: "church",
  appleWebApp: {
    title: "MBON",
    statusBarStyle: "black-translucent",
    capable: true,
    startupImage: [
      {
        url: "/web-app-manifest-512x512.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/web-app-manifest-512x512.png",
        media:
          "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)",
      },
      {
        url: "/web-app-manifest-512x512.png",
        media:
          "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)",
      },
    ],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/icon0.svg",
        color: "#202020",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="apple-mobile-web-app-title" content="MBON" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="theme-color" content="#202020" />
        <meta name="msapplication-navbutton-color" content="#202020" />
        <meta name="msapplication-TileColor" content="#202020" />
        <meta name="application-name" content="Ministério Boas Novas" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
