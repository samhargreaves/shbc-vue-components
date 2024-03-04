<script setup>
import { Head } from "@inertiajs/vue3";
import Link from "../overrides/InertiaLink";

const props = defineProps({
    href: String,
    colourClasses: {
        default: () => ["bg-primary", "text-white", "hover:bg-primary-700"],
    },
    target: {
        default: () => ["_self"],
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    method: String,
    data: Object,
});

const getClass = () => {
    return props.disabled
        ? [...props.colourClasses, ["opacity-50", "pointer-events-none"]]
        : props.colourClasses;
};
</script>

<template>
    <Link
        v-if="href && (method || data)"
        :href="href"
        :method="method"
        :data="data"
        class="focusable text-sm inline-flex justify-center items-center font-medium cursor-pointer select-none rounded px-2 leading-normal"
        :class="getClass()"
        as="button"
    >
        <slot />
    </Link>

    <a
        v-else
        :href="href"
        :target="target"
        class="focusable text-sm inline-flex justify-center items-center font-medium cursor-pointer select-none rounded px-2 leading-normal"
        :class="getClass()"
    >
        <slot />
    </a>
</template>
