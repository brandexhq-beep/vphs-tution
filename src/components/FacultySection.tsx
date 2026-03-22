import BlurReveal from "./BlurReveal";

const faculty = [
  { name: "Amar Narayan", subject: "Mathematics", exp: "Experienced Faculty", image: "/Faculty/Amar Narayan.jpeg" },
  { name: "Varsha K M", subject: "Science & English", exp: "Experienced Faculty", image: "/Faculty/Varsha.png" },
  { name: "Arjun Anand", subject: "Mathematics & Social Science", exp: "Experienced Faculty", image: "/Faculty/Arjun Anand.jpeg" },
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
            <div className="bg-background rounded-2xl overflow-hidden shadow-card border border-border group hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-square overflow-hidden">
                <img src={f.image} alt={f.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
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
