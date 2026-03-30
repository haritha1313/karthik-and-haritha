import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import TravelContent from "@/components/TravelContent";
import BananaLeaves from "@/components/ui/BananaLeaves";
import { Suspense } from "react";

export const metadata = {
  title: "Travel Guide — Karthik & Haritha Wedding",
  description:
    "How to get to Kerala, explore Alleppey backwaters, and experience Onam festival before the wedding.",
};

export default function TravelPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Decorative Leaves */}
      <div className="fixed top-0 left-0 w-64 -translate-y-12 -translate-x-12 opacity-30 pointer-events-none z-0">
        <BananaLeaves side="left" />
      </div>
      <div className="fixed top-0 right-0 w-64 -translate-y-12 translate-x-12 opacity-30 pointer-events-none z-0">
        <BananaLeaves side="right" />
      </div>

      <div className="relative z-10">
        <Navigation />
        <PageHeader
          accent="Your Journey"
          title="Travel & Stay"
          subtitle="Everything you need to plan your trip and experience the magic of Kerala & Bangalore"
        />
        <main>
          <Suspense fallback={null}>
            <TravelContent />
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
}
