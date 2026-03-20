import { MapPin, Phone, Mail } from "lucide-react";
import BlurReveal from "./BlurReveal";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-card border-t border-border">
    <div className="container mx-auto">
      <BlurReveal>
        <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3 text-center">Get In Touch</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Contact Us</h2>
      </BlurReveal>

      <div className="grid lg:grid-cols-2 gap-8">
        <BlurReveal>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Address</h3>
                <a
                  href="https://maps.app.goo.gl/puFQUf1RePi2eua69"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Above Anjaneya Electricals, R.T. Street, B.V.K. Iyengar Road, Bangalore-560053
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Phone</h3>
                <a href="tel:9972235286" className="text-muted-foreground hover:text-accent transition-colors text-sm block">
                  9972235286
                </a>
                <a href="tel:9632163308" className="text-muted-foreground hover:text-accent transition-colors text-sm block">
                  9632163308
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground text-sm">info@vignantutorials.com</p>
              </div>
            </div>
          </div>
        </BlurReveal>

        <BlurReveal delay={0.2}>
          <div className="rounded-2xl overflow-hidden shadow-card border border-border h-[300px] lg:h-full min-h-[300px] grayscale hover:grayscale-0 transition-all duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3514335668333!2d77.5165349!3d13.013278200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d01e6ba3ac9%3A0xef2e35891bf830e1!2sVignan%20Public%20High%20School!5e0!3m2!1sen!2sin!4v1774034592721!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vignan Tutorials Location"
            />
          </div>
        </BlurReveal>
      </div>
    </div>
  </section>
);

export default ContactSection;
