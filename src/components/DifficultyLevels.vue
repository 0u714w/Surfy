<template>
  <div id="difficulty-levels">
    <h2>Difficulty Levels</h2>
    <div v-if="currentDifficulty">
      <strong>{{ currentDifficulty.level }}</strong>: {{ currentDifficulty.description }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      difficultyLevels: [],
      currentDifficultyIndex: 0,
      currentDifficulty: null,
      intervalId: null
    };
  },
  mounted() {
    this.fetchDifficultyLevels();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    async fetchDifficultyLevels() {
      try {
        const response = await fetch('/surf.json');
        const data = await response.json();
        this.difficultyLevels = data.difficultyLevels;
        this.currentDifficulty = this.difficultyLevels[this.currentDifficultyIndex];
        this.startDifficultyLoop();
      } catch (error) {
        console.error('Error fetching difficulty levels:', error);
      }
    },
    startDifficultyLoop() {
      this.intervalId = setInterval(() => {
        this.currentDifficultyIndex = (this.currentDifficultyIndex + 1) % this.difficultyLevels.length;
        this.currentDifficulty = this.difficultyLevels[this.currentDifficultyIndex];
      }, 4000); // Change difficulty level every 4 seconds
    }
  }
};
</script>

<style scoped>
#difficulty-levels {
  background-color: #e0f7fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 2rem;
}

h2 {
  color: #00796b;
}

div {
  margin-bottom: 1rem;
}
</style>