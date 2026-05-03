import { Button } from "@/components/ui/button";
import { User, Users, Briefcase, ArrowRight } from "lucide-react";
import portraitImg from "@/assets/custom-portrait.jpg";

const services = [
  { icon: User, title: "Personal Keepsakes", desc: "Singular portraits that hold a lifetime in their stillness." },
  { icon: Users, title: "Family Portraits", desc: "Generations gathered into one enduring composition." },
  { icon: Briefcase, title: "Professional Commissions", desc: "Refined likenesses for offices, institutions and legacies." },
];

export const Portraits = () => (
  <section id="portraits" className="py-24 md:py-32 bg-secondary/40 border-y border-border/60">
    <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <div className="lg:col-span-5 order-2 lg:order-1">
        <div className="relative aspect-[4/5] max-w-sm">
          <div className="absolute -inset-3 border border-gold/50" />
          <img
            src={portraitImg}
            alt="Classical portrait commissioned at Manzoor Arts Gallery Lahore"
            loading="lazy"
            width={900}
            height={1100}
            className="relative w-full h-full object-cover shadow-elegant"
          />
        </div>
      </div>

      <div className="lg:col-span-7 order-1 lg:order-2">
        <div className="flex items-center gap-3 mb-6">
          <span className="gold-rule" />
          <span className="eyebrow">Custom Portrait Services</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
          Custom Portraits,
          <br />
          <span className="italic text-gold">Crafted to Last.</span>
        </h2>
        <p className="text-foreground/85 leading-relaxed max-w-2xl">
          We specialize in creating high-quality, customized portraits that capture
          personality, emotion and fine detail. Whether a personal keepsake, a family
          memory or a professional commission, our skilled artists ensure excellence
          in every piece — using premium materials and refined techniques to deliver
          artwork that lasts a lifetime.
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="border-t border-gold/40 pt-5">
              <Icon className="h-5 w-5 text-gold mb-3" strokeWidth={1.5} />
              <div className="font-serif text-xl mb-2">{title}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <Button asChild size="lg" className="mt-10 rounded-none bg-gold hover:bg-gold-deep text-accent-foreground h-12 px-8">
          <a href="#contact">Commission a Portrait <ArrowRight className="ml-2 h-4 w-4" /></a>
        </Button>
      </div>
    </div>
  </section>
);
