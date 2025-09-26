import { Card } from "@/components/ui/card";
import { Bot, Zap, Target, Users, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Real-time AI Detection",
    description: "Advanced AI instantly identifies tasks, decisions, and blockers as they appear in your conversations.",
    highlight: "4.9/5 accuracy rate"
  },
  {
    icon: Zap,
    title: "One-Click Task Creation",
    description: "Transform detected items into actionable tasks with auto-filled titles, assignees, and due dates.",
    highlight: "50% faster workflow"
  },
  {
    icon: Target,
    title: "Smart Auto-Fill",
    description: "AI automatically suggests assignees and deadlines based on conversation context and team patterns.",
    highlight: "90% auto-completion"
  },
  {
    icon: Users,
    title: "Team Alignment Dashboard",
    description: "Keep everyone synchronized with a central view of all tasks and blockers across teams.",
    highlight: "4/5 alignment score"
  },
  {
    icon: Clock,
    title: "Lightweight Integration",
    description: "Seamlessly integrates without slowing down your chat experience or interrupting workflow.",
    highlight: "< 50ms response time"
  },
  {
    icon: Shield,
    title: "Intelligent Filtering",
    description: "Only suggests high-confidence items to reduce noise and maintain conversation flow.",
    highlight: "Zero false positives"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powerful Features for{" "}
            <span className="text-gradient">Modern Teams</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Afterloop combines cutting-edge AI with intuitive design to eliminate missed tasks 
            and improve team coordination without disrupting your natural workflow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 border-0 bg-gradient-to-br from-background to-secondary/10 hover:shadow-lg transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg gradient-primary">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                  {feature.highlight}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;