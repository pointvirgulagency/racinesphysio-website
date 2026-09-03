import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mal de dos : quand consulter un kinésithérapeute ?",
  description:
    "Douleur lombaire, raideur ou gêne persistante : découvrez quand consulter, comment se déroule le bilan et quels signes nécessitent un avis médical urgent.",
  alternates: {
    canonical: "/blog/mal-de-dos-kinesitherapie",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Mal de dos : quand consulter un kinésithérapeute ?",
    description:
      "Découvrez quand consulter pour une douleur du dos, comment se déroule le bilan et quels signes nécessitent un avis médical rapide.",
    url: "/blog/mal-de-dos-kinesitherapie",
    type: "article",
    locale: "fr_MA",
  },
};

export default function BackPainArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
