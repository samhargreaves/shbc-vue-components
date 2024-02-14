<script setup>
import { computed } from "vue";
import { Link } from "@inertiajs/vue3";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faChartSimple,
    faUsers,
    faMobileScreen,
    faHandshake,
    faDatabase,
    faHardDrive,
    faArrowRotateLeft,
    faWifi,
    faTruckField,
    faTruckArrowRight,
    faMapLocationDot,
    faBarcode,
    faWrench,
    faWallet,
    faWarehouse,
    faMoneyBill1,
    faReceipt,
    faUsersRectangle,
    faPeopleArrows,
    faEnvelope,
    faBell,
    faBagShopping,
    faCartArrowDown,
    faUserGear,
    faGavel,
    faPlugCircleXmark,
    faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(
    faChartSimple,
    faUsers,
    faMobileScreen,
    faHandshake,
    faDatabase,
    faHardDrive,
    faArrowRotateLeft,
    faWifi,
    faTruckField,
    faTruckArrowRight,
    faMapLocationDot,
    faBarcode,
    faWrench,
    faWallet,
    faWarehouse,
    faMoneyBill1,
    faReceipt,
    faUsersRectangle,
    faPeopleArrows,
    faEnvelope,
    faBell,
    faBagShopping,
    faCartArrowDown,
    faUserGear,
    faGavel,
    faPlugCircleXmark,
    faRepeat
);
const props = defineProps({
    href: String,
    active: Boolean,
    icon: String,
});

const classes = computed(() =>
    props.active
        ? "flex items-center p-2 text-base font-normal bg-accent text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:hover:bg-gray-700"
        : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
);
const iconName = props.icon ? "fas " + props.icon : "";
</script>

<template>
    <Link :href="href" :class="classes">
        <FontAwesomeIcon v-bind:icon="iconName" />
        <span class="ml-3 flex-1 whitespace-nowrap">
            <slot />
        </span>
    </Link>
</template>
