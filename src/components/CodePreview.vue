<script setup>
import { onMounted, ref } from "vue";
const props = defineProps({
  code: Array,
});

const codeBlock = ref(null);

onMounted(() => {
  codeBlock.value = props.code.join("\n");
});

const copy = () => {
  console.log(codeBlock.value);
  navigator.clipboard.writeText(codeBlock.value);
};
</script>

<template>
  <div class="relative rounded-md overflow-auto mt-2">
    <div
      class="absolute top-1 text-white right-3 text-right hover:cursor-pointer"
      @click="copy"
    >
      copy
    </div>
    <pre
      v-highlightjs
    ><code class="javascript !p-4" >{{ codeBlock }}</code></pre>
  </div>
</template>
