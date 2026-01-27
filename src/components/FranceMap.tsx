import { useEffect, useRef, useState, useCallback } from "react";
import { geoPath, geoMercator } from "d3-geo";
import { DEPARTMENT_TO_CITY, getCityInfo, CityInfo } from "@/data/cityData";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, RotateCcw, Move } from "lucide-react";

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
  
  // Zoom and pan state
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });

  const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 4;
  const ZOOM_STEP = 0.3;

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
    
    if (isPanning) {
      const dx = e.clientX - panStart.x;
      const dy = e.clientY - panStart.y;
      setPan(prev => ({ x: prev.x + dx, y: prev.y + dy }));
      setPanStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0) {
      setIsPanning(true);
      setPanStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  const handleMouseLeave = () => {
    setIsPanning(false);
    setHoveredDepartment(null);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
    setZoom(prev => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, prev + delta)));
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(MAX_ZOOM, prev + ZOOM_STEP));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(MIN_ZOOM, prev - ZOOM_STEP));
  };

  const handleReset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
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
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onWheel={handleWheel}
      style={{ cursor: isPanning ? 'grabbing' : 'grab' }}
    >
      {/* Zoom Controls */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={handleZoomIn}
          className="bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm"
          title="Zoom in"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={handleZoomOut}
          className="bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm"
          title="Zoom out"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={handleReset}
          className="bg-white/90 hover:bg-white shadow-lg backdrop-blur-sm"
          title="Reset view"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>

      {/* Zoom indicator */}
      <div className="absolute left-4 bottom-4 z-30 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-sm font-medium text-foreground">
        {Math.round(zoom * 100)}%
      </div>

      {/* Minimap */}
      <div className="absolute right-4 bottom-4 z-30 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/50 overflow-hidden">
        <div className="px-2 py-1 border-b border-border/30 text-xs font-medium text-muted-foreground">
          Overview
        </div>
        <svg
          width={120}
          height={90}
          className="block"
          viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        >
          {/* Mini map paths */}
          <g>
            {geoData.features.map((feature, index) => {
              const path = pathGenerator(feature as any);
              return (
                <path
                  key={`mini-${feature.properties.code}-${index}`}
                  d={path || ""}
                  fill="rgba(100, 116, 139, 0.3)"
                  stroke="rgba(100, 116, 139, 0.5)"
                  strokeWidth={1}
                />
              );
            })}
          </g>
          {/* Viewport indicator */}
          <rect
            x={dimensions.width / 2 - (dimensions.width / 2) / zoom - pan.x / zoom}
            y={dimensions.height / 2 - (dimensions.height / 2) / zoom - pan.y / zoom}
            width={dimensions.width / zoom}
            height={dimensions.height / zoom}
            fill="rgba(59, 130, 246, 0.2)"
            stroke="rgba(59, 130, 246, 0.8)"
            strokeWidth={2}
            rx={2}
          />
        </svg>
      </div>

      <svg
        width={dimensions.width}
        height={dimensions.height}
        className="block"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      >
        <g 
          transform={`translate(${pan.x + dimensions.width / 2}, ${pan.y + dimensions.height / 2}) scale(${zoom}) translate(${-dimensions.width / 2}, ${-dimensions.height / 2})`}
        >
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
                    ? "rgba(30, 64, 175, 0.7)"
                    : isHovered
                    ? "rgba(55, 65, 81, 0.6)"
                    : "rgba(31, 41, 55, 0.5)"
                }
                stroke="rgba(255, 255, 255, 1)"
                strokeWidth={(isSelected || isHovered ? 2.5 : 1.5) / zoom}
                onMouseEnter={() => setHoveredDepartment(departmentName)}
                onMouseLeave={() => setHoveredDepartment(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  handleRegionClick(departmentName);
                }}
                style={{ cursor: 'pointer' }}
              />
            );
          })}
        </g>
      </svg>

      {/* Tooltip */}
      {hoveredDepartment && !isPanning && (
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
