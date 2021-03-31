<template>
  <div class="w-full">
    <div class="h-32 banner" />
    <div class="bg-white py-2">
      <div class="px-4 -mt-6 mx-auto max-w-4xl flex items-start">
        <BaseAvatar class="border-4 border-white box-content mr-4 w-20 h-20" />
        <div class="mt-6">
          <div class="flex items-center">
            <h1 class="font-bold text-2xl mr-4">
              <slot />
            </h1>
            <BaseButton>
              Join
            </BaseButton>
          </div>
          <span class="text-gray-600">
            {{ subredditName }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subredditName: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.banner {
  /* background: url("~assets/img/default-subreddit-image.png"); */
  background: url('~assets/img/default-subreddit-hero.jpg');
  @apply object-cover bg-center bg-no-repeat;
}
</style>
