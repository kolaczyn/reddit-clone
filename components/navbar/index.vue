<template>
  <div class="bg-white w-full py-2">
    <LayoutLargeContainer class="flex items-center justify-between">
      <nuxt-link to="/r/all">
        <Logo />
      </nuxt-link>
      <NavbarSearchBar />
      <nuxt-link to="/login">
        <BaseButton :handle-click="handleClick">
          Log In
        </BaseButton>
      </nuxt-link>
    </LayoutLargeContainer>
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
