<template>
  <div class="w-full">
    <div class="h-32 banner" />
    <div class="bg-white py-2">
      <LayoutMediumContainer class="-mt-6 flex items-start">
        <BaseAvatar class="border-4 border-white box-content mr-4 w-20 h-20" />
        <div class="mt-6 flex items-start">
          <div class="max-w-sm">
            <h1 class="font-bold text-2xl mr-4">
              <slot />
            </h1>
            <span class="text-gray-600">
              {{ subredditName }}
            </span>
          </div>
          <BaseButton class="xs:inline-block hidden">
            Join
          </BaseButton>
        </div>
      </LayoutMediumContainer>
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
