import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, MapPin, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(6, "Enter a valid phone").max(30),
  date: z.date({ required_error: "Pick a preferred date" }),
  time: z.string().min(1, "Select a time"),
  purpose: z.string().min(1, "Select a purpose"),
  message: z.string().trim().max(800).optional(),
});

const times = ["11:00 AM", "12:00 PM", "1:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

export const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", time: "", purpose: "", message: "" },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Appointment request received", {
      description: `We'll confirm your visit on ${format(values.date, "PPP")} at ${values.time}.`,
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-rule" />
            <span className="eyebrow">Visit & Inquire</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            Schedule your <span className="italic text-gold">private visit.</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
            Every viewing is intimate and unhurried. Share a few details and we'll
            confirm a time that suits you.
          </p>

          <ul className="space-y-5">
            {[
              { icon: MapPin, label: "Address",  value: "Manzoor Arts Gallery Lahore, 24-B, PUEHS, Town 1 Raiwind Rd. Lahore, Pakistan 53700" },
              { icon: Mail,   label: "Email",    value: "manzoor_mehboob@yahoo.com" },
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
              href="https://www.facebook.com/manzoorartsgallerylahore"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-10 w-10 flex items-center justify-center border border-border hover:border-gold hover:text-gold transition-colors"
            >
              <Facebook className="h-5 w-5" strokeWidth={1.5} />
            </a>
          </div>

        </div>

        <div className="lg:col-span-7">
          <div className="border border-border bg-secondary/30 p-6 md:p-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid sm:grid-cols-2 gap-5">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem className="sm:col-span-2">
                    <FormLabel className="eyebrow">Full Name</FormLabel>
                    <FormControl><Input className="rounded-none bg-background" placeholder="Your name" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="eyebrow">Email</FormLabel>
                    <FormControl><Input type="email" className="rounded-none bg-background" placeholder="you@example.com" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="eyebrow">Phone</FormLabel>
                    <FormControl><Input className="rounded-none bg-background" placeholder="+92 ___ _______" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="date" render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="eyebrow">Preferred Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button variant="outline" className={cn("rounded-none bg-background justify-start font-normal", !field.value && "text-muted-foreground")}>
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? format(field.value, "PPP") : "Pick a date"}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(d) => d < new Date(new Date().setHours(0,0,0,0))}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="time" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="eyebrow">Preferred Time</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-none bg-background"><SelectValue placeholder="Select time" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {times.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="purpose" render={({ field }) => (
                  <FormItem className="sm:col-span-2">
                    <FormLabel className="eyebrow">Purpose of Visit</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="rounded-none bg-background"><SelectValue placeholder="Select a purpose" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="visit">Gallery Visit</SelectItem>
                        <SelectItem value="portrait">Portrait Commission</SelectItem>
                        <SelectItem value="acquire">Acquire an Artwork</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem className="sm:col-span-2">
                    <FormLabel className="eyebrow">Message <span className="text-muted-foreground normal-case tracking-normal">(optional)</span></FormLabel>
                    <FormControl><Textarea rows={4} className="rounded-none bg-background resize-none" placeholder="Tell us about your visit or commission..." {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <p className="text-xs text-muted-foreground">
                    By submitting, you agree to be contacted to confirm your appointment.
                  </p>
                  <Button type="submit" disabled={submitting} className="rounded-none bg-foreground text-background hover:bg-gold hover:text-accent-foreground h-12 px-8">
                    {submitting ? "Sending..." : "Request Appointment"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
