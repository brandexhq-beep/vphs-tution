import { useState, useEffect } from "react";
import { Menu, X, GraduationCap, ArrowRight, ChevronDown, BookOpen, Users, Trophy, Image } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { 
    label: "Courses", 
    href: "#courses",
    dropdown: [
      { label: "7th Grade", desc: "Foundation for basics", icon: <BookOpen size={16} /> },
      { label: "8th Grade", desc: "Strengthening core concepts", icon: <BookOpen size={16} /> },
      { label: "9th Grade", desc: "Preparation for Boards", icon: <BookOpen size={16} /> },
      { label: "10th Board", desc: "State & CBSE Excellence", icon: <Trophy size={16} /> },
    ]
  },
  { label: "Results", href: "#results" },
  { label: "Faculty", href: "#faculty" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[110] origin-left"
        style={{ scaleX }}
      />
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled 
            ? "h-[68px] glass shadow-elevated" 
            : "h-[88px] bg-transparent"
        } flex items-center`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          <motion.a 
            href="#home" 
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center`}
              whileHover={{ rotate: [-5, 5, -5, 0], scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              <img src="/tuition_logo.png" alt="Vignan Tutorials Logo" className="w-full h-full object-contain drop-shadow-md" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl sm:text-3xl text-foreground tracking-tighter leading-none">VIGNAN</span>
              <span className="text-xs sm:text-sm font-bold text-primary tracking-[0.2em] uppercase mt-0.5">Tutorials</span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div 
                key={link.label}
                className="relative group px-3 py-2"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className={`text-[15px] font-semibold flex items-center gap-1.5 transition-colors ${
                    activeDropdown === link.label ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                  )}
                </a>
                
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-card border border-border rounded-2xl shadow-elevated p-3 z-50"
                      >
                        <div className="grid gap-1">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.label}
                              href={link.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors group/item"
                            >
                              <div className="mt-1 p-1.5 rounded-lg bg-primary/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                                {item.icon}
                              </div>
                              <div>
                                <div className="text-sm font-bold text-foreground">{item.label}</div>
                                <div className="text-[11px] text-muted-foreground leading-tight">{item.desc}</div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            
            <div className="ml-4 pl-4 border-l border-border/50">
              <motion.a
                href="#enquiry"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(var(--primary), 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full text-[14px] font-bold shadow-lg flex items-center gap-2 hover:bg-primary/95 transition-all"
              >
                Enroll 2026-27
                <ArrowRight size={16} />
              </motion.a>
            </div>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground active:scale-90 transition-transform bg-muted/50 rounded-lg"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Nav - Moved outside nav to prevent clipping by backdrop-filter height */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-background/95 backdrop-blur-md z-[100] lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-card border-l border-border shadow-2xl lg:hidden flex flex-col z-[101]"
            >
              <div className="p-6 flex justify-between items-center border-b border-border">
                <span className="font-bold text-lg">Menu</span>
                <button onClick={() => setOpen(false)} className="p-2 bg-muted rounded-full">
                  <X size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <div key={link.label} className="border-b border-border/50 last:border-0 pb-2">
                    <motion.a
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => setOpen(false)}
                      className="text-xl font-bold text-foreground py-3 flex justify-between items-center group"
                    >
                      {link.label}
                      <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    {link.dropdown && (
                      <div className="grid grid-cols-2 gap-2 mt-2 pl-2">
                        {link.dropdown.map((item) => (
                          <a 
                            key={item.label} 
                            href={link.href} 
                            className="text-xs font-semibold text-muted-foreground p-2 rounded-lg bg-muted/50"
                            onClick={() => setOpen(false)}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-8">
                  <motion.a
                    href="#enquiry"
                    className="w-full py-4 bg-primary text-primary-foreground rounded-2xl text-lg font-bold text-center shadow-xl block"
                    onClick={() => setOpen(false)}
                  >
                    Admissions Open
                  </motion.a>
                  <p className="text-center text-xs text-muted-foreground mt-4">Shaping Future Toppers Since 2014</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
