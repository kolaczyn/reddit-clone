<template>
  <section class="text-gray-500 text-sm">
    Posted by <nuxt-link :to="linkToProfile()" class="hover:underline">
      u/{{ user }}
    </nuxt-link>
    {{ creationDate }}
  </section>
</template>

<script>
export default {
  props: {
    user: {
      type: String,
      required: true
    },
    creationDate: {
      type: String,
      required: true
    }
  },
  methods: {
    linkToProfile () {
      return `/u/${this.user}`
    }
  }
}
</script>
