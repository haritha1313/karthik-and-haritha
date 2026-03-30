import type { Metadata } from "next";
import { Cinzel_Decorative, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel_Decorative({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const script = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
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
      className={`${cinzel.variable} ${script.variable} ${montserrat.variable} antialiased font-light`}
    >
      <body>{children}</body>
    </html>
  );
}
