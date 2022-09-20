<template>
  <v-card>
    <v-toolbar flat class="topbar">
      <v-toolbar-title class="title">Web</v-toolbar-title>
      <v-text-field v-model="address" />
      <v-btn icon dark @click="loadPage">
        <v-icon size="small">mdi-refresh</v-icon>
      </v-btn>
    </v-toolbar>
    <content class="web-view" :file_address="file_add" />
  </v-card>
</template>

<script lang="ts">
import Content from './Content.vue';
export default {
  components: {
    Content,
  },

  data(): {
    file_add: string;
    address: string;
  } {
    return {
      file_add: '',
      address: '/src/assets/hello.html',
    };
  },

  methods: {
    loadPage() {
      this.file_add = this.address;
    },
  },
};
</script>

<style lang="scss" scoped>
.web-view {
  height: 500px;
  width: 900px;
  background-color: pink;
}
</style>
