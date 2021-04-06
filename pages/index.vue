<template>
  <div>
    <SubredditHeader subreddit-name="r/dadjokes">
      r/DadJokes - the best Dad Jokes on reddit
    </SubredditHeader>
    <LayoutMediumContainer>
      <LayoutMainTwoCols class="mt-4">
        <template #first>
          <FilterBar class="mb-2" />
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
  methods: {
    handleClick () {
    // eslint-disable-next-line no-console
      console.log('you clicked me')
    }
  }
}
</script>
