import { Hero } from "@/components/sections/Hero";
import { FeaturedListings } from "@/components/sections/FeaturedListings";
import { Services } from "@/components/sections/Services";
import { TrustedPartner } from "@/components/sections/TrustedPartner";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home">
        <Hero />
      </section>
      <section id="featured">
        <FeaturedListings />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <TrustedPartner />
        <Footer />
      </section>
    </main>
  );
}
