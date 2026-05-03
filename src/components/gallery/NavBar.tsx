import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portraits", label: "Portraits" },
  { href: "#artists", label: "Artists" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between gap-6">
        <a href="#home" className="flex flex-col leading-none">
          <span className="font-serif text-xl md:text-2xl tracking-tight">
            Manzoor <span className="text-gold">Art Gallery</span>
          </span>
          <span className="eyebrow mt-1 hidden sm:block">Lahore · Est. Fine Art</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-foreground/80 hover:text-gold transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="hidden md:inline-flex border-gold text-foreground hover:bg-gold hover:text-accent-foreground rounded-none">
            <a href="#contact">Book Appointment</a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <nav className="flex flex-col gap-6 mt-12">
                {links.map((l) => (
                  <a key={l.href} href={l.href} className="font-serif text-2xl hover:text-gold">
                    {l.label}
                  </a>
                ))}
                <Button asChild className="mt-4 rounded-none bg-gold hover:bg-gold-deep text-accent-foreground">
                  <a href="#contact">Book Appointment</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
