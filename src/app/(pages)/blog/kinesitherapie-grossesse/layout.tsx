import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kinésithérapie pendant la grossesse : guide pratique",
  description:
    "Douleurs lombaires, bassin, posture : découvrez comment la kinésithérapie peut accompagner la grossesse avec des soins adaptés à chaque situation.",
  alternates: {
    canonical: "/blog/kinesitherapie-grossesse",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Kinésithérapie pendant la grossesse : guide pratique",
    description:
      "Découvrez comment la kinésithérapie peut accompagner les changements et certaines douleurs liés à la grossesse.",
    url: "/blog/kinesitherapie-grossesse",
    type: "article",
    locale: "fr_MA",
  },
};

export default function PregnancyArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
