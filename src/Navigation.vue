<template>
    <div class="flex h-screen">
        <nav class="fixed left-0 top-0 h-full w-64 overflow-y-scroll bg-primary-900 text-white">
            <ul class="flex flex-col gap-2 p-4">
                <li class="font-bold text-primary">SHCB Components</li>
                <li>
                    <a href="#inputs" class="block rounded-md p-2 hover:bg-primary-800">Inputs</a>
                </li>
                <li class="ml-2">
                    <a href="#input" class="block rounded-md p-2 hover:bg-primary-800">Input</a>
                </li>
                <li class="ml-2">
                    <a href="#switch" class="block rounded-md p-2 hover:bg-primary-800">Switch</a>
                </li>
                <li class="ml-2">
                    <a href="#checkbox" class="block rounded-md p-2 hover:bg-primary-800">Checkbox</a>
                </li>
                <li class="ml-2">
                    <a href="#file-input" class="block rounded-md p-2 hover:bg-primary-800">File Input</a>
                </li>
                <li class="ml-2">
                    <a href="#dropdown-search-bar" class="block rounded-md p-2 hover:bg-primary-800">Dropdown Search Bar</a>
                </li>
                <li class="ml-2">
                    <a href="#images" class="block rounded-md p-2 hover:bg-primary-800">Images</a>
                </li>
                <li class="ml-2">
                    <a href="#input-error" class="block rounded-md p-2 hover:bg-primary-800">Input Error</a>
                </li>
                <li class="ml-2">
                    <a href="#input-label" class="block rounded-md p-2 hover:bg-primary-800">Input Label</a>
                </li>
                <li class="ml-2">
                    <a href="#radio-button" class="block rounded-md p-2 hover:bg-primary-800">Radio Button</a>
                </li>
                <li class="ml-2">
                    <a href="#search-select" class="block rounded-md p-2 hover:bg-primary-800">Search Select</a>
                </li>
                <li class="ml-2">
                    <a href="#search-2-ajax" class="block rounded-md p-2 hover:bg-primary-800">Search 2 ajax</a>
                </li>
                <li class="ml-2">
                    <a href="#select-multiple" class="block rounded-md p-2 hover:bg-primary-800">Select Multiple</a>
                </li>
                <li class="ml-2">
                    <a href="#textarea" class="block rounded-md p-2 hover:bg-primary-800">Textarea</a>
                </li>
                <li class="ml-2">
                    <a href="#text-input" class="block rounded-md p-2 hover:bg-primary-800">Text Input</a>
                </li>

                <li>
                    <a href="#buttons" class="block rounded-md p-2 hover:bg-primary-800">Buttons</a>
                </li>
                <li>
                    <a href="#sections" class="block rounded-md p-2 hover:bg-primary-800">Sections</a>
                </li>
                <li>
                    <a href="#table" class="block rounded-md p-2 hover:bg-primary-800">Table</a>
                </li>
                <li>
                    <a href="#tableitemcard" class="block rounded-md p-2 hover:bg-primary-800">TableItemCard</a>
                </li>
                <li>
                    <a href="#alert" class="block rounded-md p-2 hover:bg-primary-800">Alert</a>
                </li>
                <li>
                    <a href="#descriptionlist" class="block rounded-md p-2 hover:bg-primary-800">Description List</a>
                </li>
                <li>
                    <a href="#descriptionlistitem" class="block rounded-md p-2 hover:bg-primary-800">Description List Item</a>
                </li>
            </ul>
        </nav>
        <slot />
    </div>
</template>
