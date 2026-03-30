import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import AttireContent from "@/components/AttireContent";
import { Suspense } from "react";

export const metadata = {
  title: "What to Wear — Karthik & Haritha Wedding",
  description: "Attire guide for our South Indian wedding — embrace colour, tradition, and joy!",
};

export default function AttirePage() {
  return (
    <>
      <Navigation />
      <PageHeader
        accent="Dress the Part"
        title="What to Wear"
        subtitle="Embrace colour and tradition — here's a guide to help you dress for the celebration"
      />
      <main>
        <Suspense fallback={null}>
          <AttireContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
