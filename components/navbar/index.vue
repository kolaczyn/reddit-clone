<template>
  <div class="bg-white w-full py-2 sticky top-0 shadow-md z-50">
    <LayoutLargeContainer class="flex items-center justify-between gap-4">
      <nuxt-link to="/r/all">
        <Logo />
      </nuxt-link>
      <NavbarSearchBar class="flex-grow md:max-w-xl" />
      <nuxt-link v-if="isLoggedIn" to="/r/all" class="md:block hidden">
        <BaseButton @click="logOut">
          Log Out
        </BaseButton>
      </nuxt-link>
      <nuxt-link v-else to="/r/all" class="md:block hidden">
        <BaseButton @click="logIn">
          Log In
        </BaseButton>
      </nuxt-link>
    </LayoutLargeContainer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    logIn () {
      this.$store.dispatch('logIn')
    },
    logOut () {
      this.$store.dispatch('logOut')
    }
  }
}
</script>
