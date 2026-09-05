import Cta from "@/components/cta";
import Facility from "@/components/facility";
import Hero from "@/components/hero";
import LocationMap from "@/components/location-map";
import ProofStrip from "@/components/proof-strip";
import ScrollProgress from "@/components/scroll-progress";
import Services from "@/components/services";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ProofStrip />
        <Services />
        <Facility />
        <Testimonials />
        <LocationMap />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
