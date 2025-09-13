import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => navigate("/")}
            className="font-display text-xl tracking-tight hover:text-accent transition-colors"
          >
            NAVA ERA
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="editorial" size="minimal">
              The Collection
            </Button>
            <Button variant="editorial" size="minimal">
              The Journal
            </Button>
            <Button variant="editorial" size="minimal">
              The Vision
            </Button>
            <Button 
              variant="editorial" 
              size="minimal"
              onClick={() => navigate("/co-creator")}
            >
              Co-Creator
            </Button>
            <Button variant="editorial" size="minimal">
              #NAVAERA
            </Button>
          </div>

          {/* Cart & Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="flex flex-col space-y-4 py-6">
              <Button variant="editorial" size="minimal" className="justify-start">
                The Collection
              </Button>
              <Button variant="editorial" size="minimal" className="justify-start">
                The Journal
              </Button>
              <Button variant="editorial" size="minimal" className="justify-start">
                The Vision
              </Button>
              <Button 
                variant="editorial" 
                size="minimal" 
                className="justify-start"
                onClick={() => navigate("/co-creator")}
              >
                Co-Creator
              </Button>
              <Button variant="editorial" size="minimal" className="justify-start">
                #NAVAERA
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;