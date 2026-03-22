import { Award, Users, TrendingUp, Trophy } from "lucide-react";
import BlurReveal from "./BlurReveal";
import Counter from "./Counter";

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "1000+", label: "Students Trained" },
  { icon: TrendingUp, value: "98%", label: "Results" },
  { icon: Trophy, value: "50+", label: "Top Scorers" },
];

const StatsSection = () => (
  <section className="py-24 bg-card border-y border-border relative overflow-hidden">
    {/* Decorative background circles */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
        {stats.map((stat, i) => (
          <BlurReveal key={stat.label} delay={i * 0.1}>
            <div className="flex flex-col items-center text-center group cursor-pointer p-6 rounded-3xl hover:bg-white border border-transparent hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
              <div className="p-5 rounded-3xl bg-primary/10 text-primary mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 group-hover:bg-primary group-hover:text-white group-active:scale-95 shadow-lg shadow-primary/5">
                <stat.icon size={36} />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-foreground tabular-nums mb-3 tracking-tighter group-hover:text-primary transition-colors duration-300">
                <Counter value={stat.value} />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          </BlurReveal>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
