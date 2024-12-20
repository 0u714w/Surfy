<template>
  <div id="app">
    <h1>Surf Data Visualization</h1>
    <LocationList />
    <DifficultyLevels />
    <WaveTypes />
  </div>
</template>

<script>
import LocationMap from './components/LocationMap.vue';
import DifficultyLevels from './components/DifficultyLevels.vue';
import WaveTypes from './components/WaveTypes.vue';
import LocationList from './components/LocationList.vue';

export default {
  name: 'App',
  components: {
    LocationMap,
    DifficultyLevels,
    WaveTypes,
    LocationList
  }
};
</script>

<style>
/* Add your CSS styles here */
</style>