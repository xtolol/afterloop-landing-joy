import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Users, Sparkles } from "lucide-react";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully joined waitlist!",
        description: "We'll notify you when Afterloop is ready for early access.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-5"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-accent">Early Access</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Be First to Experience{" "}
            <span className="text-gradient">Afterloop</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join hundreds of forward-thinking teams waiting to revolutionize their communication workflow. 
            Get early access and help shape the future of AI-powered team coordination.
          </p>
          
          <Card className="p-8 max-w-lg mx-auto border-0 gradient-hero shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-background/80 border-0 shadow-sm"
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                variant="waitlist" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Joining..." : "Join the Waitlist"}
              </Button>
            </form>
            
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-background">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>500+ on waitlist</span>
              </div>
              <div className="flex items-center gap-2">
                ⚡ Early access perks
              </div>
            </div>
          </Card>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">50%</div>
              <div className="text-sm text-muted-foreground">Faster task creation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">4/5</div>
              <div className="text-sm text-muted-foreground">Team alignment score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary mb-2">0</div>
              <div className="text-sm text-muted-foreground">Missed action items</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;