import { Button } from "@/components/ui/button";
import { Instagram, ArrowRight } from "lucide-react";
import lookbook1 from "@/assets/lookbook-1.jpg";

const SocialProof = () => {
  const userPosts = [
    {
      id: 1,
      image: lookbook1,
      username: "@maya_styles",
      caption: "Perfect fit, perfect vibe ✨"
    },
    {
      id: 2,
      image: lookbook1,
      username: "@alex_minimal",
      caption: "Quality you can feel"
    },
    {
      id: 3,
      image: lookbook1,
      username: "@zoe_urban",
      caption: "Finally, fashion that gets it"
    },
    {
      id: 4,
      image: lookbook1,
      username: "@kai_creative",
      caption: "Elevated basics done right"
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-headline mb-4">#NAVAERA</h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            See how our community styles their NAVA ERA pieces. 
            Tag us to be featured.
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {userPosts.map((post, index) => (
            <div
              key={post.id}
              className="group cursor-pointer hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square rounded-sm overflow-hidden mb-3">
                <img
                  src={post.image}
                  alt={`User post by ${post.username}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <p className="text-caption font-display">{post.username}</p>
                <p className="text-sm text-muted-foreground">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="group">
            <Instagram className="mr-2 h-4 w-4" />
            Follow @navaera
          </Button>
          <Button variant="editorial" size="lg" className="group">
            View Community
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;