import { Paintbrush, FileImage, MessageSquare, ImageIcon, FolderOpen, PenTool } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Paintbrush,
    title: "Character Design",
    description: "Unique anime & furry characters, vector-based and custom art tailored to your vision.",
  },
  {
    icon: FileImage,
    title: "Reference Sheets",
    description: "Full-body turnarounds with detailed features for comprehensive character documentation.",
  },
  {
    icon: MessageSquare,
    title: "Commissions",
    description: "Custom art tailored to your ideas and requests, bringing your concepts to life.",
  },
  {
    icon: ImageIcon,
    title: "Illustrations",
    description: "Cute, fantasy, and creative artwork for personal or professional use.",
  },
  {
    icon: FolderOpen,
    title: "Portfolio Showcase",
    description: "A collection of best works and past client projects demonstrating diverse styles.",
  },
  {
    icon: PenTool,
    title: "Vector Tracing",
    description: "Clean and precise vector recreations of logos, sketches, and artwork — perfect for print or digital use.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="absolute inset-0 opacity-30" style={{ background: 'var(--gradient-radial)' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            What I Do
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-secondary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
