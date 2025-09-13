import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import lookbook1 from "@/assets/lookbook-1.jpg";

const LookbookPreview = () => {
  const lookbookImages = [
    {
      id: 1,
      title: "Urban Minimalism",
      subtitle: "Fall/Winter 2024",
      image: lookbook1,
    },
    {
      id: 2,
      title: "Street Editorial",
      subtitle: "Campaign",
      image: lookbook1,
    },
    {
      id: 3,
      title: "Behind The Lens",
      subtitle: "Process",
      image: lookbook1,
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-headline mb-4">The Journal</h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Editorial stories, behind-the-scenes content, and style inspiration 
            from the NAVA ERA community
          </p>
        </div>

        {/* Horizontal Scroll Gallery */}
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 w-max">
            {lookbookImages.map((item, index) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-80 group cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[3/4] rounded-sm overflow-hidden mb-4 hover-lift">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-caption uppercase tracking-wide text-muted-foreground">
                    {item.subtitle}
                  </p>
                  <h3 className="text-subhead">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button variant="editorial" size="lg" className="group">
            Explore The Journal
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LookbookPreview;