import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact et prise de rendez-vous",
  description:
    "Contactez le Cabinet Racines à Sala Al Jadida pour obtenir des informations ou prendre rendez-vous pour vos soins de kinésithérapie.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
