import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Mail, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Facebook, label: "Facebook", url: "https://facebook.com/konain.ghulam.muhammad", color: "hover:text-[#1877F2]" },
    { icon: Instagram, label: "Instagram", url: "https://instagram.com/konain_ghulam", color: "hover:text-[#E4405F]" },
    { icon: Globe, label: "Behance", url: "https://behance.net/konain_ghulam", color: "hover:text-[#1769FF]" },
    { icon: Mail, label: "Email", url: "mailto:konainghulam44@gmail.com", color: "hover:text-primary" },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-card/30 relative">
      <div className="absolute inset-0 opacity-20" style={{ background: 'var(--gradient-radial)' }} />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-secondary via-primary to-secondary" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur border-border animate-scale-in">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Social Links */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 p-4 bg-card/50 backdrop-blur border border-border rounded-lg transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-card)] ${social.color}`}
                  >
                    <social.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <Card className="bg-card/50 backdrop-blur border-border">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-2">Direct Email</h4>
                <p className="text-muted-foreground mb-4">
                  Prefer email? Reach out directly at:
                </p>
                <a 
                  href="mailto:konainghulam44@gmail.com"
                  className="text-primary hover:text-primary/80 transition-colors font-medium break-all"
                >
                  konainghulam44@gmail.com
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
