import BlurReveal from "./BlurReveal";

const toppersRow1 = [
  { src: "/Toppers/Lohith.png", name: "Lohith", percent: "90" },
  { src: "/Toppers/Yashoda n.png", name: "Yashoda N", percent: "92" },
  { src: "/Toppers/SSLC TOPPERS/Abhishek H.png", name: "Abhishek H", percent: "91" },
  { src: "/Toppers/SSLC TOPPERS/Akash K N.png", name: "Akash K N", percent: "93" },
  { src: "/Toppers/SSLC TOPPERS/Deepa R.png", name: "Deepa R", percent: "94" },
  { src: "/Toppers/SSLC TOPPERS/Harika N.png", name: "Harika N", percent: "92" },
  { src: "/Toppers/SSLC TOPPERS/M Bharath.png", name: "M Bharath", percent: "95" },
];

const toppersRow2 = [
  { src: "/Toppers/SSLC TOPPERS/Madan H K.png", name: "Madan H K", percent: "93" },
  { src: "/Toppers/SSLC TOPPERS/Manasa D.png", name: "Manasa D", percent: "91" },
  { src: "/Toppers/SSLC TOPPERS/Maruthi K L.png", name: "Maruthi K L", percent: "89" },
  { src: "/Toppers/SSLC TOPPERS/Rakesh S.png", name: "Rakesh S", percent: "90" },
  { src: "/Toppers/SSLC TOPPERS/Sandeep H.png", name: "Sandeep H", percent: "88" },
  { src: "/Toppers/SSLC TOPPERS/Thanushree N.png", name: "Thanushree N", percent: "94" },
  { src: "/Toppers/SSLC TOPPERS/Vidya R.png", name: "Vidya R", percent: "92" },
];

// Double the arrays for seamless loop
const marqueeRow1 = [...toppersRow1, ...toppersRow1];
const marqueeRow2 = [...toppersRow2, ...toppersRow2];

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
        {marqueeRow1.map((img, i) => (
          <div
            key={`r1-${i}`}
            className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] aspect-[4/5] rounded-2xl overflow-hidden shadow-card border border-border group relative bg-secondary"
          >
            <img
              src={img.src}
              alt={img.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-4 flex flex-col items-center justify-end h-3/5 pointer-events-none">
              <p className="text-white font-extrabold text-center w-full text-lg md:text-xl drop-shadow-md group-hover:text-primary transition-colors">{img.name}</p>
              <div className="mt-2 bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full border border-primary/30 flex items-center justify-center">
                <span className="text-white font-bold text-sm tracking-wide">{img.percent}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Marquee row 2 - right to left */}
    <div className="relative">
      <div className="flex gap-4 animate-marquee-reverse">
        {marqueeRow2.map((img, i) => (
          <div
            key={`r2-${i}`}
            className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] aspect-[4/5] rounded-2xl overflow-hidden shadow-card border border-border group relative bg-secondary"
          >
            <img
              src={img.src}
              alt={img.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end h-1/2">
              <p className="text-white font-bold text-center w-full text-base md:text-lg">{img.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
