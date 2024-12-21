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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 1rem;
}
</style>