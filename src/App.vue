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
