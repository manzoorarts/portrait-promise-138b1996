export const Footer = () => (
  <footer className="bg-foreground text-background/80 pt-16 pb-8">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-background/10">
        <div>
          <div className="font-serif text-2xl text-background">
            Manzoor <span className="text-gold italic">Art Gallery</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed max-w-sm">
            A curated house of fine art in Lahore — heritage, contemporary works
            and bespoke portrait commissions.
          </p>
        </div>

        <div>
          <div className="eyebrow text-gold mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            {["About","Portraits","Artists","Gallery","Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-gold">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow text-gold mb-4">Visit</div>
          <p className="text-sm leading-relaxed">
            Lahore, Pakistan<br />
            By appointment only<br />
            <a href="#contact" className="text-gold hover:underline">Schedule a visit →</a>
          </p>
        </div>
      </div>

      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/60">
        <p>© {new Date().getFullYear()} Manzoor Arts Gallery Lahore. All rights reserved.</p>
        <p className="italic font-serif text-sm">Quality · Trust · Satisfaction</p>
      </div>
    </div>
  </footer>
);
