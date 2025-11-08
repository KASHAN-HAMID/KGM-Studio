const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-card/30 relative">
      <div className="max-w-4xl mx-auto animate-fade-in-up">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            My Creative Journey
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-secondary to-primary" />
        </div>

        <div className="prose prose-invert prose-lg mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed mb-6">
            I've always been passionate about art and design, with a special focus on anime-inspired and furry characters. 
            Over the years, I've refined my skills in hand-drawn digital art and vector design, transforming my passion 
            into a professional career.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At KGM Studio, I bring unique ideas to life, combining creativity, precision, and attention to detail in every 
            project — whether it's a custom commission for a client or a full portfolio of my work.
          </p>
          <p className="text-foreground font-semibold text-xl leading-relaxed">
            For me, art isn't just what I do — it's who I am, and every character I create tells a story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
