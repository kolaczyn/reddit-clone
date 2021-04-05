<template>
  <BasePaper>
    <div class="bg-blue-500 h-24 relative mb-8">
      <UserAvatar class="absolute left-2 top-8" />
    </div>
    <div class="p-2">
      <div class="text-sm font-bold">
        u/{{ username }}
      </div>
      <p>{{ description }}</p>
      <section class="grid grid-cols-2 gap-2">
        <section class="col-span-1">
          <span class="font-bold">Karma</span>
          <span>{{ karma }}</span>
        </section>
        <section class="col-span-1">
          <span class="font-bold">Cake day</span>
          <span>{{ cakeDay }}</span>
        </section>
      </section>
      <BaseButton class="w-full">
        Follow
      </BaseButton>
      <button class="font-bold text-blue-600 ml-auto block">
        More options
      </button>
    </div>
  </BasePaper>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    karma: {
      type: Number,
      required: true
    },
    cakeDay: {
      type: String,
      required: true
    }
  }
}
</script>
