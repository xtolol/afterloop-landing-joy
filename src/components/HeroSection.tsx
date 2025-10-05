import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/afterloop.jpeg";

const HeroSection = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToHowItWorks = () => {
    const howItWorksSection = document.getElementById("how-it-works");
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-20"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="mt-12 text-center lg:text-left lg:mt-0">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Never Miss a <span className="text-gradient">Task</span> Again
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Afterloop automatically detects tasks, decisions, and blockers in
              your team conversations. Transform scattered work into organized
              action with AI that understands your workflow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                className="group"
                onClick={scrollToWaitlist}>
                Join the Waitlist
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToHowItWorks}>
                See How It Works
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                ✨ Real-time detection
              </div>
              <div className="flex items-center gap-2">
                🎯 One-click task creation
              </div>
              <div className="flex items-center gap-2">
                📊 Team alignment dashboard
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 gradient-primary rounded-3xl blur-3xl opacity-20"></div>
            <img
              src={heroImage}
              alt="Afterloop AI chat interface showing automated task detection"
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
