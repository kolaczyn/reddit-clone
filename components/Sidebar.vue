<template>
  <aside>
    <BaseLabeledPaper v-for="i in [0, 1, 2, 3]" :key="i" class="mb-2">
      <template #header>
        Lorem, ipsum
      </template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magnam eos ea architecto iure!
    </BaseLabeledPaper>
  </aside>
</template>
