import afterloopLogo from "@/assets/afterloop-logo.png";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 pb-0">
      <div className="container mx-auto px-6 lg:px-8 border-b border-border pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto md:text-center">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a
                  href="#features"
                  className="hover:text-background transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-background transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#waitlist"
                  className="hover:text-background transition-colors">
                  Join Waitlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect with us</h3>
            <ul className="space-y-4 text-background/80">
              <li className="flex justify-start md:justify-center">
                <a href="#" className="hover:text-background transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
              </li>
              <li className="flex justify-start md:justify-center">
                <a href="#" className="hover:text-background transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
              </li>
              <li className="flex justify-start md:justify-center">
                <a href="#" className="hover:text-background transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:py-8">
        <div className="flex items-center justify-center gap-4">
          <img
            src={afterloopLogo}
            alt="Afterloop"
            className="w-24 h-auto object-contain"
          />
          <span className="text-background/80 text-sm">
            © 2025 Afterloop. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
