<script setup>
defineProps(["value", "sublabel", "required"]);
</script>

<template>
    <label class="font-medium block text-sm text-gray-700">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
        <span v-if="!!sublabel" class="ml-2 text-xs text-gray-500">{{
            sublabel
        }}</span>
        <span class="ml-1 text-red-500" v-if="required">*</span>
    </label>
</template>
