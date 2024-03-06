<script setup>
import { SearchSelect } from "../../index";
import { ref, onMounted } from "vue";

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
    label: {
        type: String,
    },
    optionValue: {
        type: String,
        default: "value",
    },
    optionText: {
        type: String,
        default: "label",
    },
    optionDisabled: {
        type: String,
        default: "disabled",
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
    disabled: {
        type: Boolean,
        default: false,
    },
    noForm: {
        type: Boolean,
        default: false,
    },

    // ajax specific props
    url: {
        type: String,
        required: true,
    },
});

const emit = defineEmits(["update:modelValue"]);
const list = ref([]);
const page = ref(1);
const canIncreasePage = ref(true);
const lastScrollTop = ref(0);
const term = ref("");

const searchChange = (_term) => {
    page.value = 1;
    lastScrollTop.value = 0;
    term.value = _term;
    fetchList();
};

const fetchList = async (appendAjaxId = false) => {
    const params = new URLSearchParams();
    params.append("term", term.value);
    params.append("page", page.value);

    if (appendAjaxId) {
        const currentValue = props.form?.[props.field] || props.modelValue;
        console.log(currentValue);
        if (currentValue) {
            params.append("ajax_id", currentValue);
        }
    }

    const response = await fetch(`${props.url}?${params.toString()}`);
    const results = await response.json();
    canIncreasePage.value = results.current_page < results.last_page;

    if (page.value === 1) {
        list.value = results.data;
        return;
    }

    list.value = list.value.concat(results.data);
};

onMounted(() => {
    fetchList(true);

    const menu = document
        .getElementById(props.id)
        .parentNode.querySelector(".menu");
    menu?.addEventListener(
        "scroll",
        (e) => {
            if (e.target.scrollTop > lastScrollTop.value) {
                if (
                    e.target.scrollTop + e.target.clientHeight >=
                    e.target.scrollHeight
                ) {
                    if (canIncreasePage.value) {
                        page.value++;
                        fetchList();
                    }
                }
            }
        },
        {
            passive: true,
        }
    );
});
</script>

<template>
    <SearchSelect
        :id="id"
        :label="label"
        :list="list"
        :optionValue="optionValue"
        :optionText="optionText"
        :optionDisabled="optionDisabled"
        :placeholder="placeholder"
        :field="field"
        :form="form"
        :modelValue="modelValue"
        :noLabel="noLabel"
        :disabled="disabled"
        :noForm="noForm"
        @update:modelValue="($event) => emit('update:modelValue', $event)"
        @searchchange="searchChange"
    ></SearchSelect>
</template>
