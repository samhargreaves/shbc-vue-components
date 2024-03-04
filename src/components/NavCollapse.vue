<script setup>
import { computed } from "vue";
import Link from "../overrides/InertiaLink";
const props = defineProps({
    show: { type: Boolean, default: false },
    name: String,
    parent: String,
});
</script>

<template>
    <li>
        <button
            :id="name"
            type="button"
            data-te-collapse-init
            class="group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            :aria-controls="`dropdown-${name}`"
            :data-te-target="`#dropdown-${name}`"
            :data-collapse-toggle="`#dropdown-${name}`"
            :aria-expanded="show ? 'true' : null"
            :data-te-collapse-collapsed="!show"
        >
            <slot name="icon" />
            <span class="ml-3 flex-1 whitespace-nowrap text-left">{{
                name
            }}</span>
            <svg
                class="h-3 w-3 transform"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                />
            </svg>
        </button>
        <ul
            class="!visible space-y-1 px-4"
            :id="`dropdown-${name}`"
            data-te-collapse-item
            :data-te-collapse-show="show"
            :data-te-parent="`#${parent}`"
            :aria-labelledby="`button-${item}`"
            :class="{ hidden: !show }"
        >
            <slot />
        </ul>
    </li>
</template>

<style scoped>
[data-te-collapse-collapsed] > svg {
    transform: rotate(180deg);
}
</style>
