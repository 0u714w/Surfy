# Surfy 

https://0u714w.github.io/Surfy/

## Overview
Surfy is a data visualization application that displays information related to surfing locations, difficulty levels, wave types, and equipment types. It utilizes Vue.js for the frontend and fetches data from a JSON file.

![surf](https://private-user-images.githubusercontent.com/40585126/397937570-bafb6b60-b268-4a14-b587-7dc5b6741861.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzUzNDIwMTksIm5iZiI6MTczNTM0MTcxOSwicGF0aCI6Ii80MDU4NTEyNi8zOTc5Mzc1NzAtYmFmYjZiNjAtYjI2OC00YTE0LWI1ODctN2RjNWI2NzQxODYxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjI3VDIzMjE1OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE1MzNmZjI5NGNhMmYxOWUzZGUxZDRlZGU3NTA3NWUzZjA3MjI2OTJkZTQ2NmM5ZjQzMmY2YTYzYzEwYWJkMjkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.xbcRSaVtticZdUoy_2npWQUzTnuv9Mngi9nK5sr2h94)

## Project Structure
```
Surfy
├── public
│   ├── index.html          # Main HTML structure of the application
│   └── surf.json          # JSON data for surfing information
├── src
│   ├── assets              # Static assets (images, stylesheets)
│   ├── components          # Vue components for different visualizations
│   │   ├── LocationList.vue # Component for displaying surfing locations
│   │   ├── DifficultyLevels.vue # Component for visualizing difficulty
 levels
│   │   └── WaveTypes.vue   # Component for displaying wave types
│   ├── App.vue             # Root component of the Vue application
│   ├── main.js             # Entry point of the Vue application
│   └── router
│       └── index.js        # Vue Router setup (if needed)
├── package.json            # npm configuration file
├── babel.config.js         # Babel configuration
├── vue.config.js           # Vue CLI project configuration
└── README.md               # Project documentation
```

## Setup Instructions
1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd Surfy
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run serve
   ```

4. **Open your browser:**
   Navigate to `http://localhost:8080` to view the application.

## Usage
- The application visualizes surfing data, including locations on a map, difficulty levels in charts, and various wave types.
- Data is fetched from `public/surf.json`, which contains all necessary information for the visualizations.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.
