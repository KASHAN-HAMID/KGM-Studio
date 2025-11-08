import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const CommissionsOpen = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: 'var(--gradient-radial)' }} />
      
      {/* Animated gradient border effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent animate-glow" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 animate-scale-in">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full animate-glow">
          <Sparkles className="w-5 h-5 text-primary" />
          <span className="text-primary font-semibold">Available Now</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
          🎨 Commissions Are Open!
        </h2>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Have an idea you'd love to bring to life? I'm currently accepting commissions for custom characters, illustrations, and more.
        </p>

        <Button 
          variant="hero" 
          size="lg"
          onClick={scrollToContact}
          className="group relative overflow-hidden"
        >
          <span className="relative z-10">Request a Commission</span>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center gap-2">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className="w-2 h-2 rounded-full bg-primary/50 animate-glow"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommissionsOpen;
