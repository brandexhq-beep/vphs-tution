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
            <div className="p-6 rounded-2xl bg-background shadow-card border border-border hover:-translate-y-1 transition-transform duration-300">
              <r.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-bold text-foreground text-lg mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          </BlurReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
