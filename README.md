# Surfy 

https://0u714w.github.io/Surfy/

## Overview
Surfy is a data visualization application that displays information related to surfing locations, difficulty levels, wave types, and equipment types. It utilizes Vue.js for the frontend and fetches data from a JSON file.

![Logo](https://private-user-images.githubusercontent.com/40585126/397937570-bafb6b60-b268-4a14-b587-7dc5b6741861.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzQ3OTYxNjQsIm5iZiI6MTczNDc5NTg2NCwicGF0aCI6Ii80MDU4NTEyNi8zOTc5Mzc1NzAtYmFmYjZiNjAtYjI2OC00YTE0LWI1ODctN2RjNWI2NzQxODYxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMjElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjIxVDE1NDQyNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTMzZjUyN2E3ZjI2Y2RlY2I0MmRjNjFiYmFiODYxMmViNDEyMGVkMmIyNDQzYWQ1N2I0MmFkM2YzN2YwNTIxMDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.m8cPp3LZkC-ysrVjpq9D6Erf70TZDMxz6kKJpvwL_D0)

## Project Structure
```
vue-surf-app
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
