import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rééducation sportive après une blessure",
  description:
    "Découvrez les étapes d’une rééducation sportive progressive : bilan, récupération, renforcement, tests fonctionnels et reprise sécurisée de l’activité.",
  alternates: {
    canonical: "/blog/reeducation-sportive",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Rééducation sportive après une blessure",
    description:
      "Bilan, récupération, renforcement et tests fonctionnels : découvrez les étapes d’une reprise sportive progressive.",
    url: "/blog/reeducation-sportive",
    type: "article",
    locale: "fr_MA",
    images: [
      {
        url: "/images/blog/reeducation-sportive.webp",
        width: 1600,
        height: 900,
        alt: "Exercice guidé pendant une séance de rééducation sportive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rééducation sportive après une blessure",
    description:
      "Découvrez les étapes d’une rééducation sportive progressive, du bilan jusqu’à la reprise sécurisée de l’activité.",
    images: ["/images/blog/reeducation-sportive.webp"],
  },
};

export default function SportsRehabilitationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
