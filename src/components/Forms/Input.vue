<script setup>
/**
 * Input component
 *
 * @component
 *
 * @prop {string} type - The type of the input
 * @prop {string} field - The field name
 * @prop {string} label - The label for the input
 * @prop {string} name - The name attribute for the input
 * @prop {boolean} required - Whether the input is required
 * @prop {boolean} disabled - Whether the input is disabled
 * @prop {number|string} min - The minimum value for the input
 * @prop {number|string} max - The maximum value for the input
 * @prop {number|string} step - The step value for the input
 * @prop {object} form - The form object
 * @prop {string} addon - The addon text
 * @prop {string} placeholder - The placeholder for the input
 * @prop {boolean} noLabel - Whether to hide the label
 * @prop {string} submitBtn - The submit button text
 * @prop {boolean} autofocus - Whether the input should be autofocused
 * @prop {string} pattern - The pattern for the input
 * @prop {string} whatsApp - The WhatsApp link
 * @prop {string} switchDescription - The description for the switch
 * @prop {string} sublabel - The sublabel for the input
 */

import { InputLabel, TextInput, InputError, SubmitButton } from '../../index';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSquareCheck, faSquare } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faWhatsapp);

const props = defineProps({
    type: String,
    field: String,
    label: String,
    name: String,
    required: Boolean,
    disabled: Boolean,
    min: Number | String,
    max: Number | String,
    step: Number | String,
    form: Object,
    addon: String,
    placeholder: String,
    noLabel: Boolean,
    submitBtn: String,
    autofocus: Boolean,
    pattern: String,
    whatsApp: String,
    leftDescription: { type: [String, Boolean], default: false },
    rightDescription: { type: [String, Boolean], default: 'Enable' },
    switchDescription: String,
    sublabel: String,

    inputCustomClass: {
        type: String,
        default: '',
    },

    buttonCustomClass: {
        type: String,
        default: '',
    },

    labelCustomClass: {
        type: String,
        default: '',
    },

    modelValue: {},
    noForm: {
        type: Boolean,
        default: false,
    },
});
function ucwords(text) {
    let res = [];
    text.split('_')
        .join(' ')
        .split(' ')
        .map(function (v) {
            res.push(v[0].toUpperCase() + v.slice(1));
        });
    return res.join(' ');
}
</script>

<template>
    <div>
        <InputLabel
            :customClass="labelCustomClass"
            v-if="!noLabel"
            :for="field"
            :value="label ? label : ucwords(field)"
            :sublabel="sublabel"
            :required="required"
        />
        <div class="relative flex w-full max-w-full items-stretch" :class="noLabel ? '' : 'mb-4'">
            <label v-if="type === 'switch' || type === 'checkbox'" class="flex items-center">
                <slot v-if="$slots?.leftDescription" name="leftDescription" />
                <span v-else-if="leftDescription">
                    {{ leftDescription ? leftDescription : 'Disable' }}
                </span>
                <input
                    :id="field"
                    type="checkbox"
                    class="hidden"
                    v-model="props.form[field]"
                    :disabled="props.disabled"
                    :required="props.required"
                    :name="name ?? field"
                />
                <div
                    v-if="type === 'switch'"
                    class="toggle-switch focusable !ml-0"
                    :class="{
                        checked: props.form[field],
                        disabled: props.disabled,
                    }"
                />
                <div
                    v-else
                    class="focusable text-primary"
                    :class="{
                        '!text-gray-500': props.disabled,
                    }"
                >
                    <Transition name="popup" mode="out-in">
                        <FontAwesomeIcon key="checked" v-if="props.form[field]" v-bind:icon="'fas fa-square-check'" />
                        <FontAwesomeIcon key="unchecked" v-else v-bind:icon="'fas fa-square'" />
                    </Transition>
                </div>
                <slot v-if="$slots?.rightDescription" name="rightDescription" />
                <span v-else-if="rightDescription">
                    {{ rightDescription }}
                </span>
            </label>
            <select
                v-else-if="type === 'select'"
                v-model="props.form[field]"
                :required="props.required"
                :disabled="props.disabled"
                :name="name ?? field"
                class="focusable block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
            >
                <slot />
            </select>
            <template v-else>
                <span
                    v-if="addon"
                    class="border-gray flex items-center whitespace-nowrap rounded rounded-r-none border border-r-0 border-gray-300 bg-slate-50 px-2 text-center text-gray-500"
                >
                    {{ addon }}
                </span>
                <TextInput
                    :id="field"
                    :type="type"
                    class="focusable relative m-0 block w-full flex-auto disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
                    :class="{
                        '!rounded-l-none': addon,
                        '!rounded-r-none': !!submitBtn || whatsApp || $slots?.submit,
                        [inputCustomClass]: !!inputCustomClass,
                    }"
                    v-model="props.form[field]"
                    :required="props.required"
                    :disabled="props.disabled"
                    :autocomplete="field"
                    :min="props.min"
                    :max="props.max"
                    :step="props.step"
                    :placeholder="props.placeholder"
                    :autofocus="props.autofocus"
                    :pattern="props.pattern"
                    :name="name ?? field"
                />
                <SubmitButton
                    v-if="submitBtn"
                    :form="form"
                    class="z-[2] inline-block rounded-l-none"
                    :class="buttonCustomClass"
                    :id="`submit-button-${field}`"
                >
                    {{ submitBtn }}
                </SubmitButton>
                <SubmitButton
                    v-if="$slots?.submit"
                    :form="form"
                    class="z-[2] inline-block rounded-l-none"
                    :class="buttonCustomClass"
                    id="button-input"
                >
                    <slot name="submit" />
                </SubmitButton>
                <a
                    v-if="whatsApp"
                    class="z-[2] inline-block rounded-r bg-primary px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:z-[3] focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-lg"
                    :class="buttonCustomClass"
                    :href="whatsApp"
                    target="_blank"
                >
                    <FontAwesomeIcon v-bind:icon="'fab fa-whatsapp'" size="2xl" />
                </a>
            </template>
        </div>
        <InputError class="mt-2" :message="props.form.errors[field]" />
    </div>
</template>

<style scoped>
.toggle-switch {
    @apply relative mx-2 inline-block h-6 w-12 flex-none cursor-pointer rounded-xl bg-gray-300 transition-all;
    box-shadow: 0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.08) inset;
}

.toggle-switch::before {
    @apply absolute left-0.5 top-0.5 block h-5 w-5 rounded-full bg-white bg-gradient-to-br from-transparent to-gray-200;
    box-shadow: 0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.08);
    content: '';
    transition: left 150ms;
    will-change: left;
}
.toggle-switch:hover {
    box-shadow: 0.0625em 0.0625em 0.125em rgba(0, 0, 0, 0.12) inset;
}

.toggle-switch:hover::before {
    background-image: radial-gradient(circle at 0.375em 0.375em, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.0375) 1em);
    box-shadow: 0.0625em 0.0625em 0.0625em rgba(0, 0, 0, 0.12);
}

.checked {
    @apply bg-primary;
}

.checked::before {
    background-image: radial-gradient(circle at 0.375em 0.375em, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.05) 1em);
    left: 1.625em;
}

.popup-enter-active {
    animation: jump-in 0.2s;
}

.popup-leave-active {
    animation: none;
}

@keyframes jump-in {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
}
</style>
