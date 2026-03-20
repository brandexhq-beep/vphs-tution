import { UserCheck, ClipboardCheck, Users, MessageSquare, BookOpen, Star } from "lucide-react";
import BlurReveal from "./BlurReveal";

const reasons = [
  { icon: UserCheck, title: "Qualified & Dedicated Teachers", desc: "Experienced faculty committed to each student's success." },
  { icon: ClipboardCheck, title: "One-to-One Monitoring", desc: "Individual attention to track progress and address weaknesses." },
  { icon: BookOpen, title: "Regular Tests & Assessments", desc: "Frequent evaluations to keep students exam-ready." },
  { icon: MessageSquare, title: "Parent-Teacher Meetings", desc: "Transparent communication on student performance." },
  { icon: Users, title: "Small Batch Sizes", desc: "Focused learning in manageable class sizes." },
  { icon: Star, title: "Proven Track Record", desc: "Consistently producing top scorers for over a decade." },
];

const WhyChooseUs = () => (
  <section id="about" className="py-20 bg-card border-y border-border">
    <div className="container mx-auto">
      <BlurReveal>
        <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3 text-center">Why Choose Us</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
          The Vignan Advantage
        </h2>
      </BlurReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <BlurReveal key={r.title} delay={i * 0.08}>
            <div className="p-6 sm:p-8 rounded-3xl bg-card shadow-card border border-border hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(var(--primary),0.2)] transition-all duration-500 group relative overflow-hidden h-full flex flex-col justify-start">
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 shadow-sm relative z-10">
                <r.icon className="w-8 h-8" />
              </div>
              <h3 className="font-extrabold text-foreground text-lg sm:text-xl mb-3 relative z-10 group-hover:text-primary transition-colors">{r.title}</h3>
              <p className="text-sm font-medium text-muted-foreground leading-relaxed relative z-10 group-hover:text-foreground transition-colors">{r.desc}</p>
            </div>
          </BlurReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
