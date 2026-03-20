import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BlurReveal from "./BlurReveal";

const standards = ["7th Standard", "8th Standard", "9th Standard", "10th Standard"];

const EnquiryForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", standard: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi, I want to enquire about admissions.\n\nName: ${form.name}\nPhone: ${form.phone}\nClass: ${form.standard}\nMessage: ${form.message || "N/A"}`
    );
    window.open(`https://wa.me/919972235286?text=${text}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  return (
    <section id="enquiry" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <BlurReveal>
          <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3 text-center">Admissions</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-3">Enquire Now</h2>
          <p className="text-muted-foreground text-center text-sm sm:text-base mb-8 sm:mb-12 max-w-md mx-auto">
            Fill the form below and we'll get back to you within 24 hours.
          </p>
        </BlurReveal>

        <div className="max-w-lg mx-auto">
          <BlurReveal delay={0.1}>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-card rounded-2xl shadow-card border border-border p-8 sm:p-10 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground text-sm">Your enquiry has been sent via WhatsApp. We'll reach out soon.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-card rounded-2xl shadow-card border border-border p-6 sm:p-8 space-y-4 sm:space-y-5"
                >
                  <div>
                    <label htmlFor="eq-name" className="block text-sm font-semibold text-foreground mb-1.5">
                      Parent / Student Name *
                    </label>
                    <input
                      id="eq-name"
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Enter full name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="eq-phone" className="block text-sm font-semibold text-foreground mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="eq-phone"
                      type="tel"
                      required
                      maxLength={15}
                      pattern="[0-9]{10,15}"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value.replace(/[^0-9]/g, ""))}
                      placeholder="10-digit mobile number"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="eq-standard" className="block text-sm font-semibold text-foreground mb-1.5">
                      Class / Standard *
                    </label>
                    <select
                      id="eq-standard"
                      required
                      value={form.standard}
                      onChange={(e) => update("standard", e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition appearance-none"
                    >
                      <option value="">Select class</option>
                      {standards.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="eq-message" className="block text-sm font-semibold text-foreground mb-1.5">
                      Message (Optional)
                    </label>
                    <textarea
                      id="eq-message"
                      maxLength={500}
                      rows={3}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Any specific questions?"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-all active:scale-[0.98]"
                  >
                    <Send size={16} />
                    Send Enquiry via WhatsApp
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </BlurReveal>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
