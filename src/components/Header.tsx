import { MapIcon, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md rounded-full px-4 py-2.5 shadow-lg border border-white/50">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
            <MapIcon className="w-5 h-5 text-primary-foreground" />
          </div>
          <h1 className="font-display text-lg font-semibold text-foreground">
            France AI
          </h1>
        </div>
        <div className="hidden sm:flex items-center gap-2 border-l border-border/50 pl-3">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input 
            type="text"
            placeholder="Explore..."
            className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none w-24"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
