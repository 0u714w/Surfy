<template>
  <div id="app">
    <LocationList />
    <DifficultyLevels />
    <WaveTypes />
    <EquipmentTypes />
  </div>
</template>

<script>
import LocationList from './components/LocationList.vue';
import DifficultyLevels from './components/DifficultyLevels.vue';
import WaveTypes from './components/WaveTypes.vue';
import EquipmentTypes from './components/EquipmentTypes.vue';

export default {
  name: 'App',
  components: {
    LocationList,
    DifficultyLevels,
    WaveTypes,
    EquipmentTypes
  }
};
</script>

<style>
/* Add any global styles here */
</style>