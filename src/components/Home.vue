<template>
  <v-card :theme="main_theme" class="card">
    <nav-bar
      :main_theme="main_theme"
      :loading="loadingPage"
      @move-backward="clickBackward"
      @move-forward="clickForward"
    />
    <content
      class="web-view"
      :page_address="address"
      :move_trigger="moveNum"
      @page-loaded="setPageLoading(false)"
      @page-loading="setPageLoading(true)"
    />
  </v-card>
</template>

<script lang="ts">
import Content from './Content.vue';
import NavBar from './NavBar.vue';

export default {
  components: {
    Content,
    NavBar,
  },

  data(): {
    address: string;
    htmlFile: File | null;
    moveNum: number;
    loadingPage: boolean;
  } {
    return {
      address: 'https://www.infopro-digital-automotive.it',
      htmlFile: null,
      moveNum: 0,
      loadingPage: false,
    };
  },

  methods: {
    loadPage() {
      this.file_add = this.address;
    },

    clickBackward() {
      this.moveNum--;
    },

    clickForward() {
      this.moveNum++;
    },

    clearSelection() {
      this.htmlFile = null;
    },

    setPageLoading(loading: boolean) {
      this.loadingPage = loading;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-flow: column;
  height: 100%;
}

.web-view {
  display: flex;
  flex: 1 1;
  background-color: pink;
}

.file-input {
  margin-right: 20px;
}

.title {
  margin-right: 0px;
}
</style>
