import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface Garment {
  id: string;
  name: string;
  type: 'top' | 'bottom';
  basePrice: number;
  image: string;
}

interface Modification {
  length: 'cropped' | 'standard' | 'oversized';
  sleeves: 'sleeveless' | 'short' | 'long';
  fit: 'slim' | 'regular' | 'boxy';
}

interface Fabric {
  id: string;
  name: string;
  color: string;
  texture: string;
  priceMultiplier: number;
}

const baseGarments: Garment[] = [
  { id: 'hoodie', name: 'Essential Hoodie', type: 'top', basePrice: 89, image: '/src/assets/product-1.jpg' },
  { id: 'tee', name: 'Core Tee', type: 'top', basePrice: 45, image: '/src/assets/product-1.jpg' },
  { id: 'trousers', name: 'Wide Leg Trousers', type: 'bottom', basePrice: 120, image: '/src/assets/product-1.jpg' },
];

const fabrics: Fabric[] = [
  { id: 'cotton', name: 'Organic Cotton', color: '#F5F5F5', texture: 'Cotton', priceMultiplier: 1.0 },
  { id: 'denim', name: 'Vintage Denim', color: '#4A5568', texture: 'Denim', priceMultiplier: 1.3 },
  { id: 'linen', name: 'European Linen', color: '#E2E8F0', texture: 'Linen', priceMultiplier: 1.5 },
  { id: 'corduroy', name: 'Soft Corduroy', color: '#8B4513', texture: 'Corduroy', priceMultiplier: 1.4 },
];

const CoCreator = () => {
  const navigate = useNavigate();
  const [selectedGarment, setSelectedGarment] = useState<Garment | null>(null);
  const [selectedFabric, setSelectedFabric] = useState<Fabric>(fabrics[0]);
  const [modifications, setModifications] = useState<Modification>({
    length: 'standard',
    sleeves: 'long',
    fit: 'regular'
  });

  const calculatePrice = () => {
    if (!selectedGarment) return 0;
    const modifierPrice = modifications.length === 'oversized' ? 15 : 0;
    return Math.round((selectedGarment.basePrice + modifierPrice) * selectedFabric.priceMultiplier);
  };

  const handleShare = () => {
    toast("Design shared to your feed! #NAVAERA");
  };

  const handleAddToBag = () => {
    toast("Custom piece added to bag!");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container-max">
          <div className="flex items-center justify-between h-16">
            <Button variant="ghost" onClick={() => navigate("/")} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to NAVA ERA
            </Button>
            <h1 className="font-display text-xl tracking-tight">CO-CREATOR STUDIO</h1>
            <div className="w-24" />
          </div>
        </div>
      </header>

      <div className="container-max py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Garment Selection Sidebar */}
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-lg mb-4">Select Base Garment</h2>
              <div className="space-y-3">
                {baseGarments.map((garment) => (
                  <button
                    key={garment.id}
                    onClick={() => setSelectedGarment(garment)}
                    className={`w-full p-4 rounded-sm border text-left transition-all duration-200 ${
                      selectedGarment?.id === garment.id
                        ? 'border-accent bg-accent/10'
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <div className="font-medium">{garment.name}</div>
                    <div className="text-sm text-muted-foreground">${garment.basePrice}</div>
                  </button>
                ))}
              </div>
            </div>

            {selectedGarment && (
              <>
                {/* Modification Tools */}
                <div>
                  <h3 className="font-display text-lg mb-4">Customize Fit</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Length</label>
                      <div className="flex gap-2">
                        {(['cropped', 'standard', 'oversized'] as const).map((option) => (
                          <Button
                            key={option}
                            variant={modifications.length === option ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setModifications(prev => ({ ...prev, length: option }))}
                            className="capitalize flex-1"
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    </div>

                    {selectedGarment.type === 'top' && (
                      <div>
                        <label className="text-sm font-medium mb-2 block">Sleeves</label>
                        <div className="flex gap-2">
                          {(['sleeveless', 'short', 'long'] as const).map((option) => (
                            <Button
                              key={option}
                              variant={modifications.sleeves === option ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => setModifications(prev => ({ ...prev, sleeves: option }))}
                              className="capitalize flex-1"
                            >
                              {option}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="text-sm font-medium mb-2 block">Fit</label>
                      <div className="flex gap-2">
                        {(['slim', 'regular', 'boxy'] as const).map((option) => (
                          <Button
                            key={option}
                            variant={modifications.fit === option ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => setModifications(prev => ({ ...prev, fit: option }))}
                            className="capitalize flex-1"
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fabric Selection */}
                <div>
                  <h3 className="font-display text-lg mb-4">Choose Fabric</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {fabrics.map((fabric) => (
                      <button
                        key={fabric.id}
                        onClick={() => setSelectedFabric(fabric)}
                        className={`p-3 rounded-sm border text-left transition-all duration-200 ${
                          selectedFabric.id === fabric.id
                            ? 'border-accent bg-accent/10'
                            : 'border-border hover:border-accent/50'
                        }`}
                      >
                        <div 
                          className="w-full h-8 rounded mb-2"
                          style={{ backgroundColor: fabric.color }}
                        />
                        <div className="text-sm font-medium">{fabric.name}</div>
                        <div className="text-xs text-muted-foreground">{fabric.texture}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Canvas Area */}
          <div className="lg:col-span-2">
            <div className="bg-muted/20 rounded-sm min-h-[600px] flex items-center justify-center relative overflow-hidden">
              {selectedGarment ? (
                <div className="text-center space-y-6 animate-fade-in">
                  {/* Avatar/Garment Visualization */}
                  <div className="relative">
                    <div className="w-64 h-80 bg-gradient-to-b from-muted/40 to-muted/60 rounded-sm mx-auto relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div 
                          className="w-48 h-64 rounded-sm transition-all duration-500"
                          style={{ 
                            backgroundColor: selectedFabric.color,
                            filter: 'brightness(0.9)'
                          }}
                        />
                      </div>
                      
                      {/* Garment Details Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-sm">
                        <div className="text-sm font-medium">{selectedGarment.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {modifications.length} • {modifications.fit} fit
                          {selectedGarment.type === 'top' && ` • ${modifications.sleeves} sleeves`}
                        </div>
                        <div className="text-xs text-muted-foreground">{selectedFabric.name}</div>
                      </div>
                    </div>
                  </div>

                  {/* Price & Actions */}
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-display">${calculatePrice()}</div>
                      <div className="text-sm text-muted-foreground">Custom Price</div>
                    </div>
                    
                    <div className="flex gap-3 justify-center">
                      <Button variant="outline" onClick={handleShare} className="flex items-center gap-2">
                        <Share2 className="h-4 w-4" />
                        Share Design
                      </Button>
                      <Button onClick={handleAddToBag} className="flex items-center gap-2">
                        <ShoppingBag className="h-4 w-4" />
                        Add to Bag
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <div className="text-muted-foreground text-lg">Select a base garment to start creating</div>
                  <div className="text-sm text-muted-foreground">Choose from our essential pieces and make it uniquely yours</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoCreator;