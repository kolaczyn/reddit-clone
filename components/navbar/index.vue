<template>
  <div class="bg-white w-full py-2">
    <div class="container mx-auto flex items-center justify-between">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
      <NavbarSearchBar />
      <nuxt-link to="/login">
        <BaseButton :handle-click="handleClick">
          Log In
        </BaseButton>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      console.log('loggin in')
    }
  }
}
</script>
