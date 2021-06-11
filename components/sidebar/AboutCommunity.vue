<template>
  <aside>
    <BaseLabeledPaper class="mb-2">
      <template #header>
        <slot name="header" />
      </template>
      <section>
        <div class="mb-2">
          <slot name="about" />
        </div>
        <div class="grid grid-cols-6">
          <SidebarSubredditStat v-for="{label, number} in stats" :key="label" class="col-span-2">
            <template #number>
              {{ number }}
            </template>
            {{ label }}
          </SidebarSubredditStat>
        </div>
        <hr class="my-2">
        <div class="flex gap-2 items-center">
          <IconCake />
          <slot name="created" />
        </div>
      </section>
    </baselabeledpaper>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('subreddit', ['stats'])
  }
}
</script>
