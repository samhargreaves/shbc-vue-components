<script setup>
import { ref, watch } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPencil, faCheck } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faPencil, faCheck);

const props = defineProps({
    editable: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
        default: '',
    },
    value: {
        type: String,
    },
    forceEditing: {
        type: Boolean,
        default: false,
    },
    required: {
        type: Boolean,
        default: false,
    },
});

const editing = ref(props.editable ? props.forceEditing : false);

const toggleEditing = () => {
    if (!props.editable) return;
    editing.value = !editing.value;
};

watch(() => props.forceEditing, (newValue) => {
    if (props.editable) {
        editing.value = newValue;
    }
});
</script>

<template>
    <div class="description-list-item px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="flex items-center text-sm font-medium">
            {{ label }}
            <slot name="label" />
            <span class="ml-1 text-red-500" v-if="required">*</span>
        </dt>
        <dd class="mt-1 min-h-[42px] text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            <div class="flex min-h-full items-center">
                <template v-if="!editing">
                    <div class="grow slot-content">
                        <slot />
                        {{ value }}
                    </div>
                    <span class="ml-4 shrink-0">
                        <button type="button" @click="toggleEditing" class="text-lg font-bold text-primary hover:text-primary-400"  v-if="editable">
                            <FontAwesomeIcon :icon="faPencil" />
                        </button>
                        <slot name="buttons" />
                    </span>
                </template>
                <template v-else>
                    <div class="grow slot-edit">
                        <slot name="edit" />
                    </div>
                    <span class="ml-4 shrink-0">
                        <button type="button" @click="toggleEditing" class="text-xl font-bold text-primary hover:text-primary-400">
                            <FontAwesomeIcon :icon="faCheck" />
                        </button>
                    </span>
                </template>
            </div>
        </dd>
    </div>
</template>
