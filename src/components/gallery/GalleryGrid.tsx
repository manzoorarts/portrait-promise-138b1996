export const GalleryGrid = () => {
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

        <div className="border border-gold/40 bg-background/60 py-24 md:py-32 px-6 text-center max-w-3xl mx-auto">
          <div className="eyebrow mb-4">In Preparation</div>
          <h3 className="font-serif text-4xl md:text-5xl italic text-gold mb-4">
            Coming Soon
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
            Our curated collection is being prepared for presentation.
            Please check back shortly, or schedule an appointment to view works in person.
          </p>
        </div>
      </div>
    </section>
  );
};
