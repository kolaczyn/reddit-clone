<template>
  <BaseLabeledPaper class="mb-2">
    <template #header>
      Related Communities
    </template>
    <div class="flex flex-col gap-2">
      <SidebarRelatedCommunity v-for="{members, slug} in otherSubreddits" :key="slug" :subreddit-name="slug" :number-of-members="members" />
      <!-- <SidebarRelatedCommunity subreddit-name="Jokes" :number-of-members="20369915" />
      <SidebarRelatedCommunity subreddit-name="DadJokes" :number-of-members="120801" />
      <SidebarRelatedCommunity subreddit-name="Angular" :number-of-members="100021" /> -->
    </div>
  </BaseLabeledPaper>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('otherSubreddits', ['otherSubreddits'])
  },
  async mounted () {
    // this.$store.dispatch('otherSubreddits/clearOtherSubreddits')
    await this.$store.dispatch('otherSubreddits/fetchOtherSubreddits')
  }
}
</script>
