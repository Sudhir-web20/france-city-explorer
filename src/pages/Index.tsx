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
      
      <div 
        className="min-h-screen flex flex-col"
        style={{
          background: 'linear-gradient(90deg, #5B8DEF 0%, #8BB0F4 25%, #FFFFFF 50%, #F4A0A0 75%, #EF5B5B 100%)'
        }}
      >
        <Header />
        
        <main className="flex-1 relative">
          <div className="h-screen w-full">
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
