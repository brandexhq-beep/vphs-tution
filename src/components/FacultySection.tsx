import BlurReveal from "./BlurReveal";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";
import faculty4 from "@/assets/faculty-4.jpg";

const faculty = [
  { name: "Mr. Raghavendra S", subject: "Mathematics", exp: "15+ Years", image: faculty1 },
  { name: "Mrs. Lakshmi P", subject: "Science", exp: "12+ Years", image: faculty2 },
  { name: "Mr. Venkatesh K", subject: "Social Science", exp: "18+ Years", image: faculty3 },
  { name: "Mrs. Anitha R", subject: "English", exp: "10+ Years", image: faculty4 },
];

const FacultySection = () => (
  <section id="faculty" className="py-20 bg-card border-y border-border">
    <div className="container mx-auto">
      <BlurReveal>
        <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3 text-center">Our Team</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Meet Our Faculty</h2>
      </BlurReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {faculty.map((f, i) => (
          <BlurReveal key={f.name} delay={i * 0.1}>
            <div className="bg-background rounded-2xl overflow-hidden shadow-card border border-border hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-square overflow-hidden">
                <img src={f.image} alt={f.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-foreground">{f.name}</h3>
                <p className="text-sm text-accent font-semibold">{f.subject}</p>
                <p className="text-xs text-muted-foreground mt-1">{f.exp} Experience</p>
              </div>
            </div>
          </BlurReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FacultySection;
