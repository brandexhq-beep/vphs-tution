import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ResultsSection from "@/components/ResultsSection";
import AdmissionsBanner from "@/components/AdmissionsBanner";
import FacultySection from "@/components/FacultySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EnquiryForm from "@/components/EnquiryForm";
import BatchTimings from "@/components/BatchTimings";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <StatsSection />
    <WhyChooseUs />
    <CoursesSection />
    <ResultsSection />
    <AdmissionsBanner />
    <FacultySection />
    <TestimonialsSection />
    <EnquiryForm />
    <BatchTimings />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
