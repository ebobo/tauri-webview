<template>
  <v-toolbar theme="main_theme">
    <img
      v-if="!loading"
      alt="Autronica Logo"
      contain
      class="logo"
      :src="mainIconPath"
      transition="scale-transition"
      width="50"
    />
    <v-progress-circular
      v-if="loading"
      class="loading-icon"
      :size="25"
      indeterminate
      color="gray"
    ></v-progress-circular>
    <v-spacer></v-spacer>

    <v-btn icon @click="backward">
      <v-icon>mdi-step-backward</v-icon>
    </v-btn>

    <v-btn icon @click="forward">
      <v-icon>mdi-step-forward</v-icon>
    </v-btn>

    <v-btn icon @click="refresh">
      <v-icon>mdi-refresh</v-icon>
    </v-btn>

    <v-btn icon @click="print">
      <v-icon>mdi-printer</v-icon>
    </v-btn>
    <v-btn icon @click="search">
      <v-icon>mdi-text-box-search-outline</v-icon>
    </v-btn>
    <v-btn icon @click="changeTheme">
      <v-icon>mdi-brightness-4</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import logo from '../assets/autronica_logo.png';
import darkLogo from '../assets/autronica_logo_dark.png';

export default {
  emits: ['change-theme', 'change-size', 'change-settings', 'screen-info'],
  props: {
    main_theme: {
      required: true,
      type: String,
    },
    loading: {
      required: true,
      type: Boolean,
    },
  },
  computed: {
    mainIconPath() {
      if (this.main_theme === 'dark') {
        return logo;
      }
      return darkLogo;
    },
  },
  methods: {
    backward() {
      this.$emit('move-backward');
    },
    forward() {
      this.$emit('move-forward');
    },

    changeTheme() {
      this.$emit('change-theme');
    },
    printPDF() {
      this.$emit('print-pdf');
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  margin-left: 1rem;
}
.loading-icon {
  margin-left: 1.5rem;
}
</style>
