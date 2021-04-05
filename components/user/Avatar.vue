<template>
  <div class="w-24 border-white border-4 rounded">
    <img :src="require(`~/assets/img/${imgName}`)">
  </div>
</template>

<script>
export default {
  props: {
    imgName: {
      type: String,
      required: false,
      default: 'default-subreddit-image.png'
    }
  }
}
</script>
