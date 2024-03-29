<script setup>
defineProps({
    header: String,
    overflow: {
        default: true,
        type: Boolean,
    },
});
</script>
<template>
    <div
        class="rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white"
        :class="{ 'px-4 py-2': !header, 'overflow-hidden': overflow }"
    >
        <div class="sm:rounded-lg" :class="{ 'p-1': !header }">
            <div
                v-if="header"
                class="relative mb-2 rounded-b-lg border-b-2 border-gray-200 bg-neutral-50 px-6 py-1 text-center"
            >
                <span>{{ header }}</span>
                <div
                    v-if="$slots.headerButton"
                    class="absolute right-0 top-0 mt-1 mr-2"
                >
                    <slot name="headerButton" />
                </div>
            </div>
            <div :class="{ 'px-4 pb-2': header }">
                <slot />
            </div>
        </div>
    </div>
</template>
