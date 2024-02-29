<script setup>
import { Input, Section } from "@/components/index";
import { useForm } from "@inertiajs/vue3";

const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});
</script>
<template>
    asd
    <Section header="Form">
        <Input v-bind:form="form" autofocus field="name" />
        <Input v-bind:form="form" field="email" type="email" />
        <Input v-bind:form="form" field="password" type="password" />
    </Section>
</template>
