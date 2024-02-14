import { usePage } from "@inertiajs/vue3";

function numberFormat(number) {
    return number.toLocaleString("en-GB", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

function moneyFormat(number) {
    return new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
    }).format(number);
}

function hasPermission(permission) {
    const page = usePage();
    let userPermissions = page.props.auth.permissions;
    return userPermissions.includes(permission);
}

export { numberFormat, moneyFormat, hasPermission };
