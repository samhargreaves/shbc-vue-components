import * as components from "./components";

const ComponentsSHBC = {
    install(App) {
        for (const componentKey in components) {
            App.component(componentKey, components[componentKey]);
        }
    },
};

export default ComponentsSHBC;
export * from "./components";
export * from "./Helpers.js";
