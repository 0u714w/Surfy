<template>
  <div id="location-list">
    <h2>Surf Locations</h2>
    <div v-if="currentLocation">
      <strong>{{ currentLocation.name }}</strong>: {{ currentLocation.description }}
      <br>
      Coordinates: ({{ currentLocation.coordinates.lat }}, {{ currentLocation.coordinates.lng }})
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locations: [],
      currentLocationIndex: 0,
      currentLocation: null,
      intervalId: null
    };
  },
  mounted() {
    this.fetchLocations();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    async fetchLocations() {
      try {
        const response = await fetch('/Surfy/surf.json');
        const data = await response.json();
        this.locations = data.locations;
        this.currentLocation = this.locations[this.currentLocationIndex];
        this.startLocationLoop();
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    },
    startLocationLoop() {
      this.intervalId = setInterval(() => {
        this.currentLocationIndex = (this.currentLocationIndex + 1) % this.locations.length;
        this.currentLocation = this.locations[this.currentLocationIndex];
      }, 3000); // Change location every 3 seconds
    }
  }
};
</script>

<style scoped>
#location-list {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 2rem;
}

h2 {
  color: #008cba;
}

div {
  margin-bottom: 1rem;
}
</style>