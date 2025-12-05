export interface CityInfo {
  name: string;
  department: string;
  population: string;
  description: string;
  highlights: string[];
  region: string;
}

export const DEPARTMENT_TO_CITY: Record<string, string> = {
  "Ain": "Bourg-en-Bresse",
  "Aisne": "Laon",
  "Allier": "Moulins",
  "Alpes-de-Haute-Provence": "Digne-les-Bains",
  "Hautes-Alpes": "Gap",
  "Alpes-Maritimes": "Nice",
  "Ardèche": "Privas",
  "Ardennes": "Charleville-Mézières",
  "Ariège": "Foix",
  "Aube": "Troyes",
  "Aude": "Carcassonne",
  "Aveyron": "Rodez",
  "Bouches-du-Rhône": "Marseille",
  "Calvados": "Caen",
  "Cantal": "Aurillac",
  "Charente": "Angoulême",
  "Charente-Maritime": "La Rochelle",
  "Cher": "Bourges",
  "Corrèze": "Tulle",
  "Corse-du-Sud": "Ajaccio",
  "Haute-Corse": "Bastia",
  "Côte-d'Or": "Dijon",
  "Côtes-d'Armor": "Saint-Brieuc",
  "Creuse": "Guéret",
  "Dordogne": "Périgueux",
  "Doubs": "Besançon",
  "Drôme": "Valence",
  "Eure": "Évreux",
  "Eure-et-Loir": "Chartres",
  "Finistère": "Quimper",
  "Gard": "Nîmes",
  "Haute-Garonne": "Toulouse",
  "Gers": "Auch",
  "Gironde": "Bordeaux",
  "Hérault": "Montpellier",
  "Ille-et-Vilaine": "Rennes",
  "Indre": "Châteauroux",
  "Indre-et-Loire": "Tours",
  "Isère": "Grenoble",
  "Jura": "Lons-le-Saunier",
  "Landes": "Mont-de-Marsan",
  "Loir-et-Cher": "Blois",
  "Loire": "Saint-Étienne",
  "Haute-Loire": "Le Puy-en-Velay",
  "Loire-Atlantique": "Nantes",
  "Loiret": "Orléans",
  "Lot": "Cahors",
  "Lot-et-Garonne": "Agen",
  "Lozère": "Mende",
  "Maine-et-Loire": "Angers",
  "Manche": "Saint-Lô",
  "Marne": "Châlons-en-Champagne",
  "Haute-Marne": "Chaumont",
  "Mayenne": "Laval",
  "Meurthe-et-Moselle": "Nancy",
  "Meuse": "Bar-le-Duc",
  "Morbihan": "Vannes",
  "Moselle": "Metz",
  "Nièvre": "Nevers",
  "Nord": "Lille",
  "Oise": "Beauvais",
  "Orne": "Alençon",
  "Pas-de-Calais": "Arras",
  "Puy-de-Dôme": "Clermont-Ferrand",
  "Pyrénées-Atlantiques": "Pau",
  "Hautes-Pyrénées": "Tarbes",
  "Pyrénées-Orientales": "Perpignan",
  "Bas-Rhin": "Strasbourg",
  "Haut-Rhin": "Colmar",
  "Rhône": "Lyon",
  "Haute-Saône": "Vesoul",
  "Saône-et-Loire": "Mâcon",
  "Sarthe": "Le Mans",
  "Savoie": "Chambéry",
  "Haute-Savoie": "Annecy",
  "Paris": "Paris",
  "Seine-Maritime": "Rouen",
  "Seine-et-Marne": "Melun",
  "Yvelines": "Versailles",
  "Deux-Sèvres": "Niort",
  "Somme": "Amiens",
  "Tarn": "Albi",
  "Tarn-et-Garonne": "Montauban",
  "Var": "Toulon",
  "Vaucluse": "Avignon",
  "Vendée": "La Roche-sur-Yon",
  "Vienne": "Poitiers",
  "Haute-Vienne": "Limoges",
  "Vosges": "Épinal",
  "Yonne": "Auxerre",
  "Territoire de Belfort": "Belfort",
  "Essonne": "Évry",
  "Hauts-de-Seine": "Nanterre",
  "Seine-Saint-Denis": "Bobigny",
  "Val-de-Marne": "Créteil",
  "Val-d'Oise": "Cergy",
};

export const CITY_INFO: Record<string, CityInfo> = {
  "Paris": {
    name: "Paris",
    department: "Paris",
    population: "2.1 million",
    region: "Île-de-France",
    description: "The capital and largest city of France, Paris is renowned worldwide as a center of art, fashion, gastronomy, and culture. The City of Light has been a major European city and a center of finance, diplomacy, commerce, culture, science, and the arts for centuries.",
    highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Champs-Élysées"]
  },
  "Marseille": {
    name: "Marseille",
    department: "Bouches-du-Rhône",
    population: "870,000",
    region: "Provence-Alpes-Côte d'Azur",
    description: "France's oldest city and largest port on the Mediterranean coast. Marseille is known for its diverse culture, vibrant arts scene, and the stunning Calanques National Park featuring dramatic limestone cliffs and turquoise waters.",
    highlights: ["Vieux-Port", "Basilique Notre-Dame de la Garde", "Calanques National Park", "MuCEM"]
  },
  "Lyon": {
    name: "Lyon",
    department: "Rhône",
    population: "520,000",
    region: "Auvergne-Rhône-Alpes",
    description: "France's gastronomic capital and a UNESCO World Heritage Site, Lyon boasts over 2,000 years of history. The city is famous for its Renaissance architecture, silk industry heritage, and exceptional culinary traditions.",
    highlights: ["Vieux Lyon", "Basilica of Notre-Dame de Fourvière", "Traboules passages", "Presqu'île"]
  },
  "Toulouse": {
    name: "Toulouse",
    department: "Haute-Garonne",
    population: "490,000",
    region: "Occitanie",
    description: "Known as 'La Ville Rose' for its distinctive pink terracotta buildings, Toulouse is the center of Europe's aerospace industry. The city combines historic charm with cutting-edge technology and vibrant student life.",
    highlights: ["Capitole de Toulouse", "Cité de l'Espace", "Basilica of Saint-Sernin", "Canal du Midi"]
  },
  "Nice": {
    name: "Nice",
    department: "Alpes-Maritimes",
    population: "340,000",
    region: "Provence-Alpes-Côte d'Azur",
    description: "The jewel of the French Riviera, Nice enchants visitors with its stunning Mediterranean coastline, Belle Époque architecture, and world-renowned Promenade des Anglais. A perfect blend of French and Italian influences.",
    highlights: ["Promenade des Anglais", "Vieux Nice", "Castle Hill", "Matisse Museum"]
  },
  "Nantes": {
    name: "Nantes",
    department: "Loire-Atlantique",
    population: "320,000",
    region: "Pays de la Loire",
    description: "A vibrant cultural hub at the Loire estuary, Nantes is celebrated for its creative spirit and innovative urban projects. The city blends its rich maritime heritage with modern artistic expression and sustainable development.",
    highlights: ["Les Machines de l'île", "Château des Ducs de Bretagne", "Passage Pommeraye", "Île de Nantes"]
  },
  "Strasbourg": {
    name: "Strasbourg",
    department: "Bas-Rhin",
    population: "290,000",
    region: "Grand Est",
    description: "The official seat of the European Parliament, Strasbourg is a symbol of European unity. Its stunning Grande Île is a UNESCO World Heritage Site, featuring remarkable Gothic architecture and charming Alsatian half-timbered houses.",
    highlights: ["Strasbourg Cathedral", "Petite France", "European Parliament", "Christmas Markets"]
  },
  "Bordeaux": {
    name: "Bordeaux",
    department: "Gironde",
    population: "260,000",
    region: "Nouvelle-Aquitaine",
    description: "The wine capital of the world, Bordeaux is celebrated for its exceptional wines and elegant 18th-century architecture. The entire city center, known as 'Port of the Moon,' is a UNESCO World Heritage Site.",
    highlights: ["Place de la Bourse", "Cité du Vin", "Saint-Émilion vineyards", "Garonne riverfront"]
  },
  "Lille": {
    name: "Lille",
    department: "Nord",
    population: "235,000",
    region: "Hauts-de-France",
    description: "A dynamic cultural crossroads near the Belgian border, Lille combines Flemish heritage with French sophistication. The city is renowned for its art museums, architectural diversity, and legendary braderie festival.",
    highlights: ["Palais des Beaux-Arts", "Vieux Lille", "Grand Place", "La Braderie"]
  },
  "Rennes": {
    name: "Rennes",
    department: "Ille-et-Vilaine",
    population: "220,000",
    region: "Brittany",
    description: "The capital of Brittany, Rennes is a youthful and lively city known for its half-timbered medieval center, vibrant cultural scene, and excellent quality of life. It's one of France's leading tech hubs.",
    highlights: ["Parlement de Bretagne", "Place des Lices", "Parc du Thabor", "Old Town"]
  },
  "Montpellier": {
    name: "Montpellier",
    department: "Hérault",
    population: "295,000",
    region: "Occitanie",
    description: "One of France's fastest-growing cities, Montpellier is a vibrant Mediterranean metropolis known for its medieval center, prestigious university, and innovative modern architecture.",
    highlights: ["Place de la Comédie", "Antigone district", "Fabre Museum", "Promenade du Peyrou"]
  },
  "Grenoble": {
    name: "Grenoble",
    department: "Isère",
    population: "160,000",
    region: "Auvergne-Rhône-Alpes",
    description: "Nestled in the French Alps, Grenoble is known as the 'Capital of the Alps.' It's a major scientific center, winter sports destination, and gateway to some of France's most spectacular mountain scenery.",
    highlights: ["Bastille fortress", "Téléphérique cable car", "Chartreuse mountains", "Musée de Grenoble"]
  },
  "Dijon": {
    name: "Dijon",
    department: "Côte-d'Or",
    population: "160,000",
    region: "Bourgogne-Franche-Comté",
    description: "The historic capital of Burgundy, Dijon is famed for its mustard, exceptional wines, and remarkable medieval and Renaissance architecture. The city center is a UNESCO World Heritage Site.",
    highlights: ["Palais des Ducs", "Burgundy Wine Route", "Notre-Dame de Dijon", "Half-timbered houses"]
  },
  "Angers": {
    name: "Angers",
    department: "Maine-et-Loire",
    population: "155,000",
    region: "Pays de la Loire",
    description: "A city of art and history in the Loire Valley, Angers is home to the magnificent Château d'Angers housing the famous Apocalypse Tapestry. Known for its quality of life and horticultural tradition.",
    highlights: ["Château d'Angers", "Apocalypse Tapestry", "Terra Botanica", "Old Town"]
  },
  "Tours": {
    name: "Tours",
    department: "Indre-et-Loire",
    population: "140,000",
    region: "Centre-Val de Loire",
    description: "Gateway to the Loire Valley châteaux, Tours is renowned for its fine French language, medieval quarter, and proximity to legendary castles. A cultural crossroads since Roman times.",
    highlights: ["Place Plumereau", "Cathedral of Saint-Gatien", "Loire Valley Châteaux", "Old Tours"]
  },
  "Avignon": {
    name: "Avignon",
    department: "Vaucluse",
    population: "92,000",
    region: "Provence-Alpes-Côte d'Azur",
    description: "The 'City of Popes' where seven pontiffs resided during the 14th century. Avignon's magnificent Papal Palace and famous bridge make it a jewel of Provence and UNESCO World Heritage Site.",
    highlights: ["Palais des Papes", "Pont d'Avignon", "Festival d'Avignon", "Ramparts"]
  },
  "Rouen": {
    name: "Rouen",
    department: "Seine-Maritime",
    population: "115,000",
    region: "Normandy",
    description: "The historic capital of Normandy, Rouen is famous for its stunning Gothic cathedral painted by Monet, half-timbered houses, and as the place where Joan of Arc was martyred.",
    highlights: ["Rouen Cathedral", "Gros-Horloge", "Joan of Arc sites", "Old Market Square"]
  },
  "Caen": {
    name: "Caen",
    department: "Calvados",
    population: "108,000",
    region: "Normandy",
    description: "William the Conqueror's city of choice, Caen is rich in Norman heritage and WWII history. The city houses remarkable Romanesque abbeys and the moving Mémorial de Caen peace museum.",
    highlights: ["Château de Caen", "Abbaye aux Hommes", "Mémorial de Caen", "D-Day beaches nearby"]
  },
  "Clermont-Ferrand": {
    name: "Clermont-Ferrand",
    department: "Puy-de-Dôme",
    population: "145,000",
    region: "Auvergne-Rhône-Alpes",
    description: "Built on volcanic peaks in the heart of France, Clermont-Ferrand is home to the striking black stone cathedral and gateway to the Chaîne des Puys volcanoes, a UNESCO World Heritage Site.",
    highlights: ["Cathedral Notre-Dame", "Puy de Dôme", "Place de Jaude", "Volcanic landscapes"]
  },
  "Le Mans": {
    name: "Le Mans",
    department: "Sarthe",
    population: "145,000",
    region: "Pays de la Loire",
    description: "Famous worldwide for its legendary 24-hour motor race, Le Mans also boasts one of France's most remarkable medieval old towns with stunning half-timbered houses and a magnificent cathedral.",
    highlights: ["24 Hours of Le Mans", "Cité Plantagenêt", "Saint-Julien Cathedral", "Roman walls"]
  },
  "Amiens": {
    name: "Amiens",
    department: "Somme",
    population: "135,000",
    region: "Hauts-de-France",
    description: "Home to France's largest Gothic cathedral, a UNESCO masterpiece, Amiens charms visitors with its floating gardens (hortillonnages) and rich Picardy heritage. Birthplace of Jules Verne.",
    highlights: ["Amiens Cathedral", "Hortillonnages", "Saint-Leu quarter", "Jules Verne House"]
  },
  "Metz": {
    name: "Metz",
    department: "Moselle",
    population: "120,000",
    region: "Grand Est",
    description: "One of France's oldest cities, Metz dazzles with its Gothic Saint-Étienne Cathedral featuring the largest expanse of stained glass windows in Europe, including works by Chagall.",
    highlights: ["Saint-Étienne Cathedral", "Centre Pompidou-Metz", "Porte des Allemands", "Temple Neuf"]
  },
  "Besançon": {
    name: "Besançon",
    department: "Doubs",
    population: "120,000",
    region: "Bourgogne-Franche-Comté",
    description: "Nestled in a loop of the Doubs River, Besançon is renowned for its Vauban citadel (UNESCO) and watchmaking heritage. Victor Hugo's birthplace and a city of exceptional quality of life.",
    highlights: ["Citadelle de Besançon", "Astronomical Clock", "Grande Rue", "Time Museum"]
  },
  "Perpignan": {
    name: "Perpignan",
    department: "Pyrénées-Orientales",
    population: "120,000",
    region: "Occitanie",
    description: "The Catalan heart of France, Perpignan blends French and Spanish cultures at the foot of the Pyrenees. Salvador Dalí called its train station 'the center of the universe.'",
    highlights: ["Palace of the Kings of Majorca", "Castillet", "Loge de Mer", "Catalan culture"]
  },
  "Toulon": {
    name: "Toulon",
    department: "Var",
    population: "180,000",
    region: "Provence-Alpes-Côte d'Azur",
    description: "France's principal naval port on the Mediterranean, Toulon combines military heritage with Provençal charm. Surrounded by mountains meeting the sea, it offers stunning natural beauty.",
    highlights: ["Toulon Harbor", "Mont Faron", "Opera House", "Old Town markets"]
  },
  "Nîmes": {
    name: "Nîmes",
    department: "Gard",
    population: "150,000",
    region: "Occitanie",
    description: "Often called 'French Rome,' Nîmes boasts some of the best-preserved Roman monuments in the world, including a magnificent amphitheater still used for events today.",
    highlights: ["Arena of Nîmes", "Maison Carrée", "Jardins de la Fontaine", "Pont du Gard nearby"]
  },
  "Poitiers": {
    name: "Poitiers",
    department: "Vienne",
    population: "90,000",
    region: "Nouvelle-Aquitaine",
    description: "A city steeped in history where Charles Martel halted the Arab advance in 732. Poitiers features exceptional Romanesque architecture and is home to Futuroscope theme park.",
    highlights: ["Notre-Dame la Grande", "Futuroscope", "Baptistère Saint-Jean", "Medieval churches"]
  },
  "Limoges": {
    name: "Limoges",
    department: "Haute-Vienne",
    population: "135,000",
    region: "Nouvelle-Aquitaine",
    description: "World capital of porcelain and enamel arts, Limoges has been crafting fine ceramics for over two centuries. The city also boasts beautiful gardens and Gothic architecture.",
    highlights: ["Porcelain Museum", "Limoges Cathedral", "Enamel workshops", "Botanical gardens"]
  },
  "Annecy": {
    name: "Annecy",
    department: "Haute-Savoie",
    population: "130,000",
    region: "Auvergne-Rhône-Alpes",
    description: "The 'Venice of the Alps,' Annecy enchants visitors with its crystal-clear lake, flower-lined canals, and backdrop of snow-capped mountains. One of France's most picturesque cities.",
    highlights: ["Lake Annecy", "Palais de l'Île", "Old Town canals", "Alpine scenery"]
  },
  "Chambéry": {
    name: "Chambéry",
    department: "Savoie",
    population: "60,000",
    region: "Auvergne-Rhône-Alpes",
    description: "Former capital of the Duchy of Savoy, Chambéry retains its regal character with elegant squares and a castle that once housed the Holy Shroud. Gateway to the Savoie Alps.",
    highlights: ["Château des Ducs de Savoie", "Fountain of Elephants", "Old Town", "Alpine gateway"]
  },
  "Orléans": {
    name: "Orléans",
    department: "Loiret",
    population: "115,000",
    region: "Centre-Val de Loire",
    description: "Forever linked to Joan of Arc who liberated the city in 1429, Orléans celebrates its heroine annually. A Loire Valley gem with Gothic cathedral and Renaissance architecture.",
    highlights: ["Orléans Cathedral", "Joan of Arc celebrations", "Hôtel Groslot", "Loire riverfront"]
  },
  "La Rochelle": {
    name: "La Rochelle",
    department: "Charente-Maritime",
    population: "80,000",
    region: "Nouvelle-Aquitaine",
    description: "A picturesque Atlantic port famous for its medieval towers guarding the harbor, La Rochelle combines maritime heritage with modern environmental initiatives. Gateway to Île de Ré.",
    highlights: ["Old Port towers", "Aquarium", "Île de Ré", "Arcaded streets"]
  },
  "Saint-Étienne": {
    name: "Saint-Étienne",
    department: "Loire",
    population: "175,000",
    region: "Auvergne-Rhône-Alpes",
    description: "Once an industrial powerhouse, Saint-Étienne has reinvented itself as a UNESCO City of Design. The city embraces creativity and innovation while honoring its manufacturing heritage.",
    highlights: ["Cité du Design", "Mining Museum", "Modern Art Museum", "Design district"]
  },
  "Pau": {
    name: "Pau",
    department: "Pyrénées-Atlantiques",
    population: "80,000",
    region: "Nouvelle-Aquitaine",
    description: "Birthplace of King Henri IV, Pau offers spectacular views of the Pyrenees from its famous Boulevard des Pyrénées. A city of royal heritage and gateway to mountain adventures.",
    highlights: ["Château de Pau", "Boulevard des Pyrénées", "Pyrenees panorama", "Béarnais culture"]
  },
  "Carcassonne": {
    name: "Carcassonne",
    department: "Aude",
    population: "50,000",
    region: "Occitanie",
    description: "Home to Europe's largest medieval fortress, Carcassonne's double-walled citadel is a UNESCO World Heritage Site. A fairy-tale vision of towers and ramparts overlooking the Aude valley.",
    highlights: ["La Cité", "Castle ramparts", "Canal du Midi", "Medieval festivals"]
  },
  "Ajaccio": {
    name: "Ajaccio",
    department: "Corse-du-Sud",
    population: "70,000",
    region: "Corsica",
    description: "Napoleon's birthplace on the beautiful island of Corsica, Ajaccio combines French elegance with Mediterranean charm. Stunning beaches and the wild Corsican interior await.",
    highlights: ["Maison Bonaparte", "Fesch Museum", "Sanguinaires Islands", "Corsican cuisine"]
  },
  "Bastia": {
    name: "Bastia",
    department: "Haute-Corse",
    population: "45,000",
    region: "Corsica",
    description: "The economic heart of Corsica, Bastia charms with its colorful old port, Baroque churches, and authentic Corsican atmosphere. Gateway to Cap Corse's dramatic landscapes.",
    highlights: ["Vieux Port", "Terra Vecchia", "Saint-Jean-Baptiste Church", "Cap Corse"]
  },
  "Colmar": {
    name: "Colmar",
    department: "Haut-Rhin",
    population: "70,000",
    region: "Grand Est",
    description: "A living fairy tale, Colmar enchants with perfectly preserved half-timbered houses, flower-decked canals, and the famous Isenheim Altarpiece. The heart of Alsace wine country.",
    highlights: ["Little Venice", "Unterlinden Museum", "Half-timbered houses", "Christmas markets"]
  },
  "Troyes": {
    name: "Troyes",
    department: "Aube",
    population: "60,000",
    region: "Grand Est",
    description: "A treasure of medieval architecture shaped like a champagne cork, Troyes boasts exceptional half-timbered houses, stained glass windows, and outlet shopping. Heart of Champagne country.",
    highlights: ["Cathedral of Saint-Pierre", "Half-timbered houses", "Stained glass trail", "Factory outlets"]
  },
  "Nancy": {
    name: "Nancy",
    department: "Meurthe-et-Moselle",
    population: "105,000",
    region: "Grand Est",
    description: "A UNESCO gem showcasing the finest Art Nouveau architecture in Europe, Nancy dazzles with its golden Place Stanislas, often called France's most beautiful square.",
    highlights: ["Place Stanislas", "Art Nouveau School", "Parc de la Pépinière", "Villa Majorelle"]
  },
  "Bourg-en-Bresse": {
    name: "Bourg-en-Bresse",
    department: "Ain",
    population: "42,000",
    region: "Auvergne-Rhône-Alpes",
    description: "Famous for its exceptional Bresse chicken with AOC designation, and the stunning Brou Royal Monastery, a masterpiece of Flamboyant Gothic architecture.",
    highlights: ["Royal Monastery of Brou", "Bresse chicken", "Old Town", "Revermont hills"]
  },
  "Chartres": {
    name: "Chartres",
    department: "Eure-et-Loir",
    population: "40,000",
    region: "Centre-Val de Loire",
    description: "Home to one of the finest Gothic cathedrals in the world, Chartres' cathedral with its legendary stained glass and labyrinth is a UNESCO masterpiece of medieval art.",
    highlights: ["Chartres Cathedral", "Medieval stained glass", "Chartres en Lumières", "Labyrinth"]
  },
  "Bourges": {
    name: "Bourges",
    department: "Cher",
    population: "68,000",
    region: "Centre-Val de Loire",
    description: "A medieval jewel in the heart of France, Bourges boasts a magnificent Gothic cathedral and the enchanting Palais Jacques-Coeur. Hosts the famous Printemps de Bourges festival.",
    highlights: ["Bourges Cathedral", "Palais Jacques-Coeur", "Marais gardens", "Printemps de Bourges"]
  },
  "Blois": {
    name: "Blois",
    department: "Loir-et-Cher",
    population: "47,000",
    region: "Centre-Val de Loire",
    description: "Royal city of the Loire Valley, Blois' magnificent château showcases four centuries of French architecture. The perfect base for exploring the Loire châteaux.",
    highlights: ["Château de Blois", "Old Town", "Loire Valley châteaux", "Son et Lumière shows"]
  },
  "Valence": {
    name: "Valence",
    department: "Drôme",
    population: "65,000",
    region: "Auvergne-Rhône-Alpes",
    description: "Gateway to Provence, Valence marks where northern France meets the Mediterranean south. A sunny city of Roman heritage and excellent gastronomy along the Rhône.",
    highlights: ["Maison des Têtes", "Saint-Apollinaire Cathedral", "Rhône promenade", "Provençal gateway"]
  },
  "Quimper": {
    name: "Quimper",
    department: "Finistère",
    population: "65,000",
    region: "Brittany",
    description: "The cultural heart of Cornouaille in Brittany, Quimper is famous for its distinctive faience pottery, Gothic cathedral, and strong Breton traditions.",
    highlights: ["Saint-Corentin Cathedral", "Faience pottery", "Old Quimper", "Breton culture"]
  },
  "Vannes": {
    name: "Vannes",
    department: "Morbihan",
    population: "55,000",
    region: "Brittany",
    description: "A perfectly preserved medieval town on the Gulf of Morbihan, Vannes enchants with its ramparts, half-timbered houses, and gateway to the mysterious megalith sites.",
    highlights: ["Medieval ramparts", "Old Town", "Gulf of Morbihan", "Carnac megaliths nearby"]
  },
  "Albi": {
    name: "Albi",
    department: "Tarn",
    population: "52,000",
    region: "Occitanie",
    description: "The 'Red City' with its stunning brick cathedral, a UNESCO World Heritage Site, and birthplace of Toulouse-Lautrec. Albi rises dramatically above the Tarn River.",
    highlights: ["Albi Cathedral", "Toulouse-Lautrec Museum", "Berbie Palace", "Old bridge"]
  },
  "Arras": {
    name: "Arras",
    department: "Pas-de-Calais",
    population: "42,000",
    region: "Hauts-de-France",
    description: "A city of stunning Flemish baroque squares and moving WWI history. Arras' Grand'Place and underground tunnels (boves) tell stories spanning centuries.",
    highlights: ["Grand'Place", "Flemish architecture", "WWI tunnels", "Belfry"]
  },
  "Auxerre": {
    name: "Auxerre",
    department: "Yonne",
    population: "35,000",
    region: "Bourgogne-Franche-Comté",
    description: "A picturesque Burgundian town along the Yonne River, Auxerre offers fine wines, medieval abbeys, and a beautiful old town with half-timbered houses.",
    highlights: ["Saint-Étienne Cathedral", "Abbey of Saint-Germain", "Chablis vineyards", "River walks"]
  },
  "Cahors": {
    name: "Cahors",
    department: "Lot",
    population: "20,000",
    region: "Occitanie",
    description: "Famous for its robust Malbec wines and the stunning Pont Valentré, a fortified medieval bridge, Cahors sits in a dramatic loop of the Lot River.",
    highlights: ["Pont Valentré", "Malbec wines", "Saint-Étienne Cathedral", "Lot Valley"]
  },
  "Périgueux": {
    name: "Périgueux",
    department: "Dordogne",
    population: "30,000",
    region: "Nouvelle-Aquitaine",
    description: "Capital of the Périgord, land of truffles and foie gras. Périgueux blends Roman ruins, medieval streets, and a Byzantine-style cathedral in a gourmet paradise.",
    highlights: ["Saint-Front Cathedral", "Roman Vesunna", "Périgord cuisine", "Truffle markets"]
  },
  "Rodez": {
    name: "Rodez",
    department: "Aveyron",
    population: "25,000",
    region: "Occitanie",
    description: "Dominated by its pink sandstone cathedral with a spectacular bell tower, Rodez is gateway to the Aveyron countryside and home to the Soulages Museum.",
    highlights: ["Rodez Cathedral", "Soulages Museum", "Old Town", "Aveyron landscapes"]
  },
  "Épinal": {
    name: "Épinal",
    department: "Vosges",
    population: "32,000",
    region: "Grand Est",
    description: "Famous for its colorful Images d'Épinal prints, this Vosges city offers forested hills, spa traditions, and gateway to the Ballons des Vosges natural park.",
    highlights: ["Images d'Épinal Museum", "Basilica", "Moselle River", "Vosges mountains"]
  },
  "Mâcon": {
    name: "Mâcon",
    department: "Saône-et-Loire",
    population: "35,000",
    region: "Bourgogne-Franche-Comté",
    description: "A sunny Burgundian town on the Saône River, Mâcon is heart of the white Burgundy wine region and gateway to the picturesque Mâconnais vineyards.",
    highlights: ["Saint-Vincent Cathedral", "Wine route", "Lamartine heritage", "Saône River"]
  },
  "Le Puy-en-Velay": {
    name: "Le Puy-en-Velay",
    department: "Haute-Loire",
    population: "19,000",
    region: "Auvergne-Rhône-Alpes",
    description: "One of France's most spectacular sites, Le Puy features churches perched on volcanic pinnacles. Start of the legendary pilgrimage route to Santiago de Compostela.",
    highlights: ["Notre-Dame Cathedral", "Saint-Michel d'Aiguilhe", "Volcanic peaks", "Pilgrimage route"]
  },
  "Foix": {
    name: "Foix",
    department: "Ariège",
    population: "10,000",
    region: "Occitanie",
    description: "Dominated by its three-towered castle perched dramatically above the town, Foix is gateway to the Pyrenees and the mysterious Cathar country.",
    highlights: ["Château de Foix", "Ariège river", "Pyrenees gateway", "Cathar heritage"]
  },
  "Privas": {
    name: "Privas",
    department: "Ardèche",
    population: "9,000",
    region: "Auvergne-Rhône-Alpes",
    description: "The smallest prefecture in France, Privas is gateway to the stunning Ardèche gorges and famous for its marrons glacés (candied chestnuts).",
    highlights: ["Ardèche gorges", "Marrons glacés", "Mont Gerbier de Jonc", "Cévennes gateway"]
  },
  "Digne-les-Bains": {
    name: "Digne-les-Bains",
    department: "Alpes-de-Haute-Provence",
    population: "17,000",
    region: "Provence-Alpes-Côte d'Azur",
    description: "A spa town in the lavender-scented Haute-Provence, Digne is known for its thermal waters, geological reserve, and as setting for Victor Hugo's Les Misérables.",
    highlights: ["Thermal baths", "Lavender fields", "Geological reserve", "Les Misérables heritage"]
  },
  "Gap": {
    name: "Gap",
    department: "Hautes-Alpes",
    population: "42,000",
    region: "Provence-Alpes-Côte d'Azur",
    description: "France's sunniest city in the Southern Alps, Gap is gateway to exceptional outdoor activities, from skiing to hiking in pristine Alpine landscapes.",
    highlights: ["Southern Alps gateway", "Outdoor sports", "Lake Serre-Ponçon", "Mountain scenery"]
  },
  "Mende": {
    name: "Mende",
    department: "Lozère",
    population: "12,000",
    region: "Occitanie",
    description: "Capital of France's least populated department, Mende offers Gothic heritage and gateway to the wild Gévaudan, Cévennes, and the mythical Beast of Gévaudan territory.",
    highlights: ["Mende Cathedral", "Lot Valley", "Cévennes National Park", "Beast of Gévaudan legend"]
  },
  "Guéret": {
    name: "Guéret",
    department: "Creuse",
    population: "13,000",
    region: "Nouvelle-Aquitaine",
    description: "Heart of the tranquil Creuse countryside, Guéret offers escape to unspoiled nature, tapestry heritage, and the mysterious standing stones of the Limousin.",
    highlights: ["Chabrières forest", "Wolf park", "Limousin heritage", "Rural tranquility"]
  },
  "Nevers": {
    name: "Nevers",
    department: "Nièvre",
    population: "33,000",
    region: "Bourgogne-Franche-Comté",
    description: "Famous for its distinctive faience pottery and the incorrupt body of Saint Bernadette, Nevers sits at the confluence of the Loire and Nièvre rivers.",
    highlights: ["Nevers Cathedral", "Saint Bernadette shrine", "Faience pottery", "Ducal Palace"]
  },
  "Tulle": {
    name: "Tulle",
    department: "Corrèze",
    population: "15,000",
    region: "Nouvelle-Aquitaine",
    description: "Capital of the accordion in France, this Corrèze town gave its name to the delicate tulle fabric. A city of music, craft traditions, and Limousin heritage.",
    highlights: ["Accordion heritage", "Cathedral", "Corrèze valley", "Craft traditions"]
  },
  "Aurillac": {
    name: "Aurillac",
    department: "Cantal",
    population: "26,000",
    region: "Auvergne-Rhône-Alpes",
    description: "Birthplace of Pope Sylvester II, Aurillac is heart of the volcanic Cantal and famous for its international street theatre festival and Cantal cheese.",
    highlights: ["Street theatre festival", "Cantal cheese", "Volcanic landscapes", "Saint-Géraud Abbey"]
  },
  "Auch": {
    name: "Auch",
    department: "Gers",
    population: "22,000",
    region: "Occitanie",
    description: "Historic capital of Gascony and D'Artagnan's homeland, Auch is famous for its magnificent cathedral stalls, Armagnac brandy, and foie gras tradition.",
    highlights: ["Auch Cathedral", "Monumental stairway", "Armagnac", "Gascon heritage"]
  },
  "Agen": {
    name: "Agen",
    department: "Lot-et-Garonne",
    population: "35,000",
    region: "Nouvelle-Aquitaine",
    description: "The prune capital of France, Agen sits between Bordeaux and Toulouse on the Garonne. Home to exceptional Roman mosaics and relaxed Southwest French living.",
    highlights: ["Pruneaux d'Agen", "Pont-Canal", "Fine Arts Museum", "Garonne valley"]
  },
  "Montauban": {
    name: "Montauban",
    department: "Tarn-et-Garonne",
    population: "60,000",
    region: "Occitanie",
    description: "Birthplace of painter Ingres, this pink brick city features one of France's most beautiful squares. A Protestant stronghold with rich artistic heritage.",
    highlights: ["Place Nationale", "Ingres Museum", "Pink brick architecture", "Tarn river"]
  },
  "Tarbes": {
    name: "Tarbes",
    department: "Hautes-Pyrénées",
    population: "42,000",
    region: "Occitanie",
    description: "Gateway to the Pyrenees and Lourdes, Tarbes is known for its Jardin Massey and as birthplace of Marshal Foch. A base for mountain exploration.",
    highlights: ["Jardin Massey", "Haras National", "Pyrenees gateway", "Lourdes proximity"]
  },
  "Laon": {
    name: "Laon",
    department: "Aisne",
    population: "25,000",
    region: "Hauts-de-France",
    description: "Perched on a dramatic hilltop, medieval Laon offers one of France's finest Gothic cathedrals with its famous ox sculptures and exceptional old town.",
    highlights: ["Laon Cathedral", "Hilltop old town", "Ramparts", "Gothic architecture"]
  },
  "Beauvais": {
    name: "Beauvais",
    department: "Oise",
    population: "55,000",
    region: "Hauts-de-France",
    description: "Home to the world's tallest Gothic choir, Beauvais Cathedral's soaring ambition tells the story of medieval architectural daring. Famous for tapestry tradition.",
    highlights: ["Beauvais Cathedral", "Tallest Gothic choir", "Tapestry National Gallery", "Medieval architecture"]
  },
  "Évreux": {
    name: "Évreux",
    department: "Eure",
    population: "50,000",
    region: "Normandy",
    description: "Capital of the Eure in Normandy, Évreux features a beautiful Gothic cathedral with exceptional stained glass and the peaceful Iton river valley.",
    highlights: ["Évreux Cathedral", "Belfry", "Iton valley", "Normandy countryside"]
  },
  "Saint-Lô": {
    name: "Saint-Lô",
    department: "Manche",
    population: "19,000",
    region: "Normandy",
    description: "Known as 'Capital of Ruins' after WWII devastation, Saint-Lô has been rebuilt and serves as gateway to the Normandy bocage and D-Day beaches.",
    highlights: ["Notre-Dame Church", "Haras National", "WWII history", "Normandy bocage"]
  },
  "Alençon": {
    name: "Alençon",
    department: "Orne",
    population: "26,000",
    region: "Normandy",
    description: "Birthplace of Saint Thérèse of Lisieux, Alençon is famous for its exquisite point d'Alençon lace, a UNESCO-recognized craft tradition.",
    highlights: ["Alençon lace", "Notre-Dame Church", "Saint Thérèse sites", "Lace Museum"]
  },
  "Laval": {
    name: "Laval",
    department: "Mayenne",
    population: "52,000",
    region: "Pays de la Loire",
    description: "A medieval town on the Mayenne River, Laval boasts a magnificent château, well-preserved old quarter, and connection to naive artist Henri Rousseau.",
    highlights: ["Vieux Château", "Old Town", "Mayenne River", "Henri Rousseau museum"]
  },
  "La Roche-sur-Yon": {
    name: "La Roche-sur-Yon",
    department: "Vendée",
    population: "55,000",
    region: "Pays de la Loire",
    description: "Napoleon's planned city in the Vendée, built on a pentagon design. Known for its grand Place Napoléon and gateway to Vendée beaches and Puy du Fou.",
    highlights: ["Place Napoléon", "Haras de la Vendée", "Pentagon design", "Puy du Fou nearby"]
  },
  "Niort": {
    name: "Niort",
    department: "Deux-Sèvres",
    population: "60,000",
    region: "Nouvelle-Aquitaine",
    description: "France's insurance capital with a striking medieval donjon. Gateway to the Marais Poitevin, the 'Green Venice' of western France.",
    highlights: ["Medieval donjon", "Marais Poitevin", "Insurance heritage", "Sèvre Niortaise river"]
  },
  "Châteauroux": {
    name: "Châteauroux",
    department: "Indre",
    population: "44,000",
    region: "Centre-Val de Loire",
    description: "Gateway to the Berry region and George Sand country, Châteauroux offers peaceful riverside walks and access to the mysterious Brenne marshlands.",
    highlights: ["Berry heritage", "Couvent des Cordeliers", "Brenne Regional Park", "George Sand country"]
  },
  "Melun": {
    name: "Melun",
    department: "Seine-et-Marne",
    population: "42,000",
    region: "Île-de-France",
    description: "On an island in the Seine south of Paris, Melun offers access to the magnificent Fontainebleau forest and château, a royal residence for centuries.",
    highlights: ["Fontainebleau nearby", "Seine island", "Brie cheese", "Royal forest"]
  },
  "Versailles": {
    name: "Versailles",
    department: "Yvelines",
    population: "87,000",
    region: "Île-de-France",
    description: "Home to the world-famous Palace of Versailles, Louis XIV's monument to absolute monarchy. The palace and gardens are a UNESCO World Heritage Site.",
    highlights: ["Palace of Versailles", "Gardens", "Hall of Mirrors", "Marie Antoinette's Estate"]
  },
  "Évry": {
    name: "Évry-Courcouronnes",
    department: "Essonne",
    population: "70,000",
    region: "Île-de-France",
    description: "A new town south of Paris featuring the striking Cathédrale de la Résurrection, France's only cathedral built in the 20th century.",
    highlights: ["Cathédrale de la Résurrection", "New town architecture", "Génopole", "Modern urban design"]
  },
  "Nanterre": {
    name: "Nanterre",
    department: "Hauts-de-Seine",
    population: "95,000",
    region: "Île-de-France",
    description: "Adjacent to La Défense business district, Nanterre combines cutting-edge architecture with Roman heritage. Home to Paris Nanterre University.",
    highlights: ["La Défense district", "Roman arena", "University town", "Modern architecture"]
  },
  "Bobigny": {
    name: "Bobigny",
    department: "Seine-Saint-Denis",
    population: "55,000",
    region: "Île-de-France",
    description: "Northeast of Paris, Bobigny is known for its diverse multicultural community and the striking contemporary architecture of its courthouse complex.",
    highlights: ["Courthouse architecture", "Multicultural heritage", "Parc de la Bergère", "Urban renewal"]
  },
  "Créteil": {
    name: "Créteil",
    department: "Val-de-Marne",
    population: "95,000",
    region: "Île-de-France",
    description: "A new town southeast of Paris featuring innovative 1970s architecture including the distinctive 'Choux' residential towers around a central lake.",
    highlights: ["Les Choux towers", "Lake Créteil", "1970s architecture", "University town"]
  },
  "Cergy": {
    name: "Cergy",
    department: "Val-d'Oise",
    population: "66,000",
    region: "Île-de-France",
    description: "Heart of the Cergy-Pontoise new town northwest of Paris, known for innovative urban planning, a major university, and the spectacular Axe Majeur.",
    highlights: ["Axe Majeur", "Port Cergy marina", "University town", "Modern urban design"]
  },
  "Charleville-Mézières": {
    name: "Charleville-Mézières",
    department: "Ardennes",
    population: "48,000",
    region: "Grand Est",
    description: "Birthplace of poet Arthur Rimbaud, this Ardennes city features a magnificent ducal square and hosts the world's largest puppet festival.",
    highlights: ["Place Ducale", "Rimbaud Museum", "World Puppet Festival", "Meuse valley"]
  },
  "Chaumont": {
    name: "Chaumont",
    department: "Haute-Marne",
    population: "22,000",
    region: "Grand Est",
    description: "Perched on a rocky spur, Chaumont hosts the famous International Poster Festival. Gateway to the Champagne region's quieter landscapes.",
    highlights: ["Poster Festival", "Viaduct", "Basilica Saint-Jean", "Champagne countryside"]
  },
  "Bar-le-Duc": {
    name: "Bar-le-Duc",
    department: "Meuse",
    population: "15,000",
    region: "Grand Est",
    description: "Known for its unique redcurrant jam and exceptional Renaissance quarter. Bar-le-Duc's upper town is one of France's best-preserved.",
    highlights: ["Renaissance upper town", "Redcurrant jam", "Saint-Étienne Church", "Meuse heritage"]
  },
  "Vesoul": {
    name: "Vesoul",
    department: "Haute-Saône",
    population: "15,000",
    region: "Bourgogne-Franche-Comté",
    description: "Capital of Haute-Saône beneath the Motte hill, Vesoul offers peaceful charm and access to the rolling Franche-Comté countryside.",
    highlights: ["La Motte hill", "Saint-Georges Church", "Georges Garret Museum", "Countryside gateway"]
  },
  "Lons-le-Saunier": {
    name: "Lons-le-Saunier",
    department: "Jura",
    population: "17,000",
    region: "Bourgogne-Franche-Comté",
    description: "Spa town and capital of Jura, birthplace of Rouget de Lisle who composed La Marseillaise. Known for its thermal waters and Comté cheese.",
    highlights: ["Thermal spa", "La Marseillaise heritage", "Jura vineyards", "Comté cheese"]
  },
  "Belfort": {
    name: "Belfort",
    department: "Territoire de Belfort",
    population: "47,000",
    region: "Bourgogne-Franche-Comté",
    description: "Home to Bartholdi's famous Lion sculpture commemorating the city's heroic 1870 siege. Gateway between Alsace, Burgundy, and the Jura.",
    highlights: ["Lion of Belfort", "Citadel", "Eurockéennes festival", "Crossroads location"]
  },
  "Saint-Brieuc": {
    name: "Saint-Brieuc",
    department: "Côtes-d'Armor",
    population: "45,000",
    region: "Brittany",
    description: "Capital of the Côtes-d'Armor on a spectacular bay, Saint-Brieuc offers dramatic coastal scenery, Breton heritage, and excellent seafood.",
    highlights: ["Saint-Brieuc Bay", "Cathedral", "Coastal walks", "Breton culture"]
  },
  "Mont-de-Marsan": {
    name: "Mont-de-Marsan",
    department: "Landes",
    population: "32,000",
    region: "Nouvelle-Aquitaine",
    description: "Capital of the Landes, France's most forested department. Known for its ferias, bull-running festivals, and gateway to the vast pine forests.",
    highlights: ["Feria traditions", "Despiau-Wlérick Museum", "Landes forests", "Gascony heritage"]
  },
};

export const getCityInfo = (departmentName: string): CityInfo | null => {
  const cityName = DEPARTMENT_TO_CITY[departmentName];
  if (!cityName) return null;
  return CITY_INFO[cityName] || {
    name: cityName,
    department: departmentName,
    population: "N/A",
    region: "France",
    description: `${cityName} is the capital city of the ${departmentName} department in France.`,
    highlights: ["Historic center", "Local culture", "Regional cuisine"]
  };
};
