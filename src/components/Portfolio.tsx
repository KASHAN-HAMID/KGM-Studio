import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

// Import portfolio images (renamed)
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import img8 from "@/assets/8.jpg";
import img9 from "@/assets/9.jpg";
import img10 from "@/assets/10.jpg";
import img11 from "@/assets/11.jpg";
import img12 from "@/assets/12.jpg";
import img13 from "@/assets/13.jpg";
import img14 from "@/assets/14.jpg";

const portfolioData = {
  banners: [
    { id: 1, title: "Dynamic Action Banner", description: "Vibrant anime character in action pose", image: img1 },
    { id: 2, title: "Furry Character Art", description: "Cute anthropomorphic fox character design", image: img2 },
    { id: 3, title: "Magical Girl Banner", description: "Fantasy magical girl with flowing effects", image: img3 },
    { id: 4, title: "Hero Character Banner", description: "Bold action-packed character illustration", image: img4 },
  ],
  models: [
    { id: 5, title: "Character Reference Sheet", description: "Full turnaround anime character design", image: img5 },
    { id: 6, title: "Wolf Character Model", description: "Detailed furry character reference", image: img6 },
    { id: 7, title: "Chibi Style Sheet", description: "Multiple expression chibi character", image: img7 },
    { id: 8, title: "Fantasy Character Sheet", description: "Detailed character with accessories", image: img8 },
  ],
  pfps: [
    { id: 9, title: "Anime Portrait", description: "Cute anime character profile picture", image: img9 },
    { id: 10, title: "Furry Cat Avatar", description: "Expressive anthropomorphic cat portrait", image: img10 },
    { id: 11, title: "Magical Portrait", description: "Mystical character with glowing effects", image: img11 },
    { id: 12, title: "Dynamic Profile Art", description: "Bold character portrait design", image: img12 },
  ],
  references: [
    { id: 13, title: "Character Reference Sheet", description: "Clean and detailed anime character turnaround", image: img13 },
    { id: 14, title: "Furry Reference Sheet", description: "Comprehensive furry character documentation", image: img14 },
  ],
};

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const PortfolioGrid = ({ items }: { items: typeof portfolioData.banners }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <Card
          key={item.id}
          className="group overflow-hidden bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 cursor-pointer animate-scale-in"
          style={{ animationDelay: `${index * 100}ms` }}
          onClick={() => setSelectedImage(item.image)}
        >
          <div className="relative overflow-hidden aspect-video flex items-center justify-center bg-background/40">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover md:object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <section id="portfolio" className="py-24 px-4 relative">
      <div className="absolute inset-0 opacity-20" style={{ background: 'var(--gradient-radial)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary via-secondary to-primary" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Explore my collection of anime and furry character designs, showcasing diverse styles and creative concepts.
          </p>
        </div>

        <Tabs defaultValue="banners" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 bg-card/50 backdrop-blur">
            <TabsTrigger value="banners">Banner Art</TabsTrigger>
            <TabsTrigger value="models">2D Models</TabsTrigger>
            <TabsTrigger value="pfps">PFP Art</TabsTrigger>
            <TabsTrigger value="references">Reference Sheets</TabsTrigger>
          </TabsList>

          <TabsContent value="banners" className="mt-8">
            <PortfolioGrid items={portfolioData.banners} />
          </TabsContent>

          <TabsContent value="models" className="mt-8">
            <PortfolioGrid items={portfolioData.models} />
          </TabsContent>

          <TabsContent value="pfps" className="mt-8">
            <PortfolioGrid items={portfolioData.pfps} />
          </TabsContent>

          <TabsContent value="references" className="mt-8">
            <PortfolioGrid items={portfolioData.references} />
          </TabsContent>
        </Tabs>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl border-primary/50 bg-background/95 backdrop-blur">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Portfolio item"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
