<template>
  <v-card>
    <v-toolbar flat class="topbar">
      <v-toolbar-title class="title">Web</v-toolbar-title>
      <v-text-field />
      <v-spacer></v-spacer>
      <v-btn icon dark @click="$emit('save-settings')">
        <v-icon size="small">mdi-content-save-edit-outline</v-icon>
      </v-btn>
    </v-toolbar>
    <content class="web-view" />
  </v-card>
</template>

<script lang="ts">
import Content from './Content.vue';
export default {
  components: {
    Content,
  },

  data() {
    return {
      //
    };
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
