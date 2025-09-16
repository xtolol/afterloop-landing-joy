import { Card } from "@/components/ui/card";
import { MessageSquare, Brain, Plus, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Natural Conversation",
    description: "Your team chats naturally while AI monitors for actionable statements like \"I'll fix the onboarding bug by Friday\"",
    example: "\"I'll review the design mockups by Wednesday and get back to you.\""
  },
  {
    icon: Brain,
    step: "02", 
    title: "AI Detection",
    description: "Advanced AI analyzes context and identifies potential tasks, decisions, or blockers with high confidence",
    example: "AI detects: Task, Assignee: You, Deadline: Wednesday"
  },
  {
    icon: Plus,
    step: "03",
    title: "One-Click Creation",
    description: "A subtle notification appears with pre-filled details. One click transforms the message into an organized task",
    example: "✨ Add Task: \"Review design mockups\" → Click to add"
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Sync & Track",
    description: "Tasks automatically sync to your dashboard where teams can track progress and maintain alignment",
    example: "Dashboard updated → Team visibility → Progress tracking"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 gradient-hero">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            From Chat to Action in{" "}
            <span className="bg-gradient-to-b from-slate-50 to-purple-200 bg-clip-text text-transparent">Seconds</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how Afterloop seamlessly transforms your team conversations into 
            organized, trackable action items without disrupting your workflow.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 bg-background/80 backdrop-blur-sm border-0 shadow-xl group hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-full gradient-primary mb-2">
                    <step.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-bold text-accent">{step.step}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="p-3 bg-secondary/20 rounded-lg border-l-4 border-accent">
                    <p className="text-sm font-medium text-foreground italic">
                      {step.example}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;