import { motion } from "framer-motion";
import { Trophy, Crown } from "lucide-react";
import BlurReveal from "./BlurReveal";
const toppers = [
  { name: "Ramya K", percent: "97", image: "/Toppers/Ramya k.png", subject: "Topper" },
  { name: "Namratha Y", percent: "96", image: "/Toppers/Namratha Y.png", subject: "Topper" },
  { name: "Jitendra R", percent: "95", image: "/Toppers/Jitendra r.png", subject: "Topper" },
  { name: "Deepthi N", percent: "94", image: "/Toppers/Deepthi N.png", subject: "Topper" },
  { name: "Rakesh S", percent: "95", image: "/Toppers/SSLC TOPPERS/Rakesh S.png", subject: "Topper" },
];

const ResultsSection = () => (
  <section id="results" className="py-16 sm:py-20 bg-background">
    <div className="container mx-auto px-4">
      <BlurReveal>
        <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3 text-center">Academic Excellence</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-8 sm:mb-12">Our Toppers</h2>
      </BlurReveal>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {toppers.map((t, i) => (
          <BlurReveal key={t.name} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -12, scale: 1.05, boxShadow: "0 25px 40px -10px rgba(var(--primary), 0.2)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group bg-card p-5 sm:p-6 rounded-2xl shadow-card border border-border flex flex-col items-center text-center cursor-pointer relative"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Crown badge */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[20%] text-yellow-500 z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">
                <Crown size={36} className="fill-yellow-500 stroke-yellow-600" />
              </div>

              {/* Trophy badge */}
              <div className="absolute -top-1 -right-1 w-8 h-8 bg-accent rounded-bl-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Trophy size={14} className="text-accent-foreground" />
              </div>

              <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-secondary mb-4 sm:mb-5 overflow-hidden border-4 border-transparent group-hover:border-primary transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>

              <h3 className="font-extrabold text-foreground text-sm sm:text-lg relative z-10 group-hover:text-primary transition-colors">{t.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2 relative z-10">{t.subject}</p>

              <motion.p
                className="text-accent font-black text-2xl sm:text-3xl lg:text-4xl tabular-nums relative z-10 drop-shadow-sm"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.15, rotate: -2, color: "var(--primary)" }}
              >
                {t.percent}%
              </motion.p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
            </motion.div>
          </BlurReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
