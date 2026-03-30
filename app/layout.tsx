import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const script = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karthik & Haritha — Wedding",
  description:
    "Join us in celebrating the wedding of Karthik & Haritha. August 30, 2026 in Kerala & September 5, 2026 in Bangalore.",
  openGraph: {
    title: "Karthik & Haritha — Wedding",
    description:
      "Join us in celebrating the wedding of Karthik & Haritha. August 30, 2026 in Kerala & September 5, 2026 in Bangalore.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${script.variable} antialiased font-light`}
    >
      <body>{children}</body>
    </html>
  );
}
