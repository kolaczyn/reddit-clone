<template>
  <img :src="require(`~/assets/img/${imgName}`)" class="rounded-full w-8 h-8">
</template>

<script>
export default {
  props: {
    imgName: {
      type: String,
      default: 'default-subreddit-image.png'
    }
  }
}
</script>
