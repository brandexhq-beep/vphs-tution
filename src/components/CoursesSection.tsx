import { Check, ArrowRight } from "lucide-react";
import BlurReveal from "./BlurReveal";

const courses = [
  {
    standard: "7th Standard",
    subjects: ["Mathematics", "Science", "English", "Social Science", "Kannada/Hindi"],
    syllabus: "State / CBSE",
  },
  {
    standard: "8th Standard",
    subjects: ["Mathematics", "Science", "English", "Social Science", "Kannada/Hindi"],
    syllabus: "State / CBSE",
  },
  {
    standard: "9th Standard",
    subjects: ["Mathematics", "Science", "English", "Social Science", "Kannada/Hindi"],
    syllabus: "State / CBSE",
  },
  {
    standard: "10th Standard",
    subjects: ["Mathematics", "Science", "English", "Social Science", "Kannada/Hindi"],
    syllabus: "State / CBSE",
  },
];

const CoursesSection = () => (
  <section id="courses" className="py-20 bg-background">
    <div className="container mx-auto">
      <BlurReveal>
        <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3 text-center">Our Courses</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
          Courses We Offer
        </h2>
      </BlurReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, i) => (
          <BlurReveal key={course.standard} delay={i * 0.1}>
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
              <h3 className="text-xl font-bold text-foreground mb-1">{course.standard}</h3>
              <p className="text-xs font-semibold text-accent mb-4">{course.syllabus}</p>
              <ul className="space-y-2 mb-6 flex-1">
                {course.subjects.map((subject) => (
                  <li key={subject} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={14} className="text-primary flex-shrink-0" />
                    {subject}
                  </li>
                ))}
              </ul>
              <a
                href="#enquiry"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-accent text-accent-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-all active:scale-[0.98]"
              >
                Join Batch <ArrowRight size={16} />
              </a>
            </div>
          </BlurReveal>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
