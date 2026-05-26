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
         
        </p> Manzoor Arts Gallery Lahore proudly standss as a destination for creativity,
          culture, and excellence in fine art. As the owner, I am committed to offering
          a curated collection of high-quality artworks that reflect both traditional
          heritage and contemporary expression. Our gallery provides a welcoming space
          for artists and art lovers, ensuring authenticity, professionalism, and
          personalized service. We strive to support emerging talent while showcasing
          established artists, creating a vibrant artistic community. At Manzoor Art
          Gallery Lahore, quality, trust, and customer satisfaction remain our top
          priorities, making every visit a meaningful and inspiring experience for
          our valued guests. Manzoor Arts Gallery Lahore proudly standss as a destination for creativity,
          culture, and excellence in fine art. As the owner, I am committed to offering
          a curated collection of high-quality artworks that reflect both traditional
          heritage and contemporary expression. Our gallery provides a welcoming space
          for artists and art lovers, ensuring authenticity, professionalism, and
          personalized service. We strive to support emerging talent while showcasing
          established artists, creating a vibrant artistic community. At Manzoor Art
          Gallery Lahore, quality, trust, and customer satisfaction remain our top
          priorities, making every visit a meaningful and inspiring experience for
          our valued guests.
        <p>
          Manzoor Arts Gallery Lahore proudly announces its exclusive portrait solutions
          for art lovers and collectors. We specialize in creating high-quality,
          customized portraits that capture personality, emotion, and fine detail.
          Whether it is a personal keepsake, a family memory, or a professional
          commission, our skilled artists ensure excellence in every piece. Using
          premium materials and refined techniques, we deliver artwork that lasts a
          lifetime. Our commitment to creativity, precision, and customer satisfaction
          sets us apart. Visit Manzoor Arts Gallery Lahore to experience unique portrait
          services designed to turn your moments into timeless works of art.
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
