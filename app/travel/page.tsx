import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import TravelContent from "@/components/TravelContent";

export const metadata = {
  title: "Travel Guide — Karthik & Haritha Wedding",
  description: "How to get to Kerala, explore Alleppey backwaters, and experience Onam festival before the wedding.",
};

export default function TravelPage() {
  return (
    <>
      <Navigation />
      <PageHeader
        accent="Plan Your Trip"
        title="Travel & Explore"
        subtitle="Everything you need to plan your journey — plus all the amazing things Kerala has to offer"
      />
      <main>
        <TravelContent />
      </main>
      <Footer />
    </>
  );
}
