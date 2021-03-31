<template>
  <ul class="flex">
    <li>
      <PostInteractionButton>
        <template #icon>
          <IconComment />
        </template>
        3 Comments
      </PostInteractionButton>
    </li>
    <li>
      <PostInteractionButton>
        <template #icon>
          <IconShare />
        </template>
        Share
      </PostInteractionButton>
    </li>
    <li>
      <PostInteractionButton>
        <template #icon>
          <IconSave />
        </template>
        Save
      </PostInteractionButton>
    </li>
    <li>
      <PostInteractionButton>
        <template #icon>
          <IconTripleDot />
        </template>
      </PostInteractionButton>
    </li>
  </ul>
</template>
