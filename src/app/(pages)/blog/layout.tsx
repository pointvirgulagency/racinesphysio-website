import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog et conseils en kinésithérapie",
  description:
    "Découvrez les conseils du Cabinet Racines sur la kinésithérapie, la rééducation, la prévention et le bien-être.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
