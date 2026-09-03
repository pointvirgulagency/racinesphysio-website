import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Votre parcours patient",
  description:
    "Découvrez les étapes de votre parcours au Cabinet Racines, du premier rendez-vous au suivi personnalisé de votre rééducation.",
  alternates: {
    canonical: "/parcours-patients",
  },
};

export default function PatientJourneyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
