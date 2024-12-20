<template>
  <div id="wave-types">
    <h2>Wave Types</h2>
    <ul>
      <li v-for="wave in waves" :key="wave.id">
        
        <span>{{ wave.type }}</span> <span> - {{ wave.description }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      waves: []
    };
  },
  created() {
    fetch('/surf.json')
      .then(response => response.json())
      .then(data => {
        this.waves = data.waveTypes;
      })
      .catch(error => {
        console.error('Error fetching wave types:', error);
      });
  }
};
</script>

<style scoped>

</style>