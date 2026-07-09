# Siragugal Special School Website (PEACE TRUST)

This is a premium, modern, warm, and highly accessible NGO website built for **Siragugal Special School** (a project of **PEACE TRUST**) located in Thanjavur, Tamil Nadu, India.

## Project Structure

```
siragugal-special-school/
├── frontend/             # React Application
│   ├── index.html        # Main Entry & SEO setup
│   ├── package.json      # NPM dependencies
│   ├── vite.config.js    # Bundler config
│   └── src/
│       ├── App.css       # Style overrides
│       ├── App.jsx       # Route definitions
│       ├── main.jsx      # Render mount point
│       ├── components/   # Shared components (Navbar, Footer, Modals)
│       ├── layouts/      # Layout structures (MainLayout)
│       ├── pages/        # View screens (Home, About, Activities, Staff, etc.)
│       └── styles/       # Design System CSS tokens
└── backend/              # Node.js/Express API (To be implemented in Phase 2)
```

## Features Implemented (Frontend)

1. **Autoplay Image Slider**: Custom animated slides in the hero section introducing facilities and curriculums.
2. **Interactive Statistics Counter**: Celebrating milestones since January 2007.
3. **Filterable Event grids**: Clean, category-switched grids for celebrations, tours, and awareness days.
4. **Trustee Credential Sections**: Prominently showcasing specialized psychological and therapy degrees of organization management.
5. **Program Highlights Checklist**: Detailing clinical therapies (Speech, Occupational, Physiotherapy) along with expected benefits and age group guides.
6. **Masonry Gallery Lightbox**: Premium category-swapped masonry grid that expands images into clean overlay panels.
7. **Validated Contact forms**: Email, phone, and name validity filters with interactive success alerts.
8. **Interactive FAQ panel**: Dropdown accordion panels handling common questions.
9. **Admin Console Console**: Auth forms and tables allowing administrators to simulate additions and deletions in the database.

## Installation & Running Locally

1. Ensure [Node.js](https://nodejs.org) is installed.
2. Navigate into the frontend folder:
   ```bash
   cd frontend
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```
