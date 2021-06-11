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

<script>
export default {
  async asyncData ({ params, store }) {
    const subreddit = params.subreddit
    // console.log(subreddit)
    await store.dispatch('subreddit/fetchSubredditData', subreddit)

    // return { subreddit }
  }
}
</script>
