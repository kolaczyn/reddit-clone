<template>
  <BasePaper>
    <header class="bg-gray-200 p-2">
      <h3 class="font-bold">
        <slot name="header" />
      </h3>
    </header>
    <div class="p-2">
      <slot />
    </div>
  </BasePaper>
</template>
