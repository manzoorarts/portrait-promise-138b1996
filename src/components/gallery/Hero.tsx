import heroImg from "@/assets/heritage-hall.jpg";
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

          <h1 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
            Mian Manzoor Ahmad
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Mian Manzoor Ahmad is a visionary artist, entrepreneur, and the CEO & Founder of
            Manzoor Arts Gallery Lahore. After completing his MFA, he pursued advanced training
            and education to refine his artistic and creative direction. With over 15 years of
            professional experience in New York City, USA, he has worked across diverse creative
            industries including art and design, advertising, fashion, and film-making. His
            international exposure and multidisciplinary expertise have shaped a unique artistic
            perspective, blending contemporary aesthetics with cultural depth. Through his gallery
            and work, he continues to promote creativity, innovation, and artistic excellence both
            locally and globally.
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
              alt="Mian Manzoor Ahmad — CEO and Founder of Manzoor Arts Gallery Lahore"
              className="relative w-full h-full object-cover shadow-elegant"
              width={800}
              height={1000}
            />
          </div>
          <div className="max-w-md mx-auto mt-8 text-center">
            <div className="font-serif text-2xl">Mian Manzoor Ahmad</div>
            <div className="eyebrow text-gold mt-2">CEO / Founder</div>
            <div className="text-sm text-muted-foreground mt-1">Manzoor Arts Gallery Lahore</div>
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
