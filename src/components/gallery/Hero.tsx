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

          <p className="mt-8 mb-4 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Mian Manzoor Ahmad is a visionary artist, creative entrepreneur, and the CEO & Founder of Manzoor Arts Gallery Lahore. Holding a Master of Fine Arts (MFA) degree, he further enhanced his artistic journey through advanced training and specialized education, refining his creative vision and professional expertise.
          </p>
          <p className="mb-4 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            With more than 15 years of professional experience in New York City, USA, he has built an impressive career across a wide range of creative fields, including visual arts, graphic design, advertising, fashion photography and filmmaking. His international exposure and multidisciplinary background have enabled him to develop a distinctive artistic perspective that harmoniously blends contemporary aesthetics with rich cultural expression.
          </p>
          <p className="mb-4 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Through his artistic practice and leadership at Manzoor Arts Gallery Lahore, he remains dedicated to promoting creativity, innovation, and artistic excellence on both national and international platforms. His work continues to inspire emerging artists while contributing to the growth and recognition of art and culture worldwide.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-none bg-foreground text-background hover:bg-gold hover:text-accent-foreground h-12 px-8">
              <a href="#contact">
                Book an Appointment <ArrowRight className="ml-2 h-4 w-4" />
              </a>
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
