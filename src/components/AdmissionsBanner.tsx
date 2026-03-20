import { Phone, MessageCircle } from "lucide-react";
import BlurReveal from "./BlurReveal";

const AdmissionsBanner = () => (
  <section className="py-16 bg-primary">
    <div className="container mx-auto text-center">
      <BlurReveal>
        <p className="text-primary-foreground/70 font-bold tracking-widest text-xs uppercase mb-3">Limited Seats</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
          Admissions Open for 2026-27
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
          Secure your child's future with Vignan's proven academic excellence. Don't wait — batches fill up fast.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:9972235286"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-all active:scale-[0.98]"
          >
            <Phone size={18} />
            Call Now
          </a>
          <a
            href="https://wa.me/919972235286?text=Hi,%20I%20want%20to%20enquire%20about%20admissions%20for%20my%20child"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-all active:scale-[0.98]"
          >
            <MessageCircle size={18} />
            Enquire on WhatsApp
          </a>
        </div>
      </BlurReveal>
    </div>
  </section>
);

export default AdmissionsBanner;
