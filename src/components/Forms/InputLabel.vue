<script setup>
defineProps(['value', 'sublabel']);
</script>

<template>
    <label class="font-medium block text-sm text-gray-700">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
        <span v-if="!!sublabel" class="ml-2 text-xs text-gray-500">{{ sublabel }}</span>
    </label>
</template>
