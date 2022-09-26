<template>
  <v-card :theme="theme" class="card">
    <nav-bar
      :main_theme="theme"
      :loading="loadingPage"
      @move-backward="clickBackward"
      @move-forward="clickForward"
      @move-home="clickHome"
      @change-theme="changeTheme"
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
    homeAddress: string;
    address: string;
    htmlFile: File | null;
    moveNum: number;
    loadingPage: boolean;
    theme: string;
  } {
    return {
      homeAddress: 'http://localhost',
      address: 'http://localhost',
      htmlFile: null,
      moveNum: 0,
      loadingPage: false,
      theme: 'light',
    };
  },

  methods: {
    loadPage() {
      this.file_add = this.address;
    },

    clickBackward() {
      this.moveNum--;
    },

    clickHome() {
      this.address = this.homeAddress;
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

    changeTheme() {
      if (this.theme === 'dark') {
        this.theme = 'light';
      } else {
        this.theme = 'dark';
      }
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
}

.file-input {
  margin-right: 20px;
}

.title {
  margin-right: 0px;
}
</style>
