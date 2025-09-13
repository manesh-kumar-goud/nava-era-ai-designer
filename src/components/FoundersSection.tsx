import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import foundersImage from "@/assets/founders-image.jpg";

const FoundersSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-sm overflow-hidden animate-scale-in">
              <img
                src={foundersImage}
                alt="NAVA ERA Founders - Abhinav, Manish, and Priyanka"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 animate-fade-in">
            <h2 className="text-headline mb-6">
              Meet The
              <br />
              <span className="text-accent">Visionaries</span>
            </h2>
            <div className="space-y-6 text-body-large">
              <p>
                NAVA ERA was born from the shared vision of three creators: 
                <span className="font-display"> Abhinav, Manish, and Priyanka</span>. 
                Their unique perspectives on art, design, and culture merge to create 
                something entirely new in fashion.
              </p>
              <p className="text-body text-muted-foreground">
                We're not just building a brand — we're cultivating a movement. 
                A community that values authentic self-expression over conformity, 
                conscious creation over mass production, and meaningful connection 
                over hollow trends.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Our Story
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="editorial" size="lg">
                Behind The Scenes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;