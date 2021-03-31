<template>
  <BasePaper class="p-1">
    <FilterBarButton :is-active="true">
      <template #icon>
        <IconHot />
      </template>
      Hot
    </FilterBarButton>
    <FilterBarButton>
      <template #icon>
        <IconNew />
      </template>
      New
    </FilterBarButton>
  </BasePaper>
</template>
