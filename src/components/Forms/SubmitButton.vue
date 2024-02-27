<script setup>
import { PrimaryButton, Spinner } from "../index";

const props = defineProps({
    type: {
        type: String,
        default: "submit",
    },
    disabled: Boolean,
    form: Object,
});
</script>

<template>
    <PrimaryButton :disabled="form.processing || disabled" :type="type">
        <div :class="{ 'opacity-25': form.processing }">
            <slot />
        </div>

        <div
            v-if="form.processing"
            class="absolute inset-2 flex items-center justify-center"
        >
            <Spinner class="aspect-square !h-full !w-auto text-white"></Spinner>
        </div>
    </PrimaryButton>
</template>
