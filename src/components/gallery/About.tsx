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
          <span className="eyebrow">Our Story</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
          A house built on
          <span className="italic text-gold"> trust, </span>
          craft and quiet excellence.
        </h2>
      </div>

      <div className="lg:col-span-7 space-y-6 text-foreground/85 leading-relaxed">
        <p className="text-lg">
          Manzoor Arts Gallery Lahore proudly stands as a distinguished destination for creativity, culture, and artistic excellence. Dedicated to celebrating the beauty of fine art, the gallery presents a carefully curated collection of exceptional artworks that blend traditional heritage with contemporary expression. As the owner, I remain committed to creating an inspiring environment where artists and art enthusiasts can connect through originality, passion, and creativity.
        </p>
        <p>
          Our gallery offers a warm and welcoming space that values authenticity, professionalism, and personalized service, ensuring every visitor enjoys a memorable artistic experience. We strongly believe in supporting emerging talent while also showcasing the work of established artists, helping to build a vibrant and progressive artistic community. At Manzoor Arts Gallery Lahore, quality, trust, and customer satisfaction are at the heart of everything we do. Every artwork tells a story, and every visit is designed to inspire, enrich, and leave a lasting impression on our valued guests.
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
