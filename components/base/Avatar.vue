<template>
  <img :src="require(`~/assets/img/${imgName}`)" class="rounded-full">
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
