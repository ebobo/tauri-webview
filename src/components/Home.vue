<template>
  <v-card>
    <v-toolbar flat class="topbar">
      <v-toolbar-title class="title">File Loader</v-toolbar-title>
      <v-file-input
        accept=".html"
        class="file-input"
        label="File to load"
        @click:clear="clearSelection"
      ></v-file-input>
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
    htmlFile: File | null;
  } {
    return {
      file_add: '',
      address: '/src/assets/hello.html',
      htmlFile: null,
    };
  },

  methods: {
    loadPage() {
      this.file_add = this.address;
    },

    clearSelection() {
      this.htmlFile = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.web-view {
  height: 600px;
  width: 900px;
  background-color: pink;
}
.file-view {
  height: 400px;
  width: 900px;
  background-color: orange;
}

.file-input {
  margin-right: 20px;
}

.title {
  margin-right: 0px;
}
</style>
