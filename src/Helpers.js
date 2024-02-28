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

let inertiaRouter = null;
function setInertiaRouter(router) {
    inertiaRouter = router;
}

function getInertiaRouter() {
    return inertiaRouter;
}

export {
    numberFormat,
    moneyFormat,
    hasPermission,
    setInertiaRouter,
    getInertiaRouter,
};
