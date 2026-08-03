import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import LMSPreview from "./components/LMSPreview";
import Features from "./components/Features";
import StudentCases from "./components/StudentCases";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-slate-50 text-slate-900">
      <Header />
      <Hero />
      <StatsBar />
      <LMSPreview />
      <Features />
      <StudentCases />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
