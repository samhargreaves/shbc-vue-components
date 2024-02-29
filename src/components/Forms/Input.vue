<script setup>
import { InputLabel, TextInput, InputError, SubmitButton } from "../index";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
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
    switchDescription: String,
    sublabel: String,
});
function ucwords(text) {
    let res = [];
    text.split("_")
        .join(" ")
        .split(" ")
        .map(function (v) {
            res.push(v[0].toUpperCase() + v.slice(1));
        });
    return res.join(" ");
}
</script>

<template>
    <div>
        <InputLabel
            v-if="!noLabel"
            :for="field"
            :value="label ? label : ucwords(field)"
            :sublabel="sublabel"
            :required="required"
        />
        <div class="relative mb-4 flex w-full max-w-full items-stretch">
            <label v-if="type === 'checkbox'" class="flex items-center">
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
                    class="toggle-switch focusable !ml-0"
                    :class="{
                        checked: props.form[field],
                        disabled: props.disabled,
                    }"
                ></div>
                {{ switchDescription ? switchDescription : "Enable" }}
            </label>
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
                        '!rounded-r-none': !!submitBtn || whatsApp,
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
                    id="button-input"
                >
                    {{ submitBtn }}
                </SubmitButton>
                <a
                    v-if="whatsApp"
                    class="z-[2] inline-block rounded-r bg-primary px-2 py-2 text-xs font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:z-[3] focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-lg"
                    :href="whatsApp"
                    target="_blank"
                >
                    <FontAwesomeIcon
                        v-bind:icon="'fab fa-whatsapp'"
                        size="2xl"
                    />
                </a>
            </template>
        </div>
        <InputError class="mt-2" :message="props.form.errors[field]" />
    </div>
</template>
