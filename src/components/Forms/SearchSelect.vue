<script setup>
import { ModelListSelect } from "vue-search-select";
import { InputLabel, InputError } from "../index";

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    label: {
        type: String,
    },
    list: {
        type: Array,
        required: true,
    },
    optionValue: {
        type: String,
        required: true,
    },
    optionText: {
        type: String,
        required: true,
    },
    optionDisabled: {
        type: String,
    },
    placeholder: {
        type: String,
    },
    field: String,
    form: Object,
    modelValue: {},
    noLabel: {
        type: Boolean,
        default: false,
    },
    isDisabled: {
        type: Boolean,
        default: false,
    },
    noForm: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(["update:modelValue"]);

const ucwords = (text) => {
    let res = [];
    text.split("_")
        .join(" ")
        .split(" ")
        .map(function (v) {
            res.push(v[0].toUpperCase() + v.slice(1));
        });
    return res.join(" ");
};
</script>

<template>
    <div>
        <InputLabel
            v-if="!noLabel && (label || field)"
            :for="id ?? field"
            :value="ucwords(label ?? field)"
        />
        <template v-if="noForm">
            <model-list-select
                :id="id ?? field"
                :list="list"
                :modelValue="modelValue"
                :option-value="optionValue"
                :option-text="optionText"
                :option-disabled="optionDisabled"
                :placeholder="placeholder"
                class="model-list !relative !mt-0 h-[42px] !max-w-full !rounded !border-gray-300 !shadow"
                @update:modelValue="(val) => emit('update:modelValue', val)"
                :is-disabled="isDisabled"
            ></model-list-select>
        </template>
        <template v-else>
            <model-list-select
                :id="id ?? field"
                :list="list"
                v-model="form[field]"
                :option-value="optionValue"
                :option-text="optionText"
                :option-disabled="optionDisabled"
                :placeholder="placeholder"
                class="model-list !relative !mt-0 h-[42px] !max-w-full !rounded !border-gray-300 !shadow"
                @update:modelValue="(val) => emit('update:modelValue', val)"
                :is-disabled="isDisabled"
            ></model-list-select>
            <InputError :message="form.errors[field]" />
        </template>
    </div>
</template>

<style lang="postcss">
.model-list.search.active {
    @apply !border-accent-500 !ring-1 !ring-accent-500;
}
.model-list .search {
    @apply !inline-flex !items-center !py-2 !text-base;
}
.model-list .text.default {
    @apply !text-black;
}
.model-list .menu {
    @apply !rounded-b !rounded-t-none !border-gray-300 !shadow;
}
.model-list .dropdown.icon {
    @apply !right-1.5 !top-[0.45rem] !m-0 !h-fit !w-fit !p-0;
}
.model-list .dropdown.icon:before {
    content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3e%3cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e") !important;
    @apply !block !h-8 !w-8 !opacity-60;
}
</style>
