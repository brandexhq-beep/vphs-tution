import { GraduationCap, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground pt-20 pb-10 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">Vignan Tutorials</span>
            </div>
            <p className="text-primary-foreground/60 leading-relaxed max-w-xs">
              Empowering students with quality education. Unit of Vignan Public High School, Bangalore. Shaping future toppers since 2014.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={20} />, href: "#" },
                { icon: <Instagram size={20} />, href: "#" },
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <Youtube size={20} />, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3, color: "var(--primary)" }}
                  className="p-2.5 rounded-full bg-white/5 border border-white/10 text-primary-foreground/60 hover:bg-white/10 transition-all shadow-sm"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Sitemap Columns */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Explore</h4>
            <div className="flex flex-col gap-3">
              {["Home", "About", "Courses", "Results", "Faculty", "Gallery"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[15px] text-primary-foreground/60 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Courses</h4>
            <div className="flex flex-col gap-3">
              {["7th Grade Coaching", "8th Grade Foundation", "9th Grade Excellence", "10th Board (State)", "10th Board (CBSE)"].map((course) => (
                <a
                  key={course}
                  href="#courses"
                  className="text-[15px] text-primary-foreground/60 hover:text-white hover:translate-x-1 transition-all"
                >
                  {course}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-4">
              <a 
                href="mailto:info@vignantutorials.com" 
                className="flex items-center gap-3 text-[15px] text-primary-foreground/60 hover:text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={14} />
                </div>
                <span>9972235286</span>
              </a>
              <a 
                href="https://maps.app.goo.gl/ZVsZgMs2JCbziK7o8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[15px] text-primary-foreground/60 hover:text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors mt-1">
                  <MapPin size={14} />
                </div>
                <span>Vignan Tutorials, Bangalore,<br />Karnataka 560001</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40 font-medium tracking-wide">
            © {new Date().getFullYear()} VIGNAN TUTORIALS. CRAFTED BY EXCELLENCE.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-primary-foreground/40 hover:text-white transition-colors">Terms of Service</a>
          </div>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-primary rounded-full shadow-lg text-white absolute -top-12 right-12 hidden lg:flex"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
      
      {/* Decorative Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  );
};

export default Footer;
