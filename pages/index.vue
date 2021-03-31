<template>
  <div class="grid grid-cols-3 mt-2 gap-4 px-4 max-w-4xl mx-auto">
    <PostsTimeline class="col-span-2" />
    <Sidebar class="col-span-1" />
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
