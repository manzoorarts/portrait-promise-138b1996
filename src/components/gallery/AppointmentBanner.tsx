import { CalendarCheck } from "lucide-react";

export const AppointmentBanner = () => (
  <section aria-label="Appointment notice" className="bg-foreground text-background py-12">
    <div className="container flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
      <CalendarCheck className="h-8 w-8 text-gold shrink-0" strokeWidth={1.25} />
      <div className="h-px w-12 md:h-10 md:w-px bg-gold/60" />
      <p className="font-serif text-2xl md:text-3xl leading-snug max-w-2xl">
        Kindly visit only after <span className="italic text-gold">scheduling an appointment.</span>
      </p>
      <a
        href="#contact"
        className="text-xs uppercase tracking-[0.25em] text-gold hover:text-background border-b border-gold pb-1"
      >
        Schedule now
      </a>
    </div>
  </section>
);
