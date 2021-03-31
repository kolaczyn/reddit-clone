<template>
  <BaseLabeledPaper class="mb-2">
    <template #header>
      Related Communities
    </template>
    <div class="flex flex-col gap-2">
      <SidebarRelatedCommunity subreddit-name="Jokes" :number-of-members="20369915" />
      <SidebarRelatedCommunity subreddit-name="DadJokes" :number-of-members="120801" />
      <SidebarRelatedCommunity subreddit-name="Angular" :number-of-members="100021" />
    </div>
    </section>
  </baselabeledpaper>
</template>
