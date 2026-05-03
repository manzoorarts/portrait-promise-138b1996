const videos = [
  "https://www.facebook.com/reel/1494217837954096",
  "https://www.facebook.com/manzoor.ahmad.773/videos/3859959890987091/",
];

export const Videos = () => (
  <section id="videos" className="py-24 md:py-32 border-t border-border/60 bg-secondary/30">
    <div className="container">
      <div className="flex items-center gap-3 mb-6">
        <span className="gold-rule" />
        <span className="eyebrow">From the Studio</span>
      </div>
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-3xl mb-12">
        Moments in <span className="italic text-gold">motion</span>.
      </h2>

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
        {videos.map((url) => (
          <div
            key={url}
            className="relative w-full max-w-[280px] mx-auto overflow-hidden border border-border bg-background shadow-soft"
            style={{ aspectRatio: "9 / 16" }}
          >
            <iframe
              src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                url
              )}&show_text=false&autoplay=false`}
              title="Manzoor Arts Gallery video"
              className="absolute inset-0 w-full h-full"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        Videos hosted on Facebook. Playback may require accepting Facebook cookies.
      </p>
    </div>
  </section>
);
