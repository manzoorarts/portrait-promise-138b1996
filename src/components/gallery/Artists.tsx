import a1 from "@/assets/art-1.jpg";
import a4 from "@/assets/art-4.jpg";
import a8 from "@/assets/art-8.jpg";
import a3 from "@/assets/art-3.jpg";

const artists = [
  { img: a1, name: "Hassan Raza",   role: "Established · Oil Portraiture", bio: "Master of classical chiaroscuro with three decades of practice." },
  { img: a4, name: "Ayesha Malik",  role: "Emerging · Charcoal & Graphite", bio: "Hyper-detailed studies of expression and quiet emotion." },
  { img: a3, name: "Bilal Ahmed",   role: "Established · Miniature",        bio: "Custodian of the Mughal miniature tradition, reimagined." },
  { img: a8, name: "Noor Fatima",   role: "Emerging · Calligraphy",         bio: "Gold-leaf devotional script meeting contemporary form." },
];

export const Artists = () => (
  <section id="artists" className="py-24 md:py-32">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="gold-rule" />
            <span className="eyebrow">Featured Artists</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-2xl">
            The hands behind <span className="italic text-gold">the canvas.</span>
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md">
          We support emerging talent while showcasing established artists — building a
          vibrant, lasting community of craft.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {artists.map((a) => (
          <article key={a.name} className="bg-background group p-6 transition-colors hover:bg-secondary/60">
            <div className="aspect-[3/4] overflow-hidden mb-5 bg-muted">
              <img
                src={a.img}
                alt={`Artwork by ${a.name}`}
                loading="lazy"
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="eyebrow mb-2">{a.role}</div>
            <h3 className="font-serif text-2xl leading-tight mb-2">{a.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{a.bio}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
