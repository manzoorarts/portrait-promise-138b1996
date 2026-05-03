import { ShieldCheck, Sparkles, HandHeart } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Authenticity", desc: "Every piece verified, sourced and presented with integrity." },
  { icon: Sparkles, title: "Heritage & Modern", desc: "Traditional masters alongside contemporary voices." },
  { icon: HandHeart, title: "Personal Service", desc: "An attentive, unhurried experience for every guest." },
];

export const About = () => (
  <section id="about" className="py-24 md:py-32 border-t border-border/60">
    <div className="container grid lg:grid-cols-12 gap-16">
      <div className="lg:col-span-5">
        <div className="flex items-center gap-3 mb-6">
          <span className="gold-rule" />
          <span className="eyebrow">Introduction</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          Mian <span className="italic text-gold">Manzoor Ahmad</span>
        </h2>
      </div>

      <div className="lg:col-span-7 space-y-6 text-foreground/85 leading-relaxed">
        <p className="text-lg">
          Mian Manzoor Ahmad is a visionary artist, entrepreneur, and the CEO &amp;
          Founder of Manzoor Arts Gallery Lahore. After completing his MFA, he
          pursued advanced training and education to refine his artistic and
          creative direction. With over 15 years of professional experience in
          New York City, USA, he has worked across diverse creative industries
          including art and design, advertising, fashion, and film-making. His
          international exposure and multidisciplinary expertise have shaped a
          unique artistic perspective, blending contemporary aesthetics with
          cultural depth. Through his gallery and work, he continues to promote
          creativity, innovation, and artistic excellence both locally and
          globally.
        </p>

        <div className="grid sm:grid-cols-3 gap-px bg-border mt-12">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-6">
              <Icon className="h-5 w-5 text-gold mb-4" strokeWidth={1.5} />
              <div className="font-serif text-xl mb-2">{title}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
