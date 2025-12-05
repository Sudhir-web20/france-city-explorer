import { MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 py-4 flex items-center gap-3">
        <div className="flex items-center gap-2 text-primary-foreground">
          <MapPin className="w-6 h-6" />
          <h1 className="font-display text-2xl font-semibold tracking-tight">
            Interactive City Map of France
          </h1>
        </div>
        <p className="hidden sm:block text-primary-foreground/70 text-sm ml-auto">
          Click on any region to discover its capital city
        </p>
      </div>
    </header>
  );
};

export default Header;
