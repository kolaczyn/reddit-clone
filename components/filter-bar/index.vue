<template>
  <BasePaper class="p-2">
    <ul class="flex gap-2 items-center">
      <li>
        <FilterBarButton is-active>
          <template #icon>
            <IconHot />
          </template>
          Hot
        </FilterBarButton>
      </li>
      <li>
        <FilterBarButton>
          <template #icon>
            <IconNew />
          </template>
          New
        </FilterBarButton>
      </li>
      <li>
        <FilterBarButton>
          <template #icon>
            <IconTop />
          </template>
          Top
        </FilterBarButton>
      </li>
      <li class="flex-grow">
        <FilterBarButton>
          <template #icon>
            <IconTripleDot />
          </template>
        </FilterBarButton>
      </li>
      <li>
        <FilterBarButton is-active>
          <template #icon>
            <IconCardView />
          </template>
          ▾
        </FilterBarButton>
      </li>
    </ul>
  </BasePaper>
</template>
