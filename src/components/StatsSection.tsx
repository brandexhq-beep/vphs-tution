import { Award, Users, TrendingUp, Trophy } from "lucide-react";
import BlurReveal from "./BlurReveal";
import Counter from "./Counter";

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "1000+", label: "Students Trained" },
  { icon: TrendingUp, value: "95%", label: "Results" },
  { icon: Trophy, value: "50+", label: "Top Scorers" },
];

const StatsSection = () => (
  <section className="py-24 bg-card border-y border-border relative overflow-hidden">
    {/* Decorative background circles */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16">
        {stats.map((stat, i) => (
          <BlurReveal key={stat.label} delay={i * 0.1}>
            <div className="flex flex-col items-center text-center group">
              <div className="p-4 rounded-3xl bg-primary/10 text-primary mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6">
                <stat.icon size={32} />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-foreground tabular-nums mb-2">
                <Counter value={stat.value} />
              </div>
              <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          </BlurReveal>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
