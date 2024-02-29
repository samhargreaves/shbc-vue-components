<script setup>
import { Input, Section, RadioButton } from "./index";
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    subscribe: false,
});
</script>
<template>
    asd
    <Section header="Form">
        <Input v-bind:form="form" autofocus field="name" />
        <Input v-bind:form="form" field="email" type="email" />
        <Input v-bind:form="form" field="password" type="password" />
        <p class="text-primary">Primary</p>
        <p class="text-accent">Accent</p>
        <RadioButton
            value="eng_note"
            v-model="form.subscribe"
            name="option"
            label="With Engineer Notes"
        />
    </Section>
</template>
