<template>
  <BasePaper class="flex cursor-pointer">
    <PostUpvoteSection class="bg-gray-200 p-2 w-16">
      {{ upvotesCount }}
    </PostUpvoteSection>
    <div class="p-2 pb-0">
      <PostMetaInfo :user="user" :creation-date="creationTimestamp" class="mb-2" />
      <PostTitle class="mb-2">
        {{ title }}
      </PostTitle>
      <PostContent>
        {{ content }}
      </PostContent>
      <PostInteractionButtons :comments-count="commentsCount" class="mt-2 transform -translate-x-1" />
    </div>
  </BasePaper>
</template>

<script>
export default {
  props: {
    user: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    upvotesCount: {
      type: String,
      required: true
    },
    commentsCount: {
      type: Number,
      required: true
    },
    creationTimestamp: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>
