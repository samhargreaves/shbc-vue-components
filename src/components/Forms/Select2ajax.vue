<script setup>
import { SearchSelect } from '../../index';
import { ref, onMounted } from 'vue';

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
        default: 'value',
    },
    optionText: {
        type: String,
        default: 'label',
    },
    optionDisabled: {
        type: String,
        default: 'disabled',
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
    queryParams: {
        type: Object,
    }
});

const emit = defineEmits(['update:modelValue']);
const list = ref([]);
const page = ref(1);
const canIncreasePage = ref(true);
const lastScrollTop = ref(0);
const term = ref('');
const currentValue = ref(props.form?.[props.field] || props.modelValue);
const lastValue = ref(currentValue.value);

const onUpdate = (value) => {
    lastValue.value = currentValue.value;
    currentValue.value = value;
    emit('update:modelValue', value);
};

const searchChange = (_term) => {
    if (_term == '') {
        if (currentValue.value && currentValue.value !== lastValue.value) {
            // user selected a value from the list
            return;
        }
    }

    page.value = 1;
    lastScrollTop.value = 0;
    term.value = _term;

    console.log(term.value, currentValue.value);
    fetchList();
};

const fetchList = async (appendAjaxId = false) => {
    const params = new URLSearchParams();
    params.append('term', term.value);
    params.append('page', page.value);

    if (props.queryParams) {
        Object.keys(props.queryParams).forEach((key) => {
            params.append(key, props.queryParams[key]);
        });
    }

    if (appendAjaxId) {
        if (currentValue.value) {
            params.append('ajax_id', currentValue.value);
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

    const menu = document.getElementById(props.id).parentNode.querySelector('.menu');
    menu?.addEventListener(
        'scroll',
        (e) => {
            if (e.target.scrollTop > lastScrollTop.value) {
                if (e.target.scrollTop + e.target.clientHeight >= e.target.scrollHeight) {
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
        @update:modelValue="($event) => onUpdate($event)"
        @searchchange="searchChange"
    ></SearchSelect>
</template>
