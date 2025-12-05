import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import FranceMap from "@/components/FranceMap";
import InfoPanel from "@/components/InfoPanel";
import { CityInfo } from "@/data/cityData";

const Index = () => {
  const [selectedCity, setSelectedCity] = useState<CityInfo | null>(null);

  const handleCitySelect = (city: CityInfo | null) => {
    setSelectedCity(city);
  };

  const handleClosePanel = () => {
    setSelectedCity(null);
  };

  return (
    <>
      <Helmet>
        <title>Interactive City Map of France | Explore French Departments</title>
        <meta 
          name="description" 
          content="Explore France through an interactive map. Click on any department to discover its capital city, population, highlights, and cultural heritage." 
        />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 pt-16 relative">
          <div className="h-[calc(100vh-4rem)] w-full">
            <FranceMap 
              onCitySelect={handleCitySelect}
              selectedCity={selectedCity?.name || null}
            />
          </div>
          
          <InfoPanel 
            city={selectedCity} 
            onClose={handleClosePanel}
          />
        </main>
      </div>
    </>
  );
};

export default Index;
