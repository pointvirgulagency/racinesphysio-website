import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";

import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.racinesphysio.com"),
  title: {
    default: "Cabinet Racines | Kinésithérapie à Sala Al Jadida",
    template: "%s | Cabinet Racines",
  },
  description:
    "Cabinet de physiothérapie et de kinésithérapie à Sala Al Jadida : rééducation fonctionnelle, thérapie manuelle et kinésithérapie respiratoire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={instrumentSans.className}>
      <body className={`${instrumentSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
