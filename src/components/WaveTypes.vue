<template>
  <div id="wave-types">
    <h2>Wave Types</h2>
    <div v-if="currentWaveType">
      <strong>{{ currentWaveType.type }}</strong>: {{ currentWaveType.description }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      waveTypes: [],
      currentWaveTypeIndex: 0,
      currentWaveType: null,
      intervalId: null
    };
  },
  mounted() {
    this.fetchWaveTypes();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    async fetchWaveTypes() {
      try {
        const response = await fetch('/surf.json');
        const data = await response.json();
        this.waveTypes = data.waveTypes;
        this.currentWaveType = this.waveTypes[this.currentWaveTypeIndex];
        this.startWaveTypeLoop();
      } catch (error) {
        console.error('Error fetching wave types:', error);
      }
    },
    startWaveTypeLoop() {
      this.intervalId = setInterval(() => {
        this.currentWaveTypeIndex = (this.currentWaveTypeIndex + 1) % this.waveTypes.length;
        this.currentWaveType = this.waveTypes[this.currentWaveTypeIndex];
      }, 5000); // Change wave type every 5 seconds
    }
  }
};
</script>

<style scoped>
#wave-types {
  background-color: #fff3e0;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 2rem;
}

h2 {
  color: #e65100;
}

div {
  margin-bottom: 1rem;
}
</style>