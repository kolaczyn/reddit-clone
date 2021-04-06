<template>
  <div class="m-2 px-4 max-w-4xl mx-auto">
    <LayoutMainTwoCols class="mt-2">
      <template #first>
        <FilterBar class="mb-2" />
        <PostsTimeline />
      </template>
      <template #second>
        <Sidebar />
      </template>
    </LayoutMainTwoCols>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      // eslint-disable-next-line no-console
      console.log('you clicked me')
    }
  }
}
</script>
