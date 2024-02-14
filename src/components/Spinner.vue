<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

library.add(faSpinner);
</script>
<template>
    <FontAwesomeIcon class="fa-spin text-primary" icon="fa-spinner" />
</template>
