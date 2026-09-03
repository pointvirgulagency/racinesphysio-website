import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos traitements de kinésithérapie",
  description:
    "Découvrez les traitements proposés par le Cabinet Racines : rééducation fonctionnelle, thérapie manuelle et kinésithérapie respiratoire.",
  alternates: {
    canonical: "/nos-traitements",
  },
};

export default function TreatmentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
