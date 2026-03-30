import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Events from "@/components/Events";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Events />

        <RSVP />
      </main>
      <Footer />
    </>
  );
}
