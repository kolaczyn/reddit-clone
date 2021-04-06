<template>
  <div>
    <SubredditHeader subreddit-name="r/dadjokes">
      r/DadJokes - the best Dad Jokes on reddit
    </SubredditHeader>
    <LayoutMediumContainer class="pt-3">
      <LayoutMainTwoCols>
        <template #first>
          <FilterBar class="mb-3" />
          <PostsTimeline />
        </template>
        <template #second>
          <Sidebar />
        </template>
      </LayoutMainTwoCols>
    </LayoutMediumContainer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  asyncData ({ params }) {
    const subreddit = params.subreddit
    return { subreddit }
  }
})
</script>
