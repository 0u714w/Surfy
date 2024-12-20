import { createRouter, createWebHistory } from 'vue-router';
import LocationList from '../components/LocationList.vue';
import DifficultyLevels from '../components/DifficultyLevels.vue';
import WaveTypes from '../components/WaveTypes.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: LocationList,
      difficulty: DifficultyLevels,
      waveTypes: WaveTypes,
    
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
