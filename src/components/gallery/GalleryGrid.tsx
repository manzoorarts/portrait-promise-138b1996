import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ceo from "@/assets/exhibition/ceo.jpg";
import artistStatement from "@/assets/exhibition/artist-statement.jpg";
import statement2 from "@/assets/exhibition/statement-2.jpg";
import serenity from "@/assets/exhibition/serenity.jpg";
import reflection1 from "@/assets/exhibition/reflection-1.jpg";
import reflection2 from "@/assets/exhibition/reflection-2.jpg";
import gullELala from "@/assets/exhibition/gull-e-lala.jpg";
import redShelter from "@/assets/exhibition/red-shelter.jpg";
import scarletEmbrace from "@/assets/exhibition/scarlet-embrace.jpg";
import purityOfLight from "@/assets/exhibition/purity-of-light.jpg";
import savannah from "@/assets/exhibition/savannah.jpg";
import brightNoon from "@/assets/exhibition/bright-noon.jpg";
import morningBreeze from "@/assets/exhibition/morning-breeze.jpg";
import blessings from "@/assets/exhibition/blessings.jpg";
import underTheSea from "@/assets/exhibition/under-the-sea.jpg";
import rejoicing from "@/assets/exhibition/rejoicing.jpg";
import melodyOfFuchsis from "@/assets/exhibition/melody-of-fuchsis.jpg";
import blueSymphony from "@/assets/exhibition/blue-symphony.jpg";
import shiftingLight from "@/assets/exhibition/shifting-light.jpg";
import goldenShower from "@/assets/exhibition/golden-shower.jpg";
import joyfulBlossoms from "@/assets/exhibition/joyful-blossoms.jpg";
import goldenHours from "@/assets/exhibition/golden-hours.jpg";
import gloryOfDusk from "@/assets/exhibition/glory-of-dusk.jpg";
import blowingWind from "@/assets/exhibition/blowing-wind.jpg";
import mesmerisingSunset from "@/assets/exhibition/mesmerising-sunset.jpg";
import campusLandscape from "@/assets/exhibition/campus-landscape.jpg";
import untamedBeauty from "@/assets/exhibition/untamed-beauty.jpg";
import sunFlowers from "@/assets/exhibition/sun-flowers.jpg";
import sunset from "@/assets/exhibition/sunset.jpg";
import twinsGreet from "@/assets/exhibition/twins-greet.jpg";
import kashmirVally2 from "@/assets/exhibition/kashmir-vally-2.jpg";
import infinitePath2 from "@/assets/exhibition/infinite-path-2.jpg";
import echoesHiddenPath from "@/assets/exhibition/echoes-hidden-path.jpg";
import kashmirVally1 from "@/assets/exhibition/kashmir-vally-1.jpg";
import campusFields3 from "@/assets/exhibition/campus-fields-3.jpg";
import whispers from "@/assets/exhibition/whispers.jpg";
import watersJourney from "@/assets/exhibition/waters-journey.jpg";
import remoteWhispers from "@/assets/exhibition/remote-whispers.jpg";
import campusFields1 from "@/assets/exhibition/campus-fields-1.jpg";
import campusLandscape3 from "@/assets/exhibition/campus-landscape-3.jpg";
import rythemRhyme from "@/assets/exhibition/rythem-rhyme.jpg";

const works = [
  { src: ceo, title: "Mian Manzoor Ahmad", caption: "CEO, Visual Artist / Designer" },
  { src: artistStatement, title: "Artist Statement", caption: "Prof. Dr. Shahida Manzoor" },
  { src: statement2, title: "Eternal Resonance", caption: "Artist Statement (continued)" },
  { src: serenity, title: "Serenity", caption: "Acrylic on Canvas · 36\" × 36\" · P0625" },
  { src: reflection1, title: "Reflection-I", caption: "Acrylic on Canvas · 36\" × 36\" · P0525" },
  { src: reflection2, title: "Reflection-II", caption: "Acrylic on Canvas · 36\" × 36\" · P1425" },
  { src: gullELala, title: "Gull-e-lala", caption: "Acrylic on Canvas · 36\" × 36\" · P0925" },
  { src: redShelter, title: "Red Shelter", caption: "Acrylic on Canvas · 36\" × 36\" · P1325" },
  { src: scarletEmbrace, title: "Scarlet Embrace", caption: "Acrylic on Canvas · 36\" × 36\" · P0825" },
  { src: purityOfLight, title: "Purity of Light", caption: "Acrylic on Canvas · 36\" × 36\" · P0425" },
  { src: savannah, title: "Savannah", caption: "Acrylic on Canvas · 36\" × 36\" · P0325" },
  { src: brightNoon, title: "Bright Noon", caption: "Acrylic on Canvas · 36\" × 36\" · P1025" },
  { src: morningBreeze, title: "Morning Breeze", caption: "Acrylic on Canvas · 36\" × 36\" · P1225" },
  { src: blessings, title: "Blessings", caption: "Acrylic on Canvas · 36\" × 36\" · P1125" },
  { src: underTheSea, title: "Under the Sea", caption: "Acrylic on Canvas · 36\" × 36\" · P1525" },
  { src: rejoicing, title: "Rejoicing", caption: "Acrylic on Canvas · 36\" × 36\" · P0725" },
  { src: melodyOfFuchsis, title: "Melody of Fuchsis", caption: "Acrylic on Canvas · 60\" × 36\" · P0225" },
  { src: blueSymphony, title: "Blue Symphony", caption: "Acrylic on Canvas · 60\" × 36\" · P0125" },
  { src: shiftingLight, title: "Shifting Light", caption: "Acrylic on Canvas · 48\" × 30\" · P0625" },
  { src: goldenShower, title: "Golden Shower", caption: "Acrylic on Canvas · 48\" × 30\" · P1725" },
  { src: joyfulBlossoms, title: "Joyful Blossoms", caption: "Mix Media on paper · 10\" × 11\" · P2225" },
  { src: goldenHours, title: "Golden Hours", caption: "Mix Media on paper · 10\" × 11\" · P2425" },
  { src: gloryOfDusk, title: "Glory of Dusk", caption: "Mix Media on paper · 10\" × 11\" · P2525" },
  { src: blowingWind, title: "Blowing Wind", caption: "Mix Media on paper · 10\" × 11\" · P2725" },
  { src: mesmerisingSunset, title: "Mesmerising Sunset", caption: "Pastel on paper · 9\" × 12\" · P2825" },
  { src: campusLandscape, title: "Campus Landscape - I", caption: "Pastel on paper · 9\" × 12\" · P2925" },
  { src: untamedBeauty, title: "Untamed Beauty", caption: "Pastel on paper · 9\" × 12\" · P3125" },
  { src: sunFlowers, title: "Sun Flowers", caption: "Pastel on paper · 12\" × 9\" · P3425" },
  { src: sunset, title: "Sunset", caption: "Pastel on paper · 12\" × 9\" · P3525" },
  { src: twinsGreet, title: "Twins Greet", caption: "Pastel on paper · 12\" × 9\" · P3625" },
  { src: kashmirVally2, title: "Kashmir Vally - II", caption: "Pastel on paper · 12\" × 9\" · P3725" },
  { src: infinitePath2, title: "Infinite Path - II", caption: "Pastel on paper · 12\" × 9\" · P3825" },
  { src: echoesHiddenPath, title: "Echoes of the Hidden Path", caption: "Pastel on paper · 12\" × 9\" · P3925" },
  { src: kashmirVally1, title: "Kashmir Vally - I", caption: "Pastel on paper · 12\" × 9\" · P4025" },
  { src: campusFields3, title: "Campus Fields - III", caption: "Pastel on paper · 12\" × 9\" · P4125" },
  { src: whispers, title: "Whispers", caption: "Pastel on paper · 12\" × 9\" · P4225" },
  { src: watersJourney, title: "Water's Journey", caption: "Pastel on paper · 12\" × 9\" · P4325" },
  { src: remoteWhispers, title: "Remote Whispers", caption: "Pastel on paper · 8\" × 5.5\" · P4425" },
  { src: campusFields1, title: "Campus Fields - I", caption: "Pastel on paper · 12\" × 9\" · P4425" },
  { src: campusLandscape3, title: "Campus Landscape - III", caption: "Pastel on paper · 8\" × 5.5\" · P4625" },
  { src: rythemRhyme, title: "Rythem Rhyme", caption: "Pastel on paper · 8\" × 5.5\" · P4725" },
];

export const GalleryGrid = () => {
  const [open, setOpen] = useState<number | null>(null);

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
            Exhibition <span className="italic text-gold">14th February 2025</span>
          </h2>
          <p className="mt-4 text-muted-foreground">A selection of works from the exhibition.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {works.map((w, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className="group text-left bg-background border border-border/60 overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="overflow-hidden bg-muted">
                <img
                  src={w.src}
                  alt={w.title}
                  loading="lazy"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg italic text-gold">{w.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{w.caption}</p>
              </div>
            </button>
          ))}
        </div>

        <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
          <DialogContent className="max-w-4xl">
            {open !== null && (
              <div>
                <img src={works[open].src} alt={works[open].title} className="w-full h-auto" />
                <div className="mt-4 text-center">
                  <h3 className="font-serif text-2xl italic text-gold">{works[open].title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{works[open].caption}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
