<template>
  <div class="bg-white w-full py-2 sticky top-0 shadow-md z-50">
    <LayoutLargeContainer class="flex items-center justify-between gap-4">
      <nuxt-link to="/r/all">
        <Logo />
      </nuxt-link>
      <NavbarSearchBar class="flex-grow md:max-w-xl" />
      <nuxt-link to="/login" class="md:block hidden">
        <BaseButton>
          Log In
        </BaseButton>
      </nuxt-link>
    </LayoutLargeContainer>
  </div>
</template>

<script>
export default {
}
</script>
