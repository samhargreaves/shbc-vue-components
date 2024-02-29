<script setup>
import { Input, Section, RadioButton, FileDropZoneInput } from "./index";
import {
    SubmitButton,
    PrimaryButton,
    SecondaryButton,
    DangerButton,
} from "./index";
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    subscribe: "",
    img: "",
});
</script>
<template>
    <main class="content-container bg-dotted h-screen gutters py-8">
        <Section class="text-center mb-8">
            <h2 class="text-xl">Components showcase</h2>
            <div class="w-4 h-4 bg-primary rounded-full inline-block" />
            Primary
            <div class="w-4 h-4 bg-accent rounded-full inline-block" />
            Accent
        </Section>
        <Section class="mb-8" header="Form">
            <Input v-bind:form="form" autofocus field="name" />
            <Input v-bind:form="form" field="email" type="email" />
            <Input v-bind:form="form" field="password" type="password" />
            <Input v-bind:form="form" field="subscribe" type="checkbox" />
            <FileDropZoneInput v-bind:form="form" field="img" />

            <SubmitButton
                class="mt-2"
                v-bind:form="form"
                :disabled="form.processing"
                >Submit</SubmitButton
            >
        </Section>
        <Section class="mb-8" header="Buttons">
            <div class="flex w-full gap-5">
                <SubmitButton v-bind:form="form">Submit</SubmitButton>
                <PrimaryButton>Primary</PrimaryButton>
                <SecondaryButton>Secondary</SecondaryButton>
                <DangerButton>Danger</DangerButton>
            </div>
        </Section>
    </main>
</template>
