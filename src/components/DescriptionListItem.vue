<script setup>
import { ref } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPencil, faCheck } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faPencil, faCheck);

const props = defineProps({
    editable: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
        default: "",
    },
    value: {
        type: String,
    },
});

const editing = ref(false);

const toggleEditing = () => {
    if (!props.editable) return;
    editing.value = !editing.value;
};
</script>

<template>
    <div
        class="description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
    >
        <dt class="flex items-center text-sm font-medium">
            {{ label }}
            <slot name="label" />
        </dt>
        <dd
            class="mt-1 min-h-[42px] text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
        >
            <div class="flex min-h-full items-center">
                <template v-if="!editing">
                    <div class="flex-grow">
                        <slot />
                        {{ value }}
                    </div>
                    <span class="ml-4 flex-shrink-0" v-if="editable">
                        <button
                            type="button"
                            @click="toggleEditing"
                            class="text-lg font-bold text-primary hover:text-primary-400"
                        >
                            <FontAwesomeIcon :icon="faPencil" />
                        </button>
                    </span>
                </template>
                <template v-else>
                    <div class="flex-grow">
                        <slot name="edit" />
                    </div>
                    <span class="ml-4 flex-shrink-0">
                        <button
                            type="button"
                            @click="toggleEditing"
                            class="text-xl font-bold text-primary hover:text-primary-400"
                        >
                            <FontAwesomeIcon :icon="faCheck" />
                        </button>
                    </span>
                </template>
            </div>
        </dd>
    </div>
</template>
