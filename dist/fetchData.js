// public/fetchData.js
document.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('/surf.json');
      const data = await response.json();
  
      // Example of inserting data into the HTML
      const appDiv = document.getElementById('app');
      appDiv.innerHTML = `
        <h1>Surf Data Visualization</h1>
        <h2>Locations</h2>
        <ul>
          ${data.locations.map(location => `<li>${location.name} - ${location.description}</li>`).join('')}
        </ul>
        <h2>Difficulty Levels</h2>
        <ul>
          ${data.difficultyLevels.map(level => `<li>${level.level} - ${level.description}</li>`).join('')}
        </ul>
        <h2>Wave Types</h2>
        <ul>
          ${data.waveTypes.map(wave => `<li>${wave.type} - ${wave.description}</li>`).join('')}
        </ul>
      `;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });