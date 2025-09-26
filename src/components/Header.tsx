import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import afterloopLogo from "@/assets/afterloop-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-center">
            <img
              src={afterloopLogo}
              alt="Afterloop"
              className="w-24 h-auto object-contain "
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <a
              href="#waitlist"
              className="text-sm font-medium hover:text-primary transition-colors">
              Join Waitlist
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button variant="gradient" size="sm">
              Join Waitlist
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
