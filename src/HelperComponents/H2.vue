<script setup>
import { defineProps } from "vue";
const props = defineProps({
  title: String,
});
</script>

<template>
  <div class="flex mt-10 items-center gutters">
    <h2
      :id="title.toLowerCase()"
      class="text-lg font-bold text-primary whitespace-nowrap mr-4"
    >
      # {{ title }}
    </h2>
    <div class="border-t-2 w-full border-dashed border-primary flex-grow"></div>
  </div>
</template>
