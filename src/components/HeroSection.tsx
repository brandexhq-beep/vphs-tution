import { Phone, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import BlurReveal from "./BlurReveal";
import classroomHero from "@/assets/classroom-hero.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-[95vh] flex items-center pt-24 bg-background overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
    
    <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center py-12 relative z-10 px-4">
      <BlurReveal>
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block"
        >
          Unit of Vignan Public High School
        </motion.span>
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-foreground mb-8 leading-[0.9] tracking-tighter">
          Shaping <br />
          <span className="text-primary italic">Future</span> <br />
          Toppers
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-lg leading-relaxed font-medium">
          Expert coaching for 7th to 10th Grade (State & CBSE). Join the legacy of excellence in the heart of Bangalore.
        </p>
        <div className="flex flex-col sm:flex-row gap-5">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(var(--primary), 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-primary text-primary-foreground rounded-2xl font-bold shadow-2xl hover:bg-primary/95 transition-all text-center text-lg"
          >
            Start Your Journey
          </motion.a>
          <motion.a
            href="tel:9972235286"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.05)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-transparent text-foreground border-2 border-border rounded-2xl font-bold hover:border-primary transition-all text-center flex items-center justify-center gap-3 text-lg"
          >
            <Phone size={20} className="text-primary" />
            Talk to Experts
          </motion.a>
        </div>
      </BlurReveal>

      <BlurReveal delay={0.3} className="relative">
        <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] border-8 border-white dark:border-slate-900 group">
          <img
            src={classroomHero}
            alt="Vignan Tutorials classroom"
            className="w-full h-full object-cover aspect-[4/5] lg:aspect-square group-hover:scale-105 transition-transform duration-700"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
        
        {/* Achievement Badge */}
        <motion.div 
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", delay: 0.8 }}
          className="absolute -bottom-8 -left-8 glass p-8 rounded-3xl shadow-2xl border border-white/20 z-20 backdrop-blur-2xl"
        >
          <p className="text-5xl font-black text-primary tabular-nums tracking-tighter">95%+</p>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Board Success Rate</p>
        </motion.div>
        
        {/* Floating elements */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
      </BlurReveal>
    </div>

    {/* Scroll Indicator */}
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, repeat: Infinity, duration: 2, repeatType: "reverse" }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50"
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span>
      <ArrowDown size={16} />
    </motion.div>
  </section>
);

export default HeroSection;
