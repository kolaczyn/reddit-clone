<template>
  <section class="flex items-center">
    <BaseAvatar class="mr-2 w-8 h-8" />
    <span class="text-sm flex-1">
      <nuxt-link :to="linkToSubreddit" class="hover:underline font-bold">
        <h4>r/{{ subredditName }}</h4>
      </nuxt-link>
      <span>{{ formattedNumberOfMembers }} members</span>
    </span>
    <nuxt-link :to="linkToJoin">
      <BaseButton :handle-click="joinSubreddit">
        Join
      </BaseButton>
    </nuxt-link>
  </section>
</template>

<script>
export default {
  props: {
    subredditName: {
      type: String,
      required: true
    },
    numberOfMembers: {
      type: Number,
      required: true
    }
  },
  computed: {
    linkToSubreddit () {
      return `/r/${this.subredditName}`
    },
    linkToJoin () {
      return `/r/${this.subredditName}/join`
    },
    formattedNumberOfMembers () {
      return Number(this.numberOfMembers).toLocaleString('en')
    }
  },
  methods: {
    joinSubreddit () {
      console.log('Joining subreddit')
    }
  }
}
</script>
