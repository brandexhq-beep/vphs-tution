import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import BlurReveal from "./BlurReveal";
import topper1 from "@/assets/topper-1.jpg";
import topper2 from "@/assets/topper-2.jpg";
import topper3 from "@/assets/topper-3.jpg";

const toppers = [
  { name: "Ramya K", percent: "97", image: topper1, subject: "Science Topper" },
  { name: "Namratha Y", percent: "96", image: topper2, subject: "Maths Topper" },
  { name: "Jitendra R", percent: "95", image: topper3, subject: "Overall Topper" },
  { name: "Sneha M", percent: "94", image: topper1, subject: "English Topper" },
  { name: "Arjun S", percent: "93", image: topper3, subject: "Science Topper" },
  { name: "Priya D", percent: "92", image: topper2, subject: "Maths Topper" },
];

const ResultsSection = () => (
  <section id="results" className="py-16 sm:py-20 bg-background">
    <div className="container mx-auto px-4">
      <BlurReveal>
        <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3 text-center">Academic Excellence</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-8 sm:mb-12">Our Toppers</h2>
      </BlurReveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {toppers.map((t, i) => (
          <BlurReveal key={t.name} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group bg-card p-4 sm:p-5 rounded-2xl shadow-card border border-border flex flex-col items-center text-center cursor-pointer relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Trophy badge */}
              <div className="absolute -top-1 -right-1 w-8 h-8 bg-accent rounded-bl-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Trophy size={14} className="text-accent-foreground" />
              </div>

              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-secondary mb-3 sm:mb-4 overflow-hidden border-2 border-transparent group-hover:border-primary transition-colors duration-300">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
              </div>

              <h3 className="font-bold text-foreground text-xs sm:text-sm relative z-10">{t.name}</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground mb-1 relative z-10">{t.subject}</p>

              <motion.p
                className="text-accent font-bold text-xl sm:text-2xl tabular-nums relative z-10"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.15 }}
              >
                {t.percent}%
              </motion.p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          </BlurReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
