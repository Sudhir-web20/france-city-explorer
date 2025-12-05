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

  // Create projection centered on France
  const getProjection = useCallback(() => {
    if (!geoData) return null;
    
    const projection = geoMercator()
      .center([2.5, 46.5])
      .scale(Math.min(dimensions.width, dimensions.height) * 3.5)
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
      <div className="flex items-center justify-center h-full">
        <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
          <p className="text-destructive font-medium">{error}</p>
        </div>
      </div>
    );
  }

  if (!geoData || !pathGenerator) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/80">Loading map of France...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full overflow-hidden flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      <svg
        width={dimensions.width}
        height={dimensions.height}
        className="block"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      >
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
                    ? "rgba(59, 130, 246, 0.4)"
                    : isHovered
                    ? "rgba(255, 255, 255, 0.5)"
                    : "rgba(255, 255, 255, 0.25)"
                }
                stroke="rgba(255, 255, 255, 0.8)"
                strokeWidth={isSelected || isHovered ? 1.5 : 1}
                onMouseEnter={() => setHoveredDepartment(departmentName)}
                onMouseLeave={() => setHoveredDepartment(null)}
                onClick={() => handleRegionClick(departmentName)}
              />
            );
          })}
        </g>
      </svg>

      {/* Paris marker */}
      <div 
        className="absolute z-20 pointer-events-none"
        style={{
          left: '50%',
          top: '35%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-6 h-6 rounded-full border-2 border-primary bg-white/80 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
        </div>
      </div>

      {/* Tooltip */}
      {hoveredDepartment && (
        <div
          className="fixed pointer-events-none z-50 px-3 py-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/50 animate-fade-in"
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
