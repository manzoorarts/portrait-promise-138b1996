import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ceo from "@/assets/exhibition/ceo.jpg";
import artistStatement from "@/assets/exhibition/artist-statement.jpg";
import statement2 from "@/assets/exhibition/statement-2.jpg";
import serenity from "@/assets/exhibition/serenity.jpg";
import reflection1 from "@/assets/exhibition/reflection-1.jpg";
import gullELala from "@/assets/exhibition/gull-e-lala.jpg";
import redShelter from "@/assets/exhibition/red-shelter.jpg";
import scarletEmbrace from "@/assets/exhibition/scarlet-embrace.jpg";
import purityOfLight from "@/assets/exhibition/purity-of-light.jpg";
import savannah from "@/assets/exhibition/savannah.jpg";
import brightNoon from "@/assets/exhibition/bright-noon.jpg";
import morningBreeze from "@/assets/exhibition/morning-breeze.jpg";
import blessings from "@/assets/exhibition/blessings.jpg";
import underTheSea from "@/assets/exhibition/under-the-sea.jpg";

const works = [
  { src: ceo, title: "Mian Manzoor Ahmad", caption: "CEO, Visual Artist / Designer" },
  { src: artistStatement, title: "Artist Statement", caption: "Prof. Dr. Shahida Manzoor" },
  { src: statement2, title: "Eternal Resonance", caption: "Artist Statement (continued)" },
  { src: serenity, title: "Serenity", caption: "Acrylic on Canvas · 36\" × 36\" · P0625" },
  { src: reflection1, title: "Reflection-I", caption: "Acrylic on Canvas · 36\" × 36\" · P0525" },
  { src: gullELala, title: "Gull-e-lala", caption: "Acrylic on Canvas · 36\" × 36\" · P0925" },
  { src: redShelter, title: "Red Shelter", caption: "Acrylic on Canvas · 36\" × 36\" · P1325" },
  { src: scarletEmbrace, title: "Scarlet Embrace", caption: "Acrylic on Canvas · 36\" × 36\" · P0825" },
  { src: purityOfLight, title: "Purity of Light", caption: "Acrylic on Canvas · 36\" × 36\" · P0425" },
  { src: savannah, title: "Savannah", caption: "Acrylic on Canvas · 36\" × 36\" · P0325" },
  { src: brightNoon, title: "Bright Noon", caption: "Acrylic on Canvas · 36\" × 36\" · P1025" },
  { src: morningBreeze, title: "Morning Breeze", caption: "Acrylic on Canvas · 36\" × 36\" · P1225" },
  { src: blessings, title: "Blessings", caption: "Acrylic on Canvas · 36\" × 36\" · P1125" },
  { src: underTheSea, title: "Under the Sea", caption: "Acrylic on Canvas · 36\" × 36\" · P1525" },
];

export const GalleryGrid = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary/40 border-y border-border/60">
      <div className="container">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="gold-rule" />
            <span className="eyebrow">The Collection</span>
            <span className="gold-rule" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-3xl mx-auto">
            Exhibition <span className="italic text-gold">14th February 2025</span>
          </h2>
          <p className="mt-4 text-muted-foreground">A selection of works from the exhibition.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {works.map((w, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className="group text-left bg-background border border-border/60 overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="overflow-hidden bg-muted">
                <img
                  src={w.src}
                  alt={w.title}
                  loading="lazy"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg italic text-gold">{w.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{w.caption}</p>
              </div>
            </button>
          ))}
        </div>

        <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
          <DialogContent className="max-w-4xl">
            {open !== null && (
              <div>
                <img src={works[open].src} alt={works[open].title} className="w-full h-auto" />
                <div className="mt-4 text-center">
                  <h3 className="font-serif text-2xl italic text-gold">{works[open].title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{works[open].caption}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
