<template>
  <div class="bg-white w-full py-2">
    <div class="container mx-auto flex items-center justify-between">
      <nav>
        <nuxt-link to="/" class="font-bold text-red-400">
          reddit
        </nuxt-link>
      </nav>
      <NavbarSearchBar />
      <nuxt-link to="/login">
        <BaseButton>
          Log In
        </BaseButton>
      </nuxt-link>
    </div>
  </div>
</template>
