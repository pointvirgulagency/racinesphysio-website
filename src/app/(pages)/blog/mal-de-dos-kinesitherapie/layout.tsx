import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mal de dos : quand consulter un kinésithérapeute ?",
  description:
    "Douleur lombaire, raideur ou gêne persistante : découvrez quand consulter, comment se déroule le bilan et quels signes nécessitent un avis médical urgent.",
  alternates: {
    canonical: "/blog/mal-de-dos-kinesitherapie",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mal de dos : quand consulter un kinésithérapeute ?",
    description:
      "Découvrez quand consulter pour une douleur du dos, comment se déroule le bilan et quels signes nécessitent un avis médical rapide.",
    url: "/blog/mal-de-dos-kinesitherapie",
    type: "article",
    locale: "fr_MA",
    images: [
      {
        url: "/images/blog/mal-de-dos-kinesitherapie.webp",
        width: 1600,
        height: 900,
        alt: "Évaluation de la mobilité du dos en kinésithérapie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mal de dos : quand consulter un kinésithérapeute ?",
    description:
      "Découvrez quand consulter pour une douleur du dos et quels signes nécessitent un avis médical rapide.",
    images: ["/images/blog/mal-de-dos-kinesitherapie.webp"],
  },
};

export default function BackPainArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
