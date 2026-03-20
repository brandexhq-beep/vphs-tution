import { Clock } from "lucide-react";
import BlurReveal from "./BlurReveal";

const batches = [
  { standard: "7th Standard", morning: "7:00 AM – 9:00 AM", evening: "4:30 PM – 6:30 PM" },
  { standard: "8th Standard", morning: "7:00 AM – 9:00 AM", evening: "4:30 PM – 6:30 PM" },
  { standard: "9th Standard", morning: "6:30 AM – 9:00 AM", evening: "4:00 PM – 6:30 PM" },
  { standard: "10th Standard", morning: "6:00 AM – 9:00 AM", evening: "4:00 PM – 7:00 PM" },
];

const BatchTimings = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto">
      <BlurReveal>
        <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3 text-center">Schedule</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Batch Timings</h2>
      </BlurReveal>

      <div className="max-w-2xl mx-auto">
        <div className="bg-card rounded-2xl shadow-card border border-border overflow-hidden">
          <div className="grid grid-cols-3 gap-4 p-4 bg-primary text-primary-foreground text-sm font-semibold">
            <div>Class</div>
            <div className="flex items-center gap-1"><Clock size={14} /> Morning</div>
            <div className="flex items-center gap-1"><Clock size={14} /> Evening</div>
          </div>
          {batches.map((b, i) => (
            <BlurReveal key={b.standard} delay={i * 0.05}>
              <div className={`grid grid-cols-3 gap-4 p-4 text-sm ${i % 2 === 0 ? "bg-card" : "bg-secondary/50"}`}>
                <div className="font-semibold text-foreground">{b.standard}</div>
                <div className="text-muted-foreground tabular-nums">{b.morning}</div>
                <div className="text-muted-foreground tabular-nums">{b.evening}</div>
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default BatchTimings;
