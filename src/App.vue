<template>
  <v-app>
    <v-main>
      <home />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from './components/Home.vue';

export default defineComponent({
  name: 'App',

  components: {
    Home,
  },

  data() {
    return {
      //
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-height: 100vh;
}
html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>
