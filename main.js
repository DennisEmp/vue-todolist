const { createApp } = Vue

createApp({
    data() {
      return {
        tasks: [
          {
              text: 'Fare i compiti', 
              done: false
          },
          {
              text: 'Fare la spesa', 
              done: true
          },
          {
              text: 'Fare il', 
              done: false
          }
        ]
      }
    }
  }).mount('#app')