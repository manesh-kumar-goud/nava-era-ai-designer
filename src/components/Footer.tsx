import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Mail, Video } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max">
        {/* Main Footer */}
        <div className="section-padding border-b border-primary-foreground/10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="font-display text-2xl tracking-tight mb-4">NAVA ERA</h3>
              <p className="text-body text-primary-foreground/80 mb-6 max-w-md">
                A new era in fashion defined by bold self-expression, 
                conscious creation, and digital-native aesthetics.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                  <Video className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Shop */}
            <div>
              <h4 className="font-display text-lg mb-4">Shop</h4>
              <div className="space-y-3">
                <Button variant="ghost" size="minimal" className="justify-start p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
                  New Arrivals
                </Button>
                <Button variant="ghost" size="minimal" className="justify-start p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
                  Essentials
                </Button>
                <Button variant="ghost" size="minimal" className="justify-start p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
                  Outerwear
                </Button>
                <Button variant="ghost" size="minimal" className="justify-start p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
                  Sale
                </Button>
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-display text-lg mb-4">Company</h4>
              <div className="space-y-3">
                <Button variant="ghost" size="minimal" className="justify-start p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
                  Our Story
                </Button>
                <Button variant="ghost" size="minimal" className="justify-start p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
                  Sustainability
                </Button>
                <Button variant="ghost" size="minimal" className="justify-start p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
                  Size Guide
                </Button>
                <Button variant="ghost" size="minimal" className="justify-start p-0 h-auto text-primary-foreground/80 hover:text-primary-foreground">
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-caption text-primary-foreground/60">
              © 2024 NAVA ERA. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Button variant="ghost" size="minimal" className="p-0 h-auto text-caption text-primary-foreground/60 hover:text-primary-foreground">
                Privacy Policy
              </Button>
              <Button variant="ghost" size="minimal" className="p-0 h-auto text-caption text-primary-foreground/60 hover:text-primary-foreground">
                Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;