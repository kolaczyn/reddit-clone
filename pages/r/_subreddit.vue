<template>
  <div>
    <p>Welcome on r/{{ subreddit }}</p>
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
