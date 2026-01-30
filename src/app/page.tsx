import { Hero } from '@/components/sections/Hero';
import { FeaturedListings } from '@/components/sections/FeaturedListings';
import { Services } from '@/components/sections/Services';
import { TrustedPartner } from '@/components/sections/TrustedPartner';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturedListings />
      <Services />
      <TrustedPartner />
      <Footer />
    </main>
  );
}
