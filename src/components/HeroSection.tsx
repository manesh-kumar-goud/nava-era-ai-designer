import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="NAVA ERA - Define Your Era"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white animate-fade-in">
        <h1 className="text-hero mb-6 leading-none">
          Define Your
          <br />
          <span className="text-accent">Era</span>
        </h1>
        <p className="text-body-large mb-8 max-w-2xl mx-auto px-4">
          A new era in fashion defined by bold self-expression, conscious creation, 
          and digital-native aesthetics. We don't just sell clothes — we build community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <Button variant="hero" size="xl" className="group">
            Shop The Latest Drop
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="minimal" size="xl" className="border-white text-white hover:bg-white hover:text-black">
            Discover Our Story
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-float">
        <div className="w-px h-12 bg-white/50 mx-auto mb-2" />
        <p className="text-caption">Scroll</p>
      </div>
    </section>
  );
};

export default HeroSection;