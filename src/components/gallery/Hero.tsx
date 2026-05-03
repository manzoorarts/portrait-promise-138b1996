import heroImg from "@/assets/hero-gallery.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarCheck } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div className="container grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 fade-up">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="gold-rule" />
            <span className="eyebrow">A Curated House of Fine Art · Lahore</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            Manzoor
            <br />
            <span className="italic text-gold">Art Gallery</span>
            <br />
            Lahore
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            A destination for creativity, culture, and excellence in fine art —
            where traditional heritage meets contemporary expression, curated with
            authenticity, professionalism and personal care.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-none bg-foreground text-background hover:bg-gold hover:text-accent-foreground h-12 px-8">
              <a href="#contact">
                Book an Appointment <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="rounded-none h-12 px-2 hover:bg-transparent hover:text-gold">
              <a href="#gallery">Explore the Collection →</a>
            </Button>
          </div>

          <div className="mt-10 inline-flex items-center gap-3 px-4 py-3 border border-gold/40 bg-secondary/50">
            <CalendarCheck className="h-4 w-4 text-gold shrink-0" />
            <span className="text-xs md:text-sm tracking-wide text-foreground/80">
              Kindly visit only after scheduling an appointment.
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 relative fade-up">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            <div className="absolute -inset-4 border border-gold/40" />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-gold/20 -z-10" />
            <img
              src={heroImg}
              alt="Interior of Manzoor Art Gallery Lahore showing gold-framed classical paintings"
              className="relative w-full h-full object-cover shadow-elegant"
              width={800}
              height={1000}
            />
            <div className="absolute -top-6 -left-6 px-4 py-3 bg-background border border-border shadow-soft">
              <div className="eyebrow">Featured</div>
              <div className="font-serif text-lg leading-tight">Heritage Hall</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative serif word backdrop */}
      <div aria-hidden className="absolute -bottom-10 left-0 right-0 text-center font-serif italic text-[18vw] leading-none text-foreground/[0.03] pointer-events-none select-none">
        Manzoor
      </div>
    </section>
  );
};
