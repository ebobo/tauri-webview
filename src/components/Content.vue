<template>
  <iframe
    id="iframeWindow"
    :src="page_address"
    title="page"
    :onload="load"
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
      iframeWindow: null,
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

  mounted() {
    console.log('mounted');
  },
  methods: {
    clicked() {
      console.log('clicked ');
    },
    load() {
      this.$emit('page-loaded');
      const ifr = document.getElementById('iframeWindow') as HTMLIFrameElement;
      if (ifr && ifr.contentWindow) {
        ifr.contentWindow.onunload = () => {
          // console.log('start load');
          this.$emit('page-loading');
        };
      }
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
        // this.$emit('page-loading');
        // if (window.history.next) {
        window.history.forward();
        // }
      } else {
        // this.$emit('page-loading');
        // const ifr = document.getElementById(
        //   'iframeWindow'
        // ) as HTMLIFrameElement;
        // if (ifr) {
        //   const ifrWindow = ifr.contentWindow;
        //   if (ifrWindow) {
        //     console.log(ifrWindow.);
        //   }
        // }
        // ifr.contentWindow?.history.back();
        window.history.back();
        // console.log(this.$refs.iframeRef.getAttribute('src'));
      }
    },
  },
};
</script>
