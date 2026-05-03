import { NavBar } from "@/components/gallery/NavBar";
import { Hero } from "@/components/gallery/Hero";
import { About } from "@/components/gallery/About";
import { Portraits } from "@/components/gallery/Portraits";

import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Videos } from "@/components/gallery/Videos";
import { AppointmentBanner } from "@/components/gallery/AppointmentBanner";
import { Contact } from "@/components/gallery/Contact";
import { Footer } from "@/components/gallery/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <Hero />
      <About />
      <Portraits />
      <Artists />
      <GalleryGrid />
      <Videos />
      <AppointmentBanner />
      <Contact />
      <Footer />

      {/* SEO: structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ArtGallery",
            name: "Manzoor Art Gallery Lahore",
            description:
              "A curated destination in Lahore for fine art and custom portrait commissions. By appointment only.",
            address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
            areaServed: "Lahore",
            priceRange: "$$$",
          }),
        }}
      />
    </main>
  );
};

export default Index;
