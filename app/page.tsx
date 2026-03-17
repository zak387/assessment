import Container from "@/components/ui/Container";
import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import RevealSection from "@/components/landing/RevealSection";
import LeadCaptureForm from "@/components/landing/LeadCaptureForm";
import ExitIntentPopup from "@/components/landing/ExitIntentPopup";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero bleeds full-width — outside Container */}
      <Hero />

      <Container className="pb-16">
        <ProblemSection />
        <RevealSection />
        <LeadCaptureForm />
      </Container>

      {/* Exit-intent popup — shown when user hasn't submitted the form */}
      <ExitIntentPopup />
    </main>
  );
}
