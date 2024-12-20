<template>
  <div id="location-list">
    <h2>Surf Locations</h2>
    <ul>
      <li v-for="location in locations" :key="location.name">
        <strong>{{ location.name }}</strong>: {{ location.description }}
        <br>
        Coordinates: ({{ location.coordinates.lat }}, {{ location.coordinates.lng }})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locations: []
    };
  },
  mounted() {
    this.fetchLocations();
  },
  methods: {
    async fetchLocations() {
      try {
        const response = await fetch('/surf.json');
        const data = await response.json();
        this.locations = data.locations;
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>

{
  "compilerOptions": {
    "target": "es2017",
    "module": "es2022",
  }
}