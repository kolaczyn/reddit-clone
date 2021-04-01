<template>
  <div class="min-h-screen bg-gray-800">
    <Navbar />
    <SubredditHeader subreddit-name="r/dadjokes">
      r/DadJokes - the best Dad Jokes on reddit
    </SubredditHeader>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Reddit'
  }
}
</script>
