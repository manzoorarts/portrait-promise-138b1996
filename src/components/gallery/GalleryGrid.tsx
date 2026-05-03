import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import a1 from "@/assets/art-1.jpg";
import a2 from "@/assets/art-2.jpg";
import a3 from "@/assets/art-3.jpg";
import a4 from "@/assets/art-4.jpg";
import a5 from "@/assets/art-5.jpg";
import a6 from "@/assets/art-6.jpg";
import a7 from "@/assets/art-7.jpg";
import a8 from "@/assets/art-8.jpg";

type Piece = { src: string; title: string; caption: string };

const pieces: Piece[] = [
  { src: a1, title: "The Elder",          caption: "Oil on canvas · Hassan Raza" },
  { src: a2, title: "Warm Currents",      caption: "Mixed media with gold leaf" },
  { src: a3, title: "Garden of the Court",caption: "Mughal miniature · Bilal Ahmed" },
  { src: a4, title: "Glance",             caption: "Graphite on paper · Ayesha Malik" },
  { src: a5, title: "Wazir Khan, Dusk",   caption: "Watercolor & ink" },
  { src: a6, title: "Brass & Pomegranate",caption: "Still life, oil on linen" },
  { src: a7, title: "Three Generations",  caption: "Commissioned family portrait" },
  { src: a8, title: "Devotion",           caption: "Gold-leaf calligraphy · Noor Fatima" },
];

export const GalleryGrid = () => {
  const [open, setOpen] = useState<Piece | null>(null);

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
            A quiet walk through <span className="italic text-gold">the gallery.</span>
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {pieces.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setOpen(p)}
              className="mb-4 block w-full break-inside-avoid group relative overflow-hidden bg-background"
              aria-label={`View ${p.title}`}
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <div className="font-serif text-xl text-background leading-tight">{p.title}</div>
                <div className="text-xs text-background/80 mt-1">{p.caption}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-5xl bg-background border-gold/40 p-0 overflow-hidden">
          {open && (
            <div className="grid md:grid-cols-[1fr_auto]">
              <img src={open.src} alt={open.title} className="w-full max-h-[80vh] object-contain bg-foreground/5" />
              <div className="p-8 md:w-72 md:border-l border-border">
                <div className="eyebrow mb-3">Manzoor Art Gallery</div>
                <h3 className="font-serif text-3xl leading-tight mb-3">{open.title}</h3>
                <p className="text-sm text-muted-foreground">{open.caption}</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <a href="#contact" className="text-sm text-gold hover:text-gold-deep">
                    Inquire about this work →
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
