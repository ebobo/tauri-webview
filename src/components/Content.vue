<div v-html="input"></div>

<script lang="ts">
import { feachFile } from '../service/rest';

export default {
  data() {
    return {
      input: '',
      address: '/home/qi/Documents/HTMLs/page1.html',
    };
  },

  props: {
    file_address: {
      required: true,
      type: String,
    },
  },
  watch: {
    async file_address() {
      this.input = await feachFile(this.file_address);
      console.log(this.input);
    },
  },
};
</script>
