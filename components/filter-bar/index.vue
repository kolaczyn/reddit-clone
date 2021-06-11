<template>
  <!-- There must a be a better way to do this in Vue, because this looks pretty ugly -->
  <BasePaper class="p-2">
    <ul class="flex gap-2 text-xs sm:text-base items-center">
      <FilterBarButton :is-active="activeFilter === 'Hot'" @click="handleClick('Hot')">
        <template #icon>
          <IconHot />
        </template>
        Hot
      </FilterBarButton>
      </li>
      <li>
        <FilterBarButton :is-active="activeFilter === 'New'" @click="handleClick('New')">
          <template #icon>
            <IconNew />
          </template>
          New
        </FilterBarButton>
      </li>
      <li>
        <FilterBarButton :is-active="activeFilter === 'Top'" @click="handleClick('Top')">
          <template #icon>
            <IconTop />
          </template>
          Top
        </FilterBarButton>
      </li>
      <li class="flex-grow xs:inline-block hidden">
        <FilterBarButton :is-active="activeFilter === 'TripleDot'" @click="handleClick('TripleDot')">
          <template #icon>
            <IconTripleDot />
          </template>
        </FilterBarButton>
      </li>
      <li class="xs:inline-block hidden">
        <FilterBarButton :is-active="activeFilter === 'CardView'" @click="handleClick('CardView')">
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
