<template>
  <section class="flex flex-col items-center text-gray-500">
    <PostVoteButton>
      <IconArrow class="rotate-180 transform group-hover:text-red-500" />
    </PostVoteButton>
    <span class="text-sm text-black font-bold">
      <slot />
    </span>
    <PostVoteButton>
      <IconArrow class="group-hover:text-blue-500  group-active:text-blue-500" />
    </PostVoteButton>
  </section>
</template>
