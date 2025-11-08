const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-card/20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} KGM Studio. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Crafted with passion and creativity by Konain Ghulam Muhammad
        </p>
      </div>
    </footer>
  );
};

export default Footer;
