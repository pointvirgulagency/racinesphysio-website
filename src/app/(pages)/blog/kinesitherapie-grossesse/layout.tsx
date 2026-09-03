import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kinésithérapie pendant la grossesse : guide pratique",
  description:
    "Douleurs lombaires, bassin, posture : découvrez comment la kinésithérapie peut accompagner la grossesse avec des soins adaptés à chaque situation.",
  alternates: {
    canonical: "/blog/kinesitherapie-grossesse",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Kinésithérapie pendant la grossesse : guide pratique",
    description:
      "Découvrez comment la kinésithérapie peut accompagner les changements et certaines douleurs liés à la grossesse.",
    url: "/blog/kinesitherapie-grossesse",
    type: "article",
    locale: "fr_MA",
    images: [
      {
        url: "/images/blog/kinesitherapie-grossesse.webp",
        width: 1600,
        height: 900,
        alt: "Séance de kinésithérapie adaptée pendant la grossesse",
      },
    ],
  },
    twitter: {
    card: "summary_large_image",
    title: "Kinésithérapie pendant la grossesse : guide pratique",
    description:
      "Découvrez comment la kinésithérapie peut accompagner les changements et certaines douleurs liés à la grossesse.",
    images: ["/images/blog/kinesitherapie-grossesse.webp"],
  },
};

export default function PregnancyArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
