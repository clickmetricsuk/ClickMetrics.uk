import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { DisqualificationSection } from '../components/DisqualificationSection';
import { ProblemSection } from '../components/ProblemSection';
import { MechanismSection } from '../components/MechanismSection';
import { ApplicationForm } from '../components/ApplicationForm';
import { FAQSection } from '../components/FAQSection';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="bg-jet-950">
      <Header />
      <HeroSection />
      <DisqualificationSection />
      <ProblemSection />
      <MechanismSection />
      <ApplicationForm />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
