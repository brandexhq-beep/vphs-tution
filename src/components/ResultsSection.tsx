import { motion } from "framer-motion";
import { Trophy, Crown } from "lucide-react";
import BlurReveal from "./BlurReveal";
const toppers = [
  { name: "Deepashree R", percent: "98", image: "/Toppers/2026 toppers/Deepashree R.png", subject: "2026 Topper" },
  { name: "Koushikeswara R E", percent: "96", image: "/Toppers/2026 toppers/KOWSHIK R E .png", subject: "2026 Topper" },
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

      <div className="relative overflow-hidden py-20 -my-10">
        {/* Left/Right Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none" />
        
        <motion.div 
          className="flex gap-6 sm:gap-8 w-max px-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
          style={{ animationPlayState: "running" }}
        >
          {[...toppers, ...toppers].map((t, i) => (
            <div key={`${t.name}-${i}`} className="w-[180px] sm:w-[220px] shrink-0">
              <motion.div
                whileHover={{ y: -12, scale: 1.02, boxShadow: "0 20px 40px -12px rgba(var(--primary), 0.2)" }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group bg-card p-5 sm:p-6 rounded-2xl shadow-card border border-border/50 flex flex-col items-center text-center cursor-pointer relative"
              >
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Crown badge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[40%] text-yellow-500 z-10 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-[60%] drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">
                  <Crown size={32} className="fill-yellow-500 stroke-yellow-600 sm:w-10 sm:h-10" />
                </div>

                {/* Trophy badge */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  <Trophy size={14} className="text-accent" />
                </div>

                <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-secondary/50 mb-4 overflow-hidden border-2 sm:border-4 border-transparent group-hover:border-primary/50 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700 ease-out" 
                    loading="lazy" 
                  />
                </div>

                <div className="relative z-10 space-y-0.5">
                  <h3 className="font-extrabold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors line-clamp-1">{t.name}</h3>
                  <p className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-wider">{t.subject}</p>
                </div>

                <div className="mt-3 relative z-10">
                  <motion.div
                    className="text-primary font-black text-2xl sm:text-3xl tabular-nums drop-shadow-sm flex items-baseline gap-0.5"
                    whileHover={{ scale: 1.1, rotate: -3 }}
                  >
                    {t.percent}
                    <span className="text-sm sm:text-lg opacity-70">%</span>
                  </motion.div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] group-hover:animate-gradient-x scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default ResultsSection;
