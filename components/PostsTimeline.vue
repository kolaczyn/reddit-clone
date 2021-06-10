<template>
  <main>
    <Post
      v-for="{user, title, upvotesCount, commentsCount, creationTimestamp, content, id} in postsData"
      :key="id"
      :user="user"
      :title="title"
      :comments-count="commentsCount"
      :upvotes-count="upvotesCount"
      :creation-timestamp="creationTimestamp"
      :content="content"
      class="mb-2"
    />
  </main>
</template>

<script>
import postsData from '@/static/postsData.json'
export default {
  data () {
    return { postsData }
  }
}

</script>
