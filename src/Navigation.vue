<template>
  <div class="h-screen flex">
    <nav class="bg-primary-900 text-white h-full w-64 fixed top-0 left-0">
      <ul class="flex flex-col gap-2 p-4">
        <li class="font-bold text-primary">SHCB Components</li>
        <li>
          <a href="#inputs" class="hover:bg-primary-800 p-2 rounded-md block"
            >Inputs</a
          >
        </li>
        <li class="ml-2">
          <a href="#input" class="hover:bg-primary-800 p-2 rounded-md block"
            >Input</a
          >
        </li>
        <li class="ml-2">
          <a href="#switch" class="hover:bg-primary-800 p-2 rounded-md block"
            >Switch</a
          >
        </li>
        <li class="ml-2">
          <a
            href="#file-input"
            class="hover:bg-primary-800 p-2 rounded-md block"
            >File Input</a
          >
        </li>

        <li>
          <a href="#buttons" class="hover:bg-primary-800 p-2 rounded-md block"
            >Buttons</a
          >
        </li>
        <li>
          <a href="#sections" class="hover:bg-primary-800 p-2 rounded-md block"
            >Sections</a
          >
        </li>
      </ul>
    </nav>
    <slot />
  </div>
</template>
