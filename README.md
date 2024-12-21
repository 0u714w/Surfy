# Vue Surf App

## Overview
The Vue Surf App is a data visualization application that displays information related to surfing locations, difficulty levels, wave types, and equipment types. It utilizes Vue.js for the frontend and fetches data from a JSON file.

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
   cd vue-surf-app
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