<template>
  <BasePaper class="flex cursor-pointer">
    <PostUpvoteSection class="bg-gray-200 p-2 w-20">
      {{ upvotes }}
    </PostUpvoteSection>
    <div class="p-2 pb-0">
      <PostMetaInfo user="ser" creation-date="11 hours ago" class="mb-2" />
      <PostTitle class="mb-2" />
      <PostContent />
      <PostInteractionButtons class="mt-2 transform -translate-x-1" />
    </div>
  </BasePaper>
</template>

<script>
export default {
  computed: {
    upvotes () {
      const thousands = Math.floor(Math.random() * 10) + 1
      const hundreds = Math.floor(Math.random() * 10) + 1
      return `${thousands}.${hundreds}k`
    }
  }
}
</script>
