<template>
  <!-- There must a be a better way to do this in Vue, because this looks pretty ugly -->
  <BasePaper class="p-2">
    <ul class="flex gap-2 items-center">
      <FilterBarButton :handle-click="() => handleClick('Hot')" :is-active="activeFilter === 'Hot'">
        <template #icon>
          <IconHot />
        </template>
        Hot
      </FilterBarButton>
      </li>
      <li>
        <FilterBarButton :handle-click="() => handleClick('New')" :is-active="activeFilter === 'New'">
          <template #icon>
            <IconNew />
          </template>
          New
        </FilterBarButton>
      </li>
      <li>
        <FilterBarButton :handle-click="() => handleClick('Top')" :is-active="activeFilter === 'Top'">
          <template #icon>
            <IconTop />
          </template>
          Top
        </FilterBarButton>
      </li>
      <li class="flex-grow">
        <FilterBarButton :handle-click="() => handleClick('TripleDot')" :is-active="activeFilter === 'TripleDot'">
          <template #icon>
            <IconTripleDot />
          </template>
        </FilterBarButton>
      </li>
      <li>
        <FilterBarButton :handle-click="() => handleClick('CardView')" :is-active="activeFilter === 'CardView'">
          <template #icon>
            <IconCardView />
          </template>
          ▾
        </FilterBarButton>
      </li>
    </ul>
  </BasePaper>
</template>

<script>
export default {
  data () {
    return {
      activeFilter: 'Hot'
    }
  },
  methods: {
    handleClick (label) {
      this.activeFilter = label
    }
  }
}
</script>
