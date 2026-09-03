import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Article en préparation",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/blog/blogone",
  },
};

export default function BlogArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
