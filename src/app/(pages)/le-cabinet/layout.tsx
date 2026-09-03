import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le cabinet et notre approche",
  description:
    "Découvrez le Cabinet Racines à Sala Al Jadida, son approche de la kinésithérapie et son accompagnement personnalisé des patients.",
  alternates: {
    canonical: "/le-cabinet",
  },
};

export default function CabinetLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
