<template>
  <BasePaper>
    <div class="bg-blue-500 h-24 relative mb-8">
      <UserAvatar class="absolute left-2 top-6" />
    </div>
    <div class="p-2 pt-0">
      <div class="text-sm font-bold mb-2">
        u/{{ username }}
      </div>
      <p class="leading-tight mb-2">
        {{ description }}
      </p>
      <section class="grid grid-cols-2 gap-2 text-sm">
        <section class="col-span-1">
          <div class="font-bold">
            Karma
          </div>
          <div class="flex items-center gap-1">
            <IconKarma class="inline text-blue-500" />
            <span class="text-gray-500">{{ karma }}</span>
          </div>
        </section>
        <section class="col-span-1">
          <div class="font-bold">
            Cake day
          </div>
          <div class="flex items-center gap-1">
            <IconCake class="inline text-blue-500" />
            <span class="text-gray-500">{{ cakeDay }}</span>
          </div>
        </section>
      </section>
      <BaseButton class="w-full mt-2 mb-2">
        Follow
      </BaseButton>
      <div v-if="isMoreOptionsOn">
        <button class="font-bold text-blue-600 block">
          Send Message
        </button>
        <button class="font-bold text-blue-600 block">
          Report User
        </button>
      </div>
      <button class="font-bold text-blue-600 ml-auto block" @click="toggleShowMoreOptions">
        {{ showOptionsText }}
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
  },
  data () {
    return {
      isMoreOptionsOn: false
    }
  },
  computed: {
    showOptionsText () {
      return this.isMoreOptionsOn ? 'Fewer Options' : 'More Options'
    }
  },
  methods: {
    toggleShowMoreOptions () {
      this.isMoreOptionsOn = !this.isMoreOptionsOn
    }
  }
}
</script>
