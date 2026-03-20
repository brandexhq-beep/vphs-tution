import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919972235286?text=Hi,%20I%20want%20to%20enquire%20about%20admissions%20for%20my%20child"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-primary-foreground shadow-elevated hover:scale-105 transition-transform active:scale-95"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} className="animate-float-pulse" />
  </a>
);

export default WhatsAppButton;
