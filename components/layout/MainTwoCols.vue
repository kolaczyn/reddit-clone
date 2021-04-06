<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="md:col-span-2 col-span-3">
      <slot name="first" />
    </div>
    <div class="md:col-span-1 hidden md:block">
      <slot name="second" />
    </div>
  </div>
</template>
