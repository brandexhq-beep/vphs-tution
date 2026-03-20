import BlurReveal from "./BlurReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import classroomHero from "@/assets/classroom-hero.jpg";

const images = [
  { src: classroomHero, alt: "Students in classroom" },
  { src: gallery1, alt: "Group study session" },
  { src: gallery2, alt: "Science lab experiments" },
  { src: gallery3, alt: "Annual day celebration" },
];

// Double the images for seamless loop
const marqueeImages = [...images, ...images];

const GallerySection = () => (
  <section id="gallery" className="py-16 sm:py-20 bg-background overflow-hidden">
    <div className="container mx-auto mb-8 sm:mb-12">
      <BlurReveal>
        <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3 text-center">Campus Life</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center">Gallery</h2>
      </BlurReveal>
    </div>

    {/* Marquee row 1 - left to right */}
    <div className="relative mb-4">
      <div className="flex gap-4 animate-marquee">
        {marqueeImages.map((img, i) => (
          <div
            key={`r1-${i}`}
            className="flex-shrink-0 w-[260px] sm:w-[320px] md:w-[380px] aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-border"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Marquee row 2 - right to left */}
    <div className="relative">
      <div className="flex gap-4 animate-marquee-reverse">
        {[...marqueeImages].reverse().map((img, i) => (
          <div
            key={`r2-${i}`}
            className="flex-shrink-0 w-[260px] sm:w-[320px] md:w-[380px] aspect-[4/3] rounded-2xl overflow-hidden shadow-card border border-border"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
