<template>
  <iframe
    ref="iframeRef"
    :src="page_address"
    title="page"
    :onload="load"
    :onunload="error"
    style="border: none"
    seamless
  ></iframe>
  <!-- <vue-iframe  :src="page_address"></vue-iframe> -->
</template>

<script lang="ts">
export default {
  emits: ['page-loading', 'page-loaded'],
  data() {
    return {
      input: '',
      currentIframeURL: '',
    };
  },

  props: {
    page_address: {
      required: true,
      type: String,
    },
    move_trigger: {
      required: true,
      type: Number,
    },
  },

  methods: {
    clicked() {
      console.log('clicked ');
    },
    load() {
      this.$emit('page-loaded');
      this.currentIframeURL = this.$refs.iframeRef.getAttribute('src');
      console.log(this.currentIframeURL);
    },
    error() {
      console.log('error');
      this.$emit('page-loaded');
    },
    test() {
      console.log('test');
    },
  },

  watch: {
    page_address() {
      this.$emit('page-loading');
    },
    move_trigger(newValue: number, oldValue: number) {
      if (newValue > oldValue) {
        this.$emit('page-loading');
        // if (window.history.next) {
        window.history.forward();
        // }
      } else {
        this.$emit('page-loading');
        window.history.back();
        // console.log(this.$refs.iframeRef.getAttribute('src'));
      }
    },
  },
};
</script>
