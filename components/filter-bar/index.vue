<template>
  <!-- There must a be a better way to do this in Vue, because this looks pretty ugly -->
  <BasePaper class="p-2">
    <ul class="flex gap-2 text-xs sm:text-base items-center">
      <li>
        <FilterBarButton name="Hot">
          <template #icon>
            <IconHot />
          </template>
          Hot
        </FilterBarButton>
      </li>
      <li>
        <FilterBarButton name="New">
          <template #icon>
            <IconNew />
          </template>
          New
        </FilterBarButton>
      </li>
      <li>
        <FilterBarButton name="Top">
          <template #icon>
            <IconTop />
          </template>
          Top
        </FilterBarButton>
      </li>
      <li class="flex-grow xs:inline-block hidden">
        <FilterBarButton name="TripleDot">
          <template #icon>
            <IconTripleDot />
          </template>
        </FilterBarButton>
      </li>
      <li class="xs:inline-block hidden">
        <FilterBarButton name="CardView">
          <template #icon>
            <IconCardView />
          </template>
          ▾
        </FilterBarButton>
      </li>
    </ul>
  </BasePaper>
</template>
