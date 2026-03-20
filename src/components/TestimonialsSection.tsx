import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BlurReveal from "./BlurReveal";

const testimonials = [
  {
    quote: "My daughter scored 97% in her 10th boards thanks to Vignan Tutorials. The teachers are incredibly dedicated and supportive.",
    name: "Mrs. Kavitha R",
    role: "Parent of Ramya K",
  },
  {
    quote: "The individual attention and regular tests helped me improve from 75% to 95%. I couldn't have done it without Vignan.",
    name: "Jitendra R",
    role: "10th Standard Student",
  },
  {
    quote: "As a parent, I appreciate the regular parent-teacher meetings. The transparency about my child's progress is outstanding.",
    name: "Mr. Suresh M",
    role: "Parent of Sneha M",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-16 sm:py-20 bg-card border-y border-border">
      <div className="container mx-auto max-w-3xl px-4">
        <BlurReveal>
          <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3 text-center">Testimonials</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-8 sm:mb-12">What People Say</h2>
        </BlurReveal>

        <div className="relative min-h-[220px] sm:min-h-[200px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.3 }}
              className="text-center px-4 sm:px-8"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-primary/20 mx-auto mb-4 sm:mb-6" />
              <p className="text-base sm:text-lg md:text-xl text-foreground leading-relaxed mb-4 sm:mb-6 max-w-[65ch] mx-auto">
                "{testimonials[current].quote}"
              </p>
              <p className="font-bold text-foreground">{testimonials[current].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-6 sm:mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-background border border-border hover:bg-secondary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-border"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-background border border-border hover:bg-secondary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
