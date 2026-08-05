import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import LMSPreview from "./components/LMSPreview";
import Features from "./components/Features";
import StudentCases from "./components/StudentCases";
import OlympiadCountdown from "./components/OlympiadCountdown";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-[#f1f2f4] text-[#1d1d1d]">
      <Header />
      <Hero />
      <StatsBar />
      <LMSPreview />
      <Features />
      <StudentCases />
      <OlympiadCountdown />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
