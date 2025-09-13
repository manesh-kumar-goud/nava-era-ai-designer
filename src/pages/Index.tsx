import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import FoundersSection from "@/components/FoundersSection";
import LookbookPreview from "@/components/LookbookPreview";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <FoundersSection />
        <LookbookPreview />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
