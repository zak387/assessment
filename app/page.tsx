import Container from "@/components/ui/Container";
import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import RevealSection from "@/components/landing/RevealSection";
import LeadCaptureForm from "@/components/landing/LeadCaptureForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Container className="pb-16">
        <Hero />
        <ProblemSection />
        <RevealSection />
        <LeadCaptureForm />
      </Container>
    </main>
  );
}
