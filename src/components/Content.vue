<template>
  <iframe :src="file_address" title="description"></iframe>
</template>

<script lang="ts">
export default {
  data() {
    return {
      input: '',
    };
  },

  props: {
    file_address: {
      required: true,
      type: String,
    },
  },

  methods: {
    clicked() {
      console.log('clicked ');
    },
  },

  watch: {
    // async file_address() {
    //   console.log('file_address');
    //   this.input = await feachFile(this.file_address);
    //   console.log(this.input);
    // },
  },
};
</script>
