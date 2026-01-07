# 🇫🇷 Interactive France Map

An elegant, interactive map of France showcasing all departments and their capital cities. Built with React, TypeScript, and D3.js.

![France Map Preview](https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements.geojson)

## ✨ Features

- **Interactive Map**: Click on any department to learn about its capital city
- **Hover Effects**: Smooth hover animations with department highlighting
- **City Information Panel**: Detailed info including population, region, and highlights
- **French Tricolor Design**: Beautiful gradient background representing the French flag
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Auto-scaling**: Map automatically fits the viewport using D3's fitExtent

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **D3.js** - Map rendering and geo projections
- **shadcn/ui** - UI components

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd france-map

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── FranceMap.tsx    # Main interactive map component
│   ├── Header.tsx       # Search header with logo
│   └── InfoPanel.tsx    # City information display
├── data/
│   └── cityData.ts      # Department-to-city mapping and city info
├── pages/
│   └── Index.tsx        # Main page layout
└── index.css            # Global styles and CSS variables
```

## 🗺️ Data Source

Map data sourced from [france-geojson](https://github.com/gregoiredavid/france-geojson) - a reliable GeoJSON dataset of French administrative boundaries.

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
