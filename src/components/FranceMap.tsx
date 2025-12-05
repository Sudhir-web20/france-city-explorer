import { useEffect, useRef, useState, useCallback } from "react";
import { geoPath, geoMercator } from "d3-geo";
import { DEPARTMENT_TO_CITY, getCityInfo, CityInfo } from "@/data/cityData";

const GEO_URL = "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements.geojson";

interface GeoFeature {
  type: string;
  properties: {
    nom: string;
    code: string;
  };
  geometry: {
    type: string;
    coordinates: number[][][] | number[][][][];
  };
}

interface GeoJSON {
  type: string;
  features: GeoFeature[];
}

interface FranceMapProps {
  onCitySelect: (city: CityInfo | null) => void;
  selectedCity: string | null;
}

const FranceMap = ({ onCitySelect, selectedCity }: FranceMapProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [geoData, setGeoData] = useState<GeoJSON | null>(null);
  const [hoveredDepartment, setHoveredDepartment] = useState<string | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [error, setError] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  // Fetch GeoJSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(GEO_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setGeoData(data);
      } catch (err) {
        setError("Failed to load map data. Please refresh the page.");
        console.error("Error loading map data:", err);
      }
    };
    fetchData();
  }, []);

  // Handle resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height: Math.max(height, 500) });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Create projection centered on France (adjusted to account for Corsica)
  const getProjection = useCallback(() => {
    if (!geoData) return null;
    
    const projection = geoMercator()
      .center([3.0, 46.2]) // Slightly east to account for Corsica
      .scale(Math.min(dimensions.width, dimensions.height) * 3.2)
      .translate([dimensions.width / 2, dimensions.height / 2]);
    
    return projection;
  }, [geoData, dimensions]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  const handleRegionClick = (departmentName: string) => {
    const cityInfo = getCityInfo(departmentName);
    onCitySelect(cityInfo);
  };

  const projection = getProjection();
  const pathGenerator = projection ? geoPath().projection(projection) : null;

  if (error) {
    return (
      <div className="flex items-center justify-center h-full bg-map-ocean">
        <div className="text-center p-8 bg-card rounded-lg shadow-elevated">
          <p className="text-destructive font-medium">{error}</p>
        </div>
      </div>
    );
  }

  if (!geoData || !pathGenerator) {
    return (
      <div className="flex items-center justify-center h-full bg-map-ocean">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading map of France...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full overflow-hidden flex items-center justify-center p-4 md:p-8"
      onMouseMove={handleMouseMove}
    >
      {/* Glassmorphism container */}
      <div className="absolute inset-4 md:inset-8 bg-white/30 backdrop-blur-xl rounded-2xl border border-white/40 shadow-2xl"></div>
      <svg
        width={dimensions.width - 64}
        height={dimensions.height - 64}
        className="relative z-10"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      >
        {/* Ocean background gradient */}
        <defs>
          <radialGradient id="oceanGradient" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="hsl(210, 45%, 94%)" />
            <stop offset="100%" stopColor="hsl(210, 40%, 88%)" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#oceanGradient)" />
        
        <g>
          {geoData.features.map((feature, index) => {
            const departmentName = feature.properties.nom;
            const cityName = DEPARTMENT_TO_CITY[departmentName] || departmentName;
            const isHovered = hoveredDepartment === departmentName;
            const isSelected = selectedCity === cityName;
            const path = pathGenerator(feature as any);

            return (
              <path
                key={`${feature.properties.code}-${index}`}
                d={path || ""}
                className="cursor-pointer map-transition"
                fill={
                  isSelected
                    ? "hsl(var(--map-region-selected))"
                    : isHovered
                    ? "hsl(var(--map-region-hover))"
                    : "hsl(var(--map-region))"
                }
                stroke="hsl(var(--map-border))"
                strokeWidth={isSelected || isHovered ? 2 : 0.5}
                filter={isSelected ? "url(#glow)" : undefined}
                onMouseEnter={() => setHoveredDepartment(departmentName)}
                onMouseLeave={() => setHoveredDepartment(null)}
                onClick={() => handleRegionClick(departmentName)}
              />
            );
          })}
        </g>
      </svg>

      {/* Tooltip */}
      {hoveredDepartment && (
        <div
          className="fixed pointer-events-none z-50 px-3 py-2 bg-card/95 backdrop-blur-sm rounded-lg shadow-elevated border border-border animate-fade-in"
          style={{
            left: tooltipPos.x + 15,
            top: tooltipPos.y - 10,
          }}
        >
          <p className="font-display font-semibold text-foreground">
            {DEPARTMENT_TO_CITY[hoveredDepartment] || hoveredDepartment}
          </p>
          <p className="text-xs text-muted-foreground">{hoveredDepartment}</p>
        </div>
      )}
    </div>
  );
};

export default FranceMap;
