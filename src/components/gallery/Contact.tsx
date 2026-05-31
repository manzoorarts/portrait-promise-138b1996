import { MapPin, Mail, Clock, Instagram, Facebook } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-rule" />
            <span className="eyebrow">Visit & Inquire</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            Schedule your <span className="italic text-gold">private visit.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
            Every viewing is intimate and unhurried. Reach out and we'll
            confirm a time that suits you.
          </p>

          <ul className="space-y-5">
            {[
              { icon: MapPin, label: "Address",  value: "Manzoor Arts Gallery Lahore, 24-B, PUEHS, Town-1, Raiwind Rd. Lahore, Pakistan 53700" },
            { icon: Mail,   label: "Email",    value: "ceo@manzoorartsgallerylahore.com" },
              { icon: Clock,  label: "Hours",    value: "By appointment only" },
            ].map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex gap-4">
                <Icon className="h-5 w-5 text-gold mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="eyebrow mb-1">{label}</div>
                  <div className="text-foreground/90">{value}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://www.instagram.com/manzoorartsgallerylahore/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-10 w-10 flex items-center justify-center border border-border hover:border-gold hover:text-gold transition-colors"
            >
              <Instagram className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a
              href="https://www.facebook.com/people/Manzoor-Arts-Gallery-Lahore/61588212201871/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-10 w-10 flex items-center justify-center border border-border hover:border-gold hover:text-gold transition-colors"
            >
              <Facebook className="h-5 w-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
