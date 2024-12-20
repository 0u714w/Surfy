<template>
  <div id="difficulty-levels">
    <h2>Difficulty Levels</h2>
    <ul>
      <li v-for="level in difficultyLevels" :key="level.id">
        {{ level.name }}: {{ level.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      difficultyLevels: []
    };
  },
  mounted() {
    this.fetchDifficultyLevels();
  },
  methods: {
    async fetchDifficultyLevels() {
      try {
        const response = await fetch('/surf.json');
        const data = await response.json();
        this.difficultyLevels = data.difficultyLevels;
      } catch (error) {
        console.error('Error fetching difficulty levels:', error);
      }
    }
  }
};
</script>

<style scoped>

</style>