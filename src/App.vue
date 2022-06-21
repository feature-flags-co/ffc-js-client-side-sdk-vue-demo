<script setup>
import Counter from './components/Counter.vue'
</script>

<script>
import { store } from "./ffc";

export default {
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <div className="App">
    <header className="App-header">
      <div>Hello {{store.flags["hello"]}} </div>
      <Counter v-if="store.flags['counter'] === 'true'"/>
    </header>
  </div>
</template>

<style>
@import './assets/base.css';

.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
