<template>
    <div id="equipment-types">
      <h2>Equipment Types</h2>
      <div v-if="currentEquipment">
        <strong>{{ currentEquipment.type }}</strong>: {{ currentEquipment.description }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        equipmentTypes: [
          {
            "type": "Shortboard",
            "description": "A versatile board for all types of waves."
          },
          {
            "type": "Longboard",
            "description": "A longer board for smaller, slower waves."
          },
          {
            "type": "Fish",
            "description": "A shorter, wider board for smaller waves."
          },
          {
            "type": "Gun",
            "description": "A longer board for big wave surfing."
          }
        ],
        currentEquipmentIndex: 0,
        currentEquipment: null,
        intervalId: null
      };
    },
    mounted() {
      this.currentEquipment = this.equipmentTypes[this.currentEquipmentIndex];
      this.startEquipmentLoop();
    },
    beforeDestroy() {
      clearInterval(this.intervalId);
    },
    methods: {
      startEquipmentLoop() {
        this.intervalId = setInterval(() => {
          this.currentEquipmentIndex = (this.currentEquipmentIndex + 1) % this.equipmentTypes.length;
          this.currentEquipment = this.equipmentTypes[this.currentEquipmentIndex];
        }, 6000); // Change equipment type every 6 seconds
      }
    }
  };
  </script>
  
  <style scoped>
  #equipment-types {
    background-color: #f3e5f5;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin-bottom: 2rem;
  }
  
  h2 {
    color: #6a1b9a;
  }
  
  div {
    margin-bottom: 1rem;
  }
  </style>