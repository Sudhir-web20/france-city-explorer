import { X, MapPin, Users, Sparkles } from "lucide-react";
import { CityInfo } from "@/data/cityData";
import { Button } from "@/components/ui/button";

interface InfoPanelProps {
  city: CityInfo | null;
  onClose: () => void;
}

const InfoPanel = ({ city, onClose }: InfoPanelProps) => {
  if (!city) return null;

  return (
    <div className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-card/95 backdrop-blur-md border-l border-border shadow-elevated z-40 overflow-y-auto animate-slide-in-right">
      <div className="p-6 pt-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-20 right-4 text-muted-foreground hover:text-foreground"
        >
          <X className="w-5 h-5" />
        </Button>

        <div className="space-y-6">
          {/* City Name */}
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-1">
              {city.name}
            </h2>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{city.region}</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg">
              <Users className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">{city.population}</span>
            </div>
            <div className="px-3 py-2 bg-secondary rounded-lg">
              <span className="text-sm text-muted-foreground">Department:</span>
              <span className="text-sm font-medium ml-1">{city.department}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
              About
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              {city.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-3 text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              Highlights
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {city.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="px-3 py-2 bg-muted rounded-md text-sm text-foreground border border-border/50"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
