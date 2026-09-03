import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rééducation sportive après une blessure",
  description:
    "Découvrez les étapes d’une rééducation sportive progressive : bilan, récupération, renforcement, tests fonctionnels et reprise sécurisée de l’activité.",
  alternates: {
    canonical: "/blog/reeducation-sportive",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Rééducation sportive après une blessure",
    description:
      "Bilan, récupération, renforcement et tests fonctionnels : découvrez les étapes d’une reprise sportive progressive.",
    url: "/blog/reeducation-sportive",
    type: "article",
    locale: "fr_MA",
  },
};

export default function SportsRehabilitationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
