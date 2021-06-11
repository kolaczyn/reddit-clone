<template>
  <div>
    <SidebarAboutCommunity>
      <template #header>
        About Community
      </template>
      <template #about>
        {{ description }}
      </template>
      <template #created>
        <span>Created {{ createdAt }}</span>
      </template>
    </SidebarAboutCommunity>
    <SidebarRelatedCommunities />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('subreddit', ['description', 'createdAt'])
  }
}
</script>
