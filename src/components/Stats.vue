<script setup>
const emit = defineEmits();

const props = defineProps({
    stats: Object,
    statusName: {
        type: String,
        default: null,
    },
});

const onClick = (status) => {
    if (ifSelected(status)) {
        status = null;
    }
    emit("updateSearch", status);
};

const ifSelected = (status) => {
    if (props.statusName != null) {
        return route().params[props.statusName] == status;
    }
    return route().params.status == status;
};
</script>

<template>
    <div>
        <div class="flex flex-wrap gap-2 lg:flex-nowrap">
            <div
                v-for="s in stats"
                class="flex w-full cursor-pointer flex-col rounded-lg border bg-gray-100 shadow"
                :class="{
                    'border-primary bg-primary-50 shadow-primary-50':
                        ifSelected(s.name),
                }"
                @click="onClick(s.name)"
                :key="s.value"
            >
                <div>
                    <div
                        class="h:10 rounded-t-lg bg-white py-1 text-center md:h-10 md:py-2"
                    >
                        <h5
                            class="font-medium text-xl leading-tight text-neutral-800"
                        >
                            {{ s.value }}
                        </h5>
                    </div>
                </div>
                <div
                    class="flex flex-auto flex-col gap-y-4 p-1 text-center md:py-2"
                >
                    {{ s.label ?? s.name }}
                </div>
            </div>
        </div>
    </div>
</template>
